
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /influencer/influencer/updateInfluencer?isActionSubmit=false', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'influencerId': 108, 'fullName': 'Andar ', 'categoryIds': [1, 2], 'description': 'This is the description of this andar.', 'profileImageLinkKey': 'https://s3.aws.com/example/link/image1.jpg', 'gender': 'male', 'dobDDMMYYYY': '31/01/2022', 'cityId': 1, 'address': 'lantai 52 Tokopedia Tower Ciputra World 2, Jl. Prof. DR. Satrio No.3, Karet Semanggi, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950, Indonesia', 'email': 'ahmed.ali@gmail.com', 'phoneNumber': '0844543234554', 'languageId': 1, 'portfolios': [{'portfolioLink': '', 'portfolioLinkKey': 'https://s3.aws.com/file3.pdf'}, {'portfolioLink': '', 'portfolioLinkKey': 'https://s3.aws.com/file2.pdf'}], 'termsAndConditions': '1) Only halal products. 2) Payment in advance.', 'contactPerson': {'name': 'Jehian', 'phoneNumber': '084432344554'}, 'assignedIceOpId': 1, 'idCardImageLinkKey': 'https://s3.aws.com/image1.jpg', 'idCardNumber': '0090013435', 'isIndividual': False, 'isBusiness': True, 'isNPWP': False, 'npwpImageLinkKey': 'https://s3.aws.com/image1.jpg', 'npwpNumber': '0090013435', 'skbType': 'SKB_0', 'skbImageLinkKey': 'https://s3.aws.com/image1.jpg', 'isPKP': False, 'pkpImageLinkKey': 'https://s3.aws.com/image1.jpg', 'bankAccBookImageLinkKey': 'https://s3.aws.com/image1.jpg', 'bankAccOwnerName': 'Gendhis Arimbi', 'bankAccNumber': '000012349999', 'bankId': 1, 'signatureImageLinkKey': 'https://s3.aws.com/image1.jpg', 'draftStepNo': 1}

	test('Endpoint Test /influencer/influencer/updateInfluencer?isActionSubmit=false without auth', async ({ request }) => {
		const Issues = await request.get('/influencer/influencer/updateInfluencer?isActionSubmit=false');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /influencer/influencer/updateInfluencer?isActionSubmit=false', async ({ request }) => {
		const Issues = await request.put('/influencer/influencer/updateInfluencer?isActionSubmit=false',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});