// @ts-ignore
import Piscina from "piscina";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const calculation = new Piscina({
	filename: resolve(`${dirname(__filename)}/../../dist/test/calculation.js`),
});

const functionCall = new Piscina({
	filename: resolve(
		`${dirname(__filename)}/../../dist/test/function-call.js`
	),
});

await Promise.all([
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
]);
