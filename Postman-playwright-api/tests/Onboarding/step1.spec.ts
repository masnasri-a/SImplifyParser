
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /influencer/influencer/onboardStep1', () => {
	const expectResult = {};
    let AccessToken = ""
    test('get_access_token', async({request})=>{
        const Issues = await request.post('https://cognito-idp.ap-southeast-1.amazonaws.com/',{headers:{
            "Content-Type":"application/x-amz-json-1.1",
            "X-Amz-Target":"AWSCognitoIdentityProviderService.InitiateAuth"
        },data:{
            "AuthParameters" : {
              "USERNAME" : "nasriadzlani@Live.com",
              "PASSWORD" : "UtyCantik12!"
           },
           "AuthFlow" : "USER_PASSWORD_AUTH",
           "ClientId" : "7437gs77bku7vtnug8l30pfueg"
        }});
        const response = await Issues.json()
        AccessToken = response['AuthenticationResult']['AccessToken']
    })

	test('Endpoint Test v1/influencer/influencer/onboardStep1 Response - 200 OK', async ({ request }) => {
        const now = new Date();

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0, sehingga harus ditambah 1.
        const day = String(now.getDate()).padStart(2, '0');

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

        const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}-${milliseconds}`;
        
        const data = {
            "fullName": `Automation Test ${formattedDateTime}`,
            "categories": [ 19
            ],
            "description": "Thefirst",
            "profileImageLinkKey": "mobile/1690468252613_image_cropper_E64DAA44-E09D-46B0-82CA-AB510D6E5C60-36595-000288B563E771EF.jpg",
            "gender": "male",
            "dobDDMMYYYY": "12/07/2023",
            "cityId": 1,
            "address": "lantai 52 Tokopedia Tower Ciputra World 2, Jl. Prof. DR. Satrio No.3, Karet Semanggi, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950, Indonesia",
            "email": "test.beta1@gmail.com",
            "phoneNumber": "0812444440001",
            "languageId": 1,
            "draftStepNo": 1
          }
          
		const Issues = await request.post('https://api.estidar.com/api/v1/influencer/influencer/onboardStep1', {
            data:data,headers:{
                'Authorization':`Bearer ${AccessToken}`
            }
        });
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> = {"influencerId":"number","fullName":"string","categories":"object","description":"string","profileImageLink":"string","profileImageLinkKey":"string","gender":"string","dobDDMMYYYY":"string","cityId":"number","city":"string","address":"string","email":"string","phoneNumber":"string","languageId":"number","language":"string","createdAt":"string","createdByUserid":"number","createdByUserType":"string","updatedByUserId":"number","updatedByUserType":"string","updatedAt":"string","profileStatus":"string"}
		const jsonResult = await Issues.json()
		for (const key in jsonResult) {
            expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key])
		}
        
	});
});