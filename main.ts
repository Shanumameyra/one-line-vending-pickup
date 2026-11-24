import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "One Line, One Minute: The Vending Machine Pickup Line Contest".
// The vending machine itself speaks: Beep, coils, slot B4, exact change —
// and the punch lands on the last few words. The line is 108 characters,
// inside the 200-character gate, and is written to /output/entry.txt verbatim
// with no trailing newline, so the file holds exactly the line.
const line =
  "Beep! My coils saved the last chocolate bar for you — press B4, insert exact change, and let's call it fate.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
console.log(`characters: ${line.length}`);
