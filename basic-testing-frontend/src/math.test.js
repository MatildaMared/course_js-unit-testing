import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
	// Arrange
	const numbers = [3, 4, 8];

	// Act
	const result = add(numbers);

	// Assert
	const expectedResult = numbers.reduce((acc, curr) => acc + curr);
	expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one invalid number is provided", () => {
	const inputs = ["invalid", 7];

	const result = add(inputs);

	expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numerical strings is provided", () => {
	const inputs = ["9", "2", "5", "3"];

	const result = add(inputs);

	const expectedResult = inputs.reduce(
		(acc, curr) => Number(acc) + Number(curr),
		0
	);

	expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
	const inputs = [];

	const result = add(inputs);

	expect(result).toBe(0);
});

it("should throw an error if no argument is passed to the function", () => {
	const resultFn = () => add();

	expect(resultFn).toThrow(/is not iterable/);
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
	const resultFn = () => add(1, 2, 3);

	expect(resultFn).toThrow(/is not iterable/);
});
