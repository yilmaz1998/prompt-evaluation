export function normalize (text: string) {
    return text.trim().toLowerCase();
}

export function isCorrect(response: string, expected: string) {
    const r = normalize(response);
    return r.includes(expected);
}