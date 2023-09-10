import json


def body_parser(resp: str):
    results = ""
    try:
        loads = json.loads(resp)
        # print("loads : "+str(loads))
        result = {}
        if isinstance(loads, dict):
            for key, value in loads.items():
                key = key.lower()
                if isinstance(value, int):
                    result[key] = "number"
                elif isinstance(value, str):
                    result[key] = "string"
                elif isinstance(value, bool):
                    result[key] = "boolean"
                elif isinstance(value, list):
                    result[key] = "object"
                elif isinstance(value, dict):
                    result[key] = "object"
                elif isinstance(value, None):
                    result[key] = "null"
                else:
                    print("else: "+str(key))
                    print(type(value))
                    exit()
            results += "\t\tconst DataTypeParser: Record<string, any> = " + \
                str(result)
            results += """
            \t\tconst jsonResult = await Issues.json()
                \tfor (const key in jsonResult) {
                    \t\texpect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                \t}
            """
        elif isinstance(loads, list):
            result = {}
            for item in loads:
                if isinstance(item, dict):
                    # print(item)
                    for key, value in item.items():
                        if isinstance(value, int):
                            result[key] = "number"
                        elif isinstance(value, str):
                            result[key] = "string"
                        elif isinstance(value, bool):
                            result[key] = "boolean"
                        elif isinstance(value, list):
                            result[key] = "object"
                            temp = {}
                            for item_value in value:
                                if isinstance(item_value, int):
                                    result[f"{key}_result"] = "number"
                                elif isinstance(item_value, str):
                                    result[f"{key}_result"] = "string"
                                elif isinstance(item_value, bool):
                                    result[f"{key}_result"] = "boolean"
                                elif isinstance(item_value, list):
                                    result[f"{key}_result"] = "object"
                                elif isinstance(item_value, dict):
                                    temp[f"{key}_result"] = "object"

                        elif isinstance(value, dict):
                            result[key] = "object"
                            temp = {}
                            for keys, subitem in value.items():
                                if isinstance(subitem, int):
                                    temp[keys] = "number"
                                elif isinstance(subitem, str):
                                    temp[keys] = "string"
                                elif isinstance(subitem, bool):
                                    temp[keys] = "boolean"
                                elif isinstance(subitem, list):
                                    temp[keys] = "object"
                                elif isinstance(subitem, dict):
                                    temp[keys] = "object"
                            result[f"{key}_result"] = temp 
                        elif isinstance(value, None):
                            result[key] = "null"
                        else:
                            print("else: "+str(key))
                            print(type(value))
                            exit()
                    # print("===++++===")
            results += "\t\tconst DataTypeParser: Record<string, any> = " + \
                str(result)
            results += """
            \t\tconst jsonResult = await Issues.json()
                \tfor (const items of jsonResult){
                \tfor (const key in items) {
                    \t\texpect.soft(typeof items[key]).toBe(DataTypeParser[key])
                \t}
                break
                \n\t}
            """
            # print(result)
            # exit()

    except Exception as e:
        # print(e)
        # exit()
        result = "string"
        if isinstance(resp, int):
            result = "number"
        elif isinstance(resp, str):
            result = "string"
        elif isinstance(resp, bool):
            result = "boolean"
        else:
            print("else")
            print(type(resp))
            exit()
        results = f"""
        \t\tconst jsonText = await Issues.text();
        \t\texpect.soft(typeof jsonText).toBe("{result}")
    """
    return results


def parser_code(url: str, method: str, status: int, name: str, headers, parsed_body):
    parsed = "\n\n\ttest('Endpoint Test "+'/'.join(url.split("?")[0].split("/")[-3:])+" "+name + \
        "', async ({ request }) => {"
    parsed += "\n\t\tconst Issues = await request."+method.lower()+"('"+url+"'"
    if status < 401:
        body_string = ""
        if parsed_body:
            body_string += "data: "+str(parsed_body)+","
        parsed += ",{"+body_string+"headers:{Authorization:`Bearer ${auth}`}}"
    elif parsed_body:
        parsed += ",{data: "+str(parsed_body)+"}"
    parsed += " );"
    parsed += "\n\t\texpect.soft(Issues.status()).toBe("+str(status)+");\n"
    return parsed


def parser_test(item: dict):
    # Auth Handle
    # print(item)
    # exit()
    request = item['request']
    url = request['url']['raw'].replace("{{base_url}}", "")
    authentication = False
    response = item['response']

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
                    header_item['key']: header_item['value']
                }
            )
    parsed_body = None
    if 'body' in request and request['body']['mode'] == "raw":
        print("raw")
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
    print(" * ".center(100))
    parser_result = """
import { test, expect } from "@playwright/test";
import { AUTH } from "../config/auth";
test.describe.configure({ mode: 'serial' });
"""
    parser_result += "\ntest.describe('Test Endpoint "+url+"', () => {"
    if authentication:
        parser_result += "\n\tconst auth = AUTH"
    parser_result += "\n\tconst expectResult = {};"
    parser_result += "\n\tconst sortedKeyResult = Object.keys(expectResult).sort();"
    
    for response_data in response:
        name = response_data['name']
        original_request = response_data['originalRequest']
        url_response = original_request['url']['raw'].replace("{","").replace("}","").replace("base_url","https://api.estidar.com/api/v1")
        body = response_data['body']
        parse_code = parser_code(
            url_response, method, response_data['code'], name, headers, parsed_body)
        parser_result += parse_code
        print(body)
        body_checker = body_parser(body)
        parser_result += body_checker
        parser_result += "\t});"
    print(parser_result)
    print("++++++")

    parser_result += "\n});"
    return parser_result
