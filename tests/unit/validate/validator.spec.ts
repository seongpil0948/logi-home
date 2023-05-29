import { describe, it, expect } from "vitest";
import { checkLength } from "../../../utils/validators";

describe("util_validator", () => {
  it("validate is length", async () => {
    expect(checkLength("abc", 4)).toEqual(false);
    expect(checkLength("abc", 3)).toEqual(true);
  });
});
