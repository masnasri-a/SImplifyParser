
import { test, expect } from "@playwright/test";
import { AUTH } from "../config/auth";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /businessUser/updateBusinessUser', () => {
	const auth = AUTH
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test v1/businessUser/updateBusinessUser Response - 200 OK', async ({ request }) => {
		const Issues = await request.put('https://api.estidar.com/api/v1/businessUser/updateBusinessUser',{data: {'name': 'Nasri Adzlani'},headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> = {'businessuserid': 'number', 'businesspartnerid': 'number', 'name': 'string', 'email': 'string', 'phonenumber': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});

	test('Endpoint Test v1/businessUser/updateBusinessUser Response - 400 Bad Request', async ({ request }) => {
		const Issues = await request.put('https://api.estidar.com/api/v1/businessUser/updateBusinessUser',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(400);
		const DataTypeParser: Record<string, any> = {'error': 'object'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});

	test('Endpoint Test v1/businessUser/updateBusinessUser Response - 401 Unauthorize', async ({ request }) => {
		const Issues = await request.put('https://api.estidar.com/api/v1/businessUser/updateBusinessUser',{data: {'name': 'Nasri Adzlani'}} );
		expect.soft(Issues.status()).toBe(401);
		const DataTypeParser: Record<string, any> = {'message': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});
});