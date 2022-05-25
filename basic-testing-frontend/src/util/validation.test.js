import { validateStringNotEmpty, validateNumber } from "./validation";
import { describe, it, expect } from "vitest";

describe("validateNumber function", () => {
	it("should not throw an error if the input is of type number", () => {
		const input = 3;

		expect(() => validateNumber(input)).not.toThrow();
	});

	it("should throw an error if the input is not a number", () => {
		const input = "1";
		const input2 = {};
		const input3 = false;
		const input4 = null;

		expect(() => validateNumber(input)).toThrow();
		expect(() => validateNumber(input2)).toThrow();
		expect(() => validateNumber(input3)).toThrow();
		expect(() => validateNumber(input3)).toThrow();
	});

	it("throws an error with the given message if the input is not a number", () => {
		const input = ["a", "b"];

		expect(() => validateNumber(input)).toThrow("Invalid number input.");
	});
});

describe("validateStringNotEmpty function", () => {
	it("should not throw an error if the input is not empty", () => {
		const input = "summer";

		expect(() => {
			validateStringNotEmpty(input).not.toThrowError();
		});
	});

	it("should throw an error if the input is empty", () => {
		const input = "";

		expect(() => {
			validateStringNotEmpty(input);
		}).toThrowError();
	});

	it("throws an error with the given message if the input is empty", () => {
		const input = "";

		expect(() => {
			validateStringNotEmpty(input).toThrowError(
				"Invalid input - must not be empty."
			);
		});
	});

	it("should throw an error if the input contains whitespace but no letters", () => {
		const input = "  ";

		expect(() => {
			validateStringNotEmpty(input).toThrowError();
		});
	});
});
