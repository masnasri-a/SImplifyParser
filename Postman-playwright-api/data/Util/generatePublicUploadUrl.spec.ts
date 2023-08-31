
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /util/generatePublicUploadUrl', () => {
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'fileKey': '', 'contentType': 'image/jpeg'}

	test('Endpoint Test /util/generatePublicUploadUrl', async ({ request }) => {
		const Issues = await request.post('/util/generatePublicUploadUrl',{data: requestBody} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});