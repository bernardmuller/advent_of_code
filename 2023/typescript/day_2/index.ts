import * as fs from "fs";

const MAX_RED = 12;
const MAX_BLUE = 14;
const MAX_GREEN = 13;

const QuestionA = fs
	.readFileSync("./input.txt", "utf-8")
	.split("\n")
	.map((line) => {
		return line
			.split(":")[1]
			.split(";")
			.map((item) => {
				return item.split(",").map((cube) => {
					if (cube.includes("red")) {
						if (parseInt(cube.split(" ")[1]) > MAX_RED) {
							return false;
						}
					}
					if (cube.includes("blue")) {
						if (parseInt(cube.split(" ")[1]) > MAX_BLUE) {
							return false;
						}
					}
					if (cube.includes("green")) {
						if (parseInt(cube.split(" ")[1]) > MAX_GREEN) {
							return false;
						}
					}
					return true;
				});
			})
			.some((item) => item.includes(false));
	})
	.map((line, index) => {
		return line ? 0 : index + 1;
	})
	.reduce((acc, curr) => acc + curr, 0);

const QuestionB = fs
	.readFileSync("./input.txt", "utf-8")
	.split("\n")
	.map((line) => {
		let red: number[] = [];
		let blue: number[] = [];
		let green: number[] = [];
		line.split(":")[1]
			.split(";")
			.map((game) => {
				game.split(",").map((cube) => {
					if (cube.includes("red")) {
						red.push(parseInt(cube.split(" ")[1]));
					}
					if (cube.includes("blue")) {
						blue.push(parseInt(cube.split(" ")[1]));
					}
					if (cube.includes("green")) {
						green.push(parseInt(cube.split(" ")[1]));
					}
				});
			});
		return {
			red: red.sort((a, b) => a - b).pop(),
			blue: blue.sort((a, b) => a - b).pop(),
			green: green.sort((a, b) => a - b).pop(),
		};
	})
	.map((line) => line?.red! * line?.blue! * line.green!)
	.reduce((acc, curr) => acc + curr, 0);

console.log(QuestionA);
console.log(QuestionB);
