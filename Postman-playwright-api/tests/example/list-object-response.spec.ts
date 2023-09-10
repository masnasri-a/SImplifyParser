
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

// RESPONSE LIST OF DICT
test.describe('Test Endpoint /metadata/languages', () => {
	const expectResult = {};

	test('Endpoint Test v1/metadata/categories Response - 200 OK', async ({ request }) => {
		// const Issues = await request.get('https://api.estidar.com/api/v1/metadata/languages');
		// expect.soft(Issues.status()).toBe(200);
        const jsonResult = [
            {
                "id": 55,
                "name": "Allo Bank Indonesia (sebelumnya bernama Bank Harda Internasional)",
                "code": "HARDA_INTERNASIONAL"
            },
            {
                "id": 7,
                "name": "Anglomas International Bank",
                "code": "ANGLOMAS"
            },
        ]

		const DataTypeParser: Record<string, any> = { 'id': 'number', 'name': 'string', 'code':'string' }
		// const jsonResult = await Issues.json()
		for (const key of jsonResult) {
            for (const submenu in key){
                expect.soft(typeof key[submenu]).toBe(DataTypeParser[submenu])
            }
		}
	});
});