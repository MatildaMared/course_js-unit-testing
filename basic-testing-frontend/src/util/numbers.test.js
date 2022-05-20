import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a string number to a number", () => {
	const input = "3";
	const result = transformToNumber(input);

	expect(result).toBe(3);
});

it("returns NaN if the string contains letters", () => {
	const input = "123a";
	const result = transformToNumber(input);

	expect(result).toBeNaN();
});

it("returns NaN if the value is not convertable to a number", () => {
	const input = { a: "b" };

	const result = transformToNumber(input);

	expect(result).toBeNaN();
});

it("returns the same number if the value is already a number", () => {
	const input = 3;

	const result = transformToNumber(input);

	const expectedResult = 3;
	expect(result).toBe(expectedResult);
});
