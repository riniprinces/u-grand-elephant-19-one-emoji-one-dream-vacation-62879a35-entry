// One Emoji, One Dream Vacation — entry program.
// The dream: dawn above the clouds on Mount Fuji. One emoji says it all.
// Gate: /output/entry.txt must hold UTF-8 text of 1-8 characters, not blank.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DREAM_EMOJI = "🗻";
const OUTPUT_PATH = join("/output", "entry.txt");

function checkGate(value: string): { chars: number; bytes: number } {
  const chars = Array.from(value).length;
  const bytes = Buffer.byteLength(value, "utf8");
  if (chars < 1 || chars > 8) {
    throw new Error(`gate: need 1-8 chars, saw ${chars}`);
  }
  if (!/\S/.test(value)) {
    throw new Error("gate: entry must not be blank");
  }
  return { chars, bytes };
}

function writeEntry(): void {
  const info = checkGate(DREAM_EMOJI);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, DREAM_EMOJI, { encoding: "utf8" });
  console.log(
    `entry written to ${OUTPUT_PATH} (${info.chars} char, ${info.bytes} bytes): ${DREAM_EMOJI}`,
  );
}

writeEntry();
