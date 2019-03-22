import { Context, Callback, APIGatewayProxyEvent } from "aws-lambda";

// show object spread works, i.e. babel works
const obj = {
  foo: 'bar'
};
export function handler(event: APIGatewayProxyEvent, context: Context, callback: Callback) {
  console.log('queryStringParameters', event.queryStringParameters);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, World!', ...obj })
  });
}
