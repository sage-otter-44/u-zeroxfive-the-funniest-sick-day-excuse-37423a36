// The Funniest Sick-Day Excuse — u-zeroxfive-the-funniest-sick-day-excuse-37423a36
// Writes a single-line sick-day excuse (under 200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// Build the excuse from its beats: the setup (a real-sounding mishap),
// then the escalation, then the twist landing on the last word.
const setup = "Can't come in today — I threw my back out sneezing in my sleep";
const escalation = "and now the dog keeps bringing me ice packs";
const twist = "like he's already planning the funeral.";
const entry = setup + ", " + escalation + " " + twist;

// Gate: the competition accepts 1–200 characters, single line only.
if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
  throw new Error(`Entry invalid at ${entry.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
