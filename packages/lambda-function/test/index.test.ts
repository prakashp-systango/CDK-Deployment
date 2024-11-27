import { handler } from '../src/index'; // Adjust the path to your handler file
import { APIGatewayProxyEvent } from 'aws-lambda';

describe('Lambda Function Tests', () => {
    it('should return "Hello, John" when name is provided', async () => {
        // Mocking the APIGatewayProxyEvent with queryStringParameters containing name
        const event: APIGatewayProxyEvent = {
            body: null,
            headers: {},
            httpMethod: 'GET',
            isBase64Encoded: false,
            path: '/hello',
            pathParameters: null,
            queryStringParameters: { name: 'John' }, // name is provided
            multiValueHeaders: {}, // Mocking multiValueHeaders
            multiValueQueryStringParameters: {}, // Mocking multiValueQueryStringParameters
            stageVariables: null,
            requestContext: {} as any, // Simplified for testing
            resource: '',
        };

        const result = await handler(event);
        expect(result.statusCode).toBe(200);
        expect(result.body).toBe(JSON.stringify({ message: 'Hello, John' }));
    });

    it('should return "Hello, World" when no name is provided', async () => {
        // Mocking the APIGatewayProxyEvent with queryStringParameters being empty
        const event: APIGatewayProxyEvent = {
            body: null,
            headers: {},
            httpMethod: 'GET',
            isBase64Encoded: false,
            path: '/hello',
            pathParameters: null,
            queryStringParameters: {}, // no name provided
            multiValueHeaders: {}, // Mocking multiValueHeaders
            multiValueQueryStringParameters: {}, // Mocking multiValueQueryStringParameters
            stageVariables: null,
            requestContext: {} as any, // Simplified for testing
            resource: '',
        };

        const result = await handler(event);
        expect(result.statusCode).toBe(200);
        expect(result.body).toBe(JSON.stringify({ message: 'Hello, World' }));
    });

    it('should return "Hello, World" when name is undefined', async () => {
        // Mocking the APIGatewayProxyEvent with no queryStringParameters at all
        const event: APIGatewayProxyEvent = {
            body: null,
            headers: {},
            httpMethod: 'GET',
            isBase64Encoded: false,
            path: '/hello',
            pathParameters: null,
            queryStringParameters: null, // no name,
            multiValueHeaders: {}, // Mocking multiValueHeaders
            multiValueQueryStringParameters: {}, // Mocking multiValueQueryStringParameters
            stageVariables: null,
            requestContext: {} as any, // Simplified for testing
            resource: '',
        };

        const result = await handler(event);
        expect(result.statusCode).toBe(200);
        expect(result.body).toBe(JSON.stringify({ message: 'Hello, World' }));
    });
});
