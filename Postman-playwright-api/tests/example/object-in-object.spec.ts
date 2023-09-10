
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

// RESPONSE LIST OF DICT
test.describe('Test Endpoint /metadata/languages', () => {
    const expectResult = {};

    test('Endpoint Test v1/metadata/categories Response - 200 OK', async ({ request }) => {
        // const Issues = await request.get('https://api.estidar.com/api/v1/metadata/languages');
        // expect.soft(Issues.status()).toBe(200);
        // const jsonResult = {
        //         "id": 55,
        //         "name": "Allo Bank Indonesia (sebelumnya bernama Bank Harda Internasional)",
        //         "code": "HARDA_INTERNASIONAL",
        //         "obj":{
        //             "name":"name1",
        //             "intTest":23
        //         },
        //         "list_str":[
        //             "str1", "str2"
        //         ],
        //         "list_obj":[
        //             {
        //                 "name":"name1",
        //                 "intTest":12
        //             }
        //         ],
        //         "example":12
        //     }

        // const jsonResult:any = [
        //     {
        //         "id": 55,
        //         "name": "Allo Bank Indonesia (sebelumnya bernama Bank Harda Internasional)",
        //         "code": "HARDA_INTERNASIONAL"
        //     },
        //     {
        //         "id": 7,
        //         "name": "Anglomas International Bank",
        //         "code": "ANGLOMAS"
        //     },
        // ]

        const jsonResult:any = [
            "test1", "test2"
        ]
        const DataTypeParser = "string"
        // const DataTypeParser: Record<string, any> = { 'id': 'number', 'name': 'string', 'code': 'string', 'obj': 'object', 'example': 'number' }
        const objParser: Record<string, any> = { 'name': 'string', 'intTest': 'number' }
        const insideObject: any = {
            "list_obj": {
                "name": "string",
                "intTest": "number"
            },
            "list_str": "string"
        }

        // const jsonResult = await Issues.json()
        // Jika Array
        if (Array.isArray(jsonResult)) {
            if (typeof jsonResult[0] == "object"){
                for (const key of jsonResult) {
                    for (const submenu in key){
                        expect.soft(typeof key[submenu]).toBe(DataTypeParser[submenu])
                    }
                }
            }else{
                for (const key of jsonResult){
                    expect.soft(typeof key).toBe(DataTypeParser)
                }
            }
        } else {
            for (const key in jsonResult) {
                if (typeof jsonResult[key] == 'object') {
                    // If array
                    if (Array.isArray(jsonResult[key])) {
                        for (const item of jsonResult[key]) {
                            if (typeof item == "object") {
                                for (const subitem in item) {
                                    expect.soft(typeof item[subitem]).toBe(insideObject[key][subitem])
                                }
                            } else {
                                expect.soft(typeof item).toBe(insideObject[key])
                            }
                        }
                    } else {
                        for (const item in jsonResult[key]) {
                            expect.soft(typeof jsonResult[key][item]).toBe(objParser[item])
                        }
                    }
                } else {
                    expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key])
                }
            }

        }
    });
});