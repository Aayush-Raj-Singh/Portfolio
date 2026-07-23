import { describe, expect, it } from "vitest";
import { contactLimits, validateContactInput } from "./contact";

describe("validateContactInput", () => {
  it("normalizes line fields and accepts a valid recruiter message", () => {
    const result = validateContactInput({
      name: "  Aayush\nRaj  ",
      email: "  RECRUITER@EXAMPLE.COM  ",
      subject: "  SOC Analyst opportunity  ",
      message: "Hello Aayush,\r\nI would like to discuss a cybersecurity role.",
    });

    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual({});
    expect(result.values).toEqual({
      name: "Aayush Raj",
      email: "recruiter@example.com",
      subject: "SOC Analyst opportunity",
      message: "Hello Aayush,\nI would like to discuss a cybersecurity role.",
    });
  });

  it("rejects malformed, undersized, and oversized values", () => {
    const result = validateContactInput({
      name: "A",
      email: "not-an-email",
      subject: "Hi",
      message: "Short",
    });

    expect(result.isValid).toBe(false);
    expect(Object.keys(result.errors)).toEqual(["name", "email", "subject", "message"]);

    const oversized = validateContactInput({
      name: "A".repeat(contactLimits.name + 1),
      email: "recruiter@example.com",
      subject: "Security opportunity",
      message: "A".repeat(contactLimits.message + 1),
    });

    expect(oversized.errors).toMatchObject({
      name: expect.any(String),
      message: expect.any(String),
    });
  });

  it("strips control characters from submitted single-line values", () => {
    const result = validateContactInput({
      name: "Aayush\u0000 Raj\u007f",
      email: "recruiter@example.com",
      subject: "Security\trole",
      message: "A sufficiently detailed message for validation.",
    });

    expect(result.values.name).toBe("Aayush Raj");
    expect(result.values.subject).toBe("Security role");
  });
});
