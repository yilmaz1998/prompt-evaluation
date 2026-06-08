# 📊 Prompt Evaluation: V1 vs V2 Sentiment Benchmark

This project compares how different prompt designs affect LLM performance on the same sentiment classification task.

The goal is to evaluate **prompt engineering impact**, not model differences.

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

Evaluation function:

isCorrect(response, expected)

Matching is based on normalized string comparison.


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
Prompt V1 Accuracy: 100%  
Prompt V2 Accuracy: 100%

---

# 🧠 Analysis

Despite differences in prompt design:

- Both V1 and V2 achieved 100% accuracy

Interpretation:

- The sentiment classification task is too deterministic
- The dataset is within model capability
- Prompt variations alone are not sufficient to affect accuracy
- The model is robust to instruction ambiguity in this setup

---

# 💡 Key Insight

LLM performance on simple classification tasks quickly reaches saturation.

Prompt differences only become meaningful when:

- inputs are ambiguous
- sentiment is mixed or sarcastic
- instructions conflict or are noisy

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
