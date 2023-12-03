import * as fs from "fs";

const numbers = {
	nine: "9",
	eight: "8",
	seven: "7",
	six: "6",
	five: "5",
	four: "4",
	three: "3",
	two: "2",
	one: "1",
};

const questionA = fs
	.readFileSync("./input.txt", "utf-8")
	.split("\n")
	.map((line) => {
		return line.replace(/[^0-9]/gi, "");
	})
	.map((line) => parseInt(line.slice(0, 1).concat(line.slice(-1))))
	.reduce((acc, curr) => acc + curr, 0);

const regExp = new RegExp(`(?=(\\d|${Object.keys(numbers).join("|")}))`, "g");

const questionB = fs
	.readFileSync("./input.txt", "utf-8")
	.split("\n")
	.map((line) => {
		const matches = [...line.matchAll(regExp)].map((match) => match[1]);
		const first = numbers[matches[0] as keyof typeof numbers] || matches[0];
		const last =
			numbers[matches[matches.length - 1] as keyof typeof numbers] ||
			matches[matches.length - 1];
		return parseInt(first.concat(last));
	})
	.reduce((acc, curr) => acc + curr, 0);

console.log(questionA);
console.log(questionB);
