# 📊 Prompt Evaluation: V1 vs V2 Sentiment Benchmark

This project compares how different prompt designs affect LLM performance on the same sentiment classification task, measuring accuracy, latency, and token usage.

The goal is to isolate the effect of **prompt engineering**, not model or dataset changes.

---

# 🎯 Objective

We test how prompt wording affects output quality on the same dataset.

Two prompt versions are compared:

- V1 → weak / open-ended instruction  
- V2 → strict classification instruction  

Both are evaluated on the same sentiment dataset:

- positive
- negative
- neutral

---

# 🧠 Prompts

## V1 (Weak Prompt)

What do you think about this text?

Text:
${text}

Answer with one word.

Behavior:
- Open-ended instruction
- No strict label constraints
- Allows free-form responses
- Higher ambiguity in output

---

## V2 (Strict Prompt)

You are a sentiment classifier.

Return ONLY one of:
positive, negative, neutral

No explanation.

Text:
${text}

Behavior:
- Clearly defined classification task
- Strict label constraints
- Deterministic output format
- Low ambiguity

---

# 📦 Dataset

The dataset contains 30 sentiment-labeled samples:

- 10 positive (including mixed/realistic sentences)
- 10 negative (contrast + failure cases)
- 10 neutral (ambiguous + factual statements)

Dataset is intentionally designed with:
- mixed sentiment sentences
- contrast clauses
- subtle emotional cues
- real-world language patterns

---

# ⚙️ Evaluation Process

For each input:

1. Prompt is generated (V1 or V2)
2. Sent to GPT model
3. Response is normalized
4. Compared with expected label


---

# 📊 Example Runs

## Example 1

➡️ input: I had doubts, but this ended up being a great experience.  
🧠 response: positive  
🎯 expected: positive  
✔ result: true  

---

## Example 2

➡️ input: It’s acceptable for basic use cases.  
🧠 response: positive  
🎯 expected: neutral  
❌ result: false

---

# 📊 Results

### 📊 Final Results
Prompt V1 Accuracy: 30%  
Prompt V2 Accuracy: 96.67%

### ⚡ Performance Metrics

| Metrics | V1 | V2 |
|----------|----------|----------|
| Average Latency | 1296 ms | 853 ms |
| Total Tokens | 1376 | 1623 |

---

# 🧠 Analysis

- V2 is significantly faster (~34% lower latency)
- V2 uses slightly more tokens (+247 total)
- V2 achieves much higher accuracy (96.67% vs 30%)


Interpretation:

- The sentiment classification task is too deterministic
- The dataset is within model capability
- Prompt variations alone are not sufficient to affect accuracy
- The model is robust to instruction ambiguity in this setup

---

# 💡 Key Insight

Prompt structure strongly affects both:
- performance consistency
- response speed
- token usage efficiency

Better-structured prompts reduce ambiguity and improve overall system efficiency.

---

# 🚀 What This Project Shows

- Impact of prompt engineering on LLM behavior
- Difference between weak vs strict instructions
- Importance of dataset difficulty in evaluation
- Why prompt comparison requires non-trivial test cases

---

# 🛠 Tech Stack

- TypeScript
- OpenAI API
- Custom evaluation pipeline

---


# 🧠 Conclusion

Prompt evaluation is only meaningful when the dataset is challenging enough to expose differences in instruction sensitivity.

Otherwise, models collapse to the same performance ceiling.
