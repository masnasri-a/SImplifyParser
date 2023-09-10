
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /influencer/influencer/onboardStep2', () => {
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

	test('Endpoint Test v1/influencer/influencer/onboardStep2 Response - 200 OK', async ({ request }) => {
      
        
        const data = {
            "influencerId":278,
            "idCardImageLinkKey": "mobile/private/influencer/1690468352686_image_cropper_342F2EAB-B81A-403B-AFAA-5BEC4F0AF752-36595-000288CCB8CF42B0.jpg",
            "idCardNumber": "5555555555",
            "isIndividual": true,
            "isBusiness": false,
            "isNpwp": true,
            "npwpImageLinkKey": "mobile/private/influencer/1690468352686_image_cropper_342F2EAB-B81A-403B-AFAA-5BEC4F0AF752-36595-000288CCB8CF42B0.jpg",
            "npwpNumber": "213123232323",
            "skbType": "NONE",
            "skbImageLinkKey": "",
            "isPkp": false,
            "pkpImageLinkKey": ""
          }
          
          
		const Issues = await request.post('https://api.estidar.com/api/v1/influencer/influencer/onboardStep2', {
            data:data,headers:{
                'Authorization':`Bearer ${AccessToken}`
            }
        });
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> ={"influencerId":"number","idCardImageLink":"string","idCardImageLinkKey":"string","idCardNumber":"string","isIndividual":"boolean","isBusiness":"boolean","isNpwp":"boolean","npwpImageLink":"string","npwpImageLinkKey":"string","npwpNumber":"string","skbType":"string","skbImageLink":"string","skbImageLinkKey":"string","isPkp":"boolean","pkpImageLink":"string","pkpImageLinkKey":"string","createdAt":"string","createdByUserid":"number","createdByUserType":"string","updatedByUserId":"number","updatedByUserType":"string","updatedAt":"string","profileStatus":"string"}
		const jsonResult = await Issues.json()
		for (const key in jsonResult) {
            expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key])
		}
        
	});
});