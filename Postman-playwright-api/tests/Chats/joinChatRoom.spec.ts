
import { test, expect } from "@playwright/test";
import { AUTH } from "../config/auth";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /chats/joinChatRoom?roomName=I_259_C_1009&userName=Nasri Adzlani', () => {
	const auth = AUTH
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test v1/chats/joinChatRoom Response - 200 OK', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/chats/joinChatRoom?roomName=I_259_C_1009&userName=Nasri Adzlani',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(200);

        		const jsonText = await Issues.text();
        		expect.soft(typeof jsonText).toBe("string")
    	});

	test('Endpoint Test v1/chats/joinChatRoom Response - 400 Bad Request', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/chats/joinChatRoom',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(400);
		const DataTypeParser: Record<string, any> = {'error': 'string'}
            		const jsonResult = await Issues.json()
					console.log(jsonResult);
					
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});

	test('Endpoint Test v1/chats/joinChatRoom Response - 401 Unauthorize', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/chats/joinChatRoom?roomName=I_259_C_1009&userName=Nasri Adzlani' );
		expect.soft(Issues.status()).toBe(401);
		const DataTypeParser: Record<string, any> = {'message': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});
});