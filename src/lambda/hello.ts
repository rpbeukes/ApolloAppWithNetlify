// show object spread works, i.e. babel works
const obj = {
  foo: 'bar'
};
export function handler(event: any, context: any, callback: any) {
  console.log('queryStringParameters', event.queryStringParameters);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, World!', ...obj })
  });
}
