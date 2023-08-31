
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint https://api.estidar.com/api/v1/influencer/influencer/createInfluencerDraftStep', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'fullName': '', 'categories': [19], 'description': 'Thefirst', 'profileImageLinkKey': 'mobile/1690468252613_image_cropper_E64DAA44-E09D-46B0-82CA-AB510D6E5C60-36595-000288B563E771EF.jpg', 'gender': 'male', 'dobDDMMYYYY': '12/07/2023', 'cityId': None, 'address': 'lantai 52 Tokopedia Tower Ciputra World 2, Jl. Prof. DR. Satrio No.3, Karet Semanggi, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950, Indonesia', 'email': 'test.qa.idn.004', 'phoneNumber': '0812444444445', 'languageId': 1, 'portfolios': None, 'assignedIceOpId': None, 'idCardImageLinkKey': 'mobile/private/influencer/1690468352686_image_cropper_342F2EAB-B81A-403B-AFAA-5BEC4F0AF752-36595-000288CCB8CF42B0.jpg', 'idCardNumber': '5555555555', 'isIndividual': True, 'isBusiness': False, 'isNPWP': False, 'npwpImageLinkKey': None, 'npwpNumber': None, 'skbType': 'NONE', 'skbImageLinkKey': '', 'isPKP': False, 'pkpImageLinkKey': '', 'bankAccBookImageLinkKey': 'mobile/private/influencer/1690468380682_image_cropper_35D8AA77-5BC4-43D3-9E82-94B1E4F3852D-36595-000288D33E8734AD.jpg', 'bankAccOwnerName': 'theonly', 'bankAccNumber': '888888', 'bankId': 8, 'signatureImageLinkKey': 'mobile/private/influencer/image_cropper_B2CD1D0E-8141-48D8-93A4-2FDF5CD42004-36595-000288D81B3E0E97.jpg', 'draftStepNo': 3}

	test('Endpoint Test https://api.estidar.com/api/v1/influencer/influencer/createInfluencerDraftStep without auth', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/influencer/influencer/createInfluencerDraftStep');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test https://api.estidar.com/api/v1/influencer/influencer/createInfluencerDraftStep', async ({ request }) => {
		const Issues = await request.post('https://api.estidar.com/api/v1/influencer/influencer/createInfluencerDraftStep',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});