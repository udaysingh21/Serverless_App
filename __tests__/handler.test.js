// __tests__/handler.test.js

// Import the function you want to test
const { hello } = require('../handler');

describe('hello function', () => {
  it('should return a statusCode of 200 and "Hello,  world!" message', async () => {
    const result = await hello();

    expect(result.statusCode).toBe(200);

    const body = JSON.parse(result.body);
    expect(body.message).toBe('Hello, DevOps world!');
  });
});
