
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /influencer/influencer/createInfluencerDraft', () => {
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'fullName': 'key check ', 'categories': [1, 2], 'description': 'This is the description of this influencer.', 'profileImageLinkKey': 'https://s3.aws.com/example/link/image1.jpg', 'gender': 'M', 'dobDDMMYYYY': '31/01/2022', 'cityId': 1, 'address': 'lantai 52 Tokopedia Tower Ciputra World 2, Jl. Prof. DR. Satrio No.3, Karet Semanggi, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950, Indonesia', 'email': 'ahmed.ali@gmail.com', 'phoneNumber': '0844543234554', 'languageId': 1, 'portfolios': [{'portfolioLink': '', 'portfolioLinkKey': 'https://s3.aws.com/file3.pdf'}, {'portfolioLink': '', 'portfolioLinkKey': 'https://s3.aws.com/file2.pdf'}], 'termsAndConditions': '1) Only halal products. 2) Payment in advance.', 'contactPerson': {'name': 'Jehian', 'phoneNumber': '084432344565454'}, 'assignedIceOpId': 1, 'idCardImageLinkKey': 'https://s3.aws.com/image1.jpg', 'idCardNumber': '0090013435', 'isIndividual': False, 'isBusiness': True, 'isNPWP': False, 'npwpImageLinkKey': 'https://s3.aws.com/image1.jpg', 'npwpNumber': '0090013435', 'skbType': 'SKB_0', 'skbImageLinkKey': 'https://s3.aws.com/image1.jpg', 'isPKP': False, 'pkpImageLinkKey': 'https://s3.aws.com/image1.jpg', 'bankAccBookImageLinkKey': 'https://s3.aws.com/image1.jpg', 'bankAccOwnerName': 'Gendhis Arimbi', 'bankAccNumber': '000012349999', 'bankId': 1, 'signatureImageLinkKey': 'https://s3.aws.com/image1.jpg', 'draftStepNo': 1}

	test('Endpoint Test /influencer/influencer/createInfluencerDraft', async ({ request }) => {
		const Issues = await request.post('/influencer/influencer/createInfluencerDraft',{data: requestBody} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});