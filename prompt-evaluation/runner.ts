import { dataset } from "./dataset.js";
import { prompts } from "./prompts.js";
import { runGPT } from "./gpt.js";
import { isCorrect } from "./evaluator.js";

async function runEvaluation(version: "v1" | "v2") {
    let correct = 0;
    let totalLatency = 0;
    let totalTokens = 0;

    console.log(`\n🚀 Running: ${version}`);

    for (const item of dataset) {
        console.log(`➡️ input: ${item.input}`);

        const prompt = prompts[version](item.input);
        console.log(`📝 prompt created`);

        const startTime = Date.now();

        const response = await runGPT(prompt);
        
        const latency = Date.now() - startTime;
        totalLatency += latency;

        console.log(`🧠 response received, response: ${response.text}`);

        totalTokens += response.usage?.total_tokens || 0;

        const result = isCorrect(response.text, item.expected);
        console.log(`🎯 expected: ${item.expected} | result: ${result}\n`);

        if (result) correct++;
    }

    const accuracy = (correct / dataset.length) * 100;
    const avgLatency = totalLatency / dataset.length;

    console.log(`✅ ${version} accuracy: ${accuracy.toFixed(2)}%`);
    console.log(`⏱️ ${version} average latency: ${avgLatency.toFixed(2)} ms`);
    console.log(`🔢 ${version} average tokens: ${(totalTokens / dataset.length).toFixed(2)}`);

    return {
        accuracy: `${accuracy.toFixed(2)}%`,
        avgLatency: `${avgLatency.toFixed(0)} ms`,
        totalTokens: `${totalTokens} tokens`,
      };
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