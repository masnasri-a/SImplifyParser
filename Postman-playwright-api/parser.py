import json


def parser_test(item:dict):
    # Auth Handle
    request = item['request']
    url = request['url']['raw'].replace("{{base_url}}","")
    path = request['url']['path']
    authentication = False
    if 'auth' in request:
        auth = request['auth']
        if 'bearer' in auth['type']:
            authentication = True
    method = request['method']
    header_info = request['header']
    headers = []
    for header_item in header_info:
        if 'disabled' not in header_item or header_item['disabled'] == False:
            headers.append(
                {
                    header_item['key']:header_item['value']
                }
            )
    parsed_body = None
    if 'body' in request and request['body']['mode'] == "raw":
        if 'options' not in request['body']:
            parsed_body = json.loads(request['body']['raw'])
        else:
            option_body = request['body']['options']
            if 'raw' in option_body:
                language_body = option_body['raw']['language']
                if 'json' in language_body:
                    try:
                        parsed_body = json.loads(request['body']['raw'])
                    except:
                        parsed_body = {}
    print(f"url : {url}")
    print(f'method : {method}')
    if authentication:
        print('authenticated')
    print(f'header : {headers}')
    print(f'body : {parsed_body}')
    print("="*100)
    parser_result = """
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });
"""
    parser_result += "\ntest.describe('Test Endpoint "+url+"', () => {"
    if authentication:
        parser_result += "\n\tconst auth = process.env.AUTH!"
    parser_result += "\n\tconst expectResult = {};"
    parser_result += "\n\tconst sortedKeyResult = Object.keys(expectResult).sort();"
    if parsed_body:
        parser_result += "\n\tconst requestBody = "+str(parsed_body)
    success_parsed_test = "\n\n\ttest('Endpoint Test "+url+"', async ({ request }) => {"
    success_parsed_test += "\n\t\tconst Issues = await request."+method.lower()+"('"+url+"'"
    if headers or authentication:
        body_string = ""
        if parsed_body:
            body_string += "data: requestBody,"
        success_parsed_test += ",{"+body_string+"headers:{Authorization:`Bearer ${auth}`}}"
    elif parsed_body:
        success_parsed_test += ",{data: requestBody}"
    success_parsed_test += " );"
    success_parsed_test += "\n\t\texpect(Issues.ok()).toBeTruthy();"
    success_parsed_test += "\n\t\tconst sortedResult = Object.keys(await Issues.json()).sort();"
    success_parsed_test += "\n\t\texpect(Object.keys(sortedResult)).toEqual(sortedKeyResult);"
    success_parsed_test += "\n\t});"

    if not authentication:
        parser_result += success_parsed_test
        
    else:
        parser_result += "\n\n\ttest('Endpoint Test "+url+" without auth', async ({ request }) => {"
        parser_result += "\n\t\tconst Issues = await request.get('"+url+"');"
        parser_result += "\n\t\texpect.soft(Issues.status(401)).toBe();\n\t});\n"

        parser_result += success_parsed_test
    parser_result += "\n});"
    return parser_result

