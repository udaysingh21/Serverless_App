// __tests__/handler.test.js

// Import the testing framework
import { describe, it, expect } from "@jest/globals";

// Import the function you want to test
import { hello } from "../handler";

describe("hello function", () => {
  it('should return a statusCode of 200 and "Hello, DevOps world!" message', async () => {
    const result = await hello();

    expect(result.statusCode).toBe(200);

    const body = JSON.parse(result.body);
    expect(body.message).toBe("Hello, DevOps world!");
  });
});
