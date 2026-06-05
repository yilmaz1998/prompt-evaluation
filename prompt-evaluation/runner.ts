import { dataset } from "./dataset.js";
import { prompts } from "./prompts.js";
import { runGPT } from "./gpt.js";
import { isCorrect } from "./evaluator.js";

async function runEvaluation(version: "v1" | "v2") {
    let correct = 0;

    console.log(`\n🚀 Running: ${version}`);

    for (const item of dataset) {
        console.log(`➡️ input: ${item.input}`);

        const prompt = prompts[version](item.input);
        console.log(`📝 prompt created`);

        const response = await runGPT(prompt);
        console.log(`🧠 response received, response: ${response}`);

        const result = isCorrect(response, item.expected);
        console.log(`🎯 expected: ${item.expected} | result: ${result}\n`);

        if (result) correct++;
    }

    const accuracy = (correct / dataset.length) * 100;
    console.log(`✅ ${version} accuracy: ${accuracy.toFixed(2)}%`);

    return accuracy;
}

async function compare() {
    console.log("\n====================");
    console.log("📊 COMPARING");
    console.log("====================\n");

    const v1 = await runEvaluation("v1");
    const v2 = await runEvaluation("v2");

    console.log("\n--- FINAL ---");
    console.log("V1:", v1);
    console.log("V2:", v2);
}

compare();