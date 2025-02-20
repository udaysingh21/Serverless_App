// __tests__/handler.test.js
const { hello } = require("../handler"); // CommonJS require

describe("hello function", () => {
  it('should return a statusCode of 200 and "Hello, DevOps world!" message', async () => {
    const result = await hello();
    expect(result.statusCode).toBe(200);
    const body = JSON.parse(result.body);
    expect(body.message).toBe("Hello, DevOps world!");
  });
});
