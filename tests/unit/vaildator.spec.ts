import { describe, it, expect } from "vitest";
import { isEmail } from "../../utils/validators";

describe("util_validator", () => {
  it("validate is email", async () => {
    expect(isEmail("not email.com")).toEqual(false);
    expect(isEmail("spchoi@gmail.com")).toEqual(true);
  });
});
