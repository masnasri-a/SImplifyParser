
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /metadata/categories', () => {
	const expectResult = {};

	test('Endpoint Test v1/metadata/categories Response - 200 OK', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/metadata/categories');
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> = { 'id': 'number', 'name': 'string' }
		const jsonResult = await Issues.json()
		for (const key of jsonResult) {
            for (const submenu in key){
                expect.soft(typeof key[submenu]).toBe(DataTypeParser[submenu])
            }
		}
	});
});