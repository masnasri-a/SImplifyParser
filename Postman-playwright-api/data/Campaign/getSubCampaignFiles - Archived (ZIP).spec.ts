
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/getSubCampaignFiles?subCampaignId=360&keys[]=ICE_OP/151/cekgnaooits6kqnbedbg_Cara-Ikut-Flash-Sale-Tokopedia.png&keys[]=ICE_OP/151/cekgnd0oits6kqnbedc0_ice-chat-module_README.pdf', () => {
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /campaign/getSubCampaignFiles?subCampaignId=360&keys[]=ICE_OP/151/cekgnaooits6kqnbedbg_Cara-Ikut-Flash-Sale-Tokopedia.png&keys[]=ICE_OP/151/cekgnd0oits6kqnbedc0_ice-chat-module_README.pdf', async ({ request }) => {
		const Issues = await request.get('/campaign/getSubCampaignFiles?subCampaignId=360&keys[]=ICE_OP/151/cekgnaooits6kqnbedbg_Cara-Ikut-Flash-Sale-Tokopedia.png&keys[]=ICE_OP/151/cekgnd0oits6kqnbedc0_ice-chat-module_README.pdf' );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});