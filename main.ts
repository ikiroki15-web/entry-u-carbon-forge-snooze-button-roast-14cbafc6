// Snooze Button Roast — entry for u-carbon-forge-snooze-button-roast-14cbafc6
//
// Writes one line (at most 200 characters) roasting an alarm clock that
// rings at 6 AM on a Saturday morning, to /output/entry.txt.
//
// The line is fixed and deterministic: the same roast on every run, so the
// two grading runs agree byte for byte.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast. Fresh angle: the alarm is not an enemy to hate, it is an
// over-eager unpaid intern — clocking in on a Saturday, mistaking
// enthusiasm for a personality. Punchline lands in the last few words.
const ROAST =
  "At 6 AM on a Saturday, my alarm clock rang like an unpaid intern who mistakes enthusiasm for a personality.";

const MAX_CHARS = 200;
const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

// The gate only accepts UTF-8 text of 1 to 200 characters, not only
// whitespace, in a single line. Check that here so a bad line fails
// loudly instead of being judged.
function validate(line: string): void {
  if (line.length === 0) {
    throw new Error("roast must not be empty");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `roast is ${line.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("roast must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("roast must not be only whitespace");
  }
  // The gate reads the file back as UTF-8; make sure the line survives a
  // UTF-8 round trip unchanged, so no stray byte can slip in.
  if (Buffer.from(line, "utf8").toString("utf8") !== line) {
    throw new Error("roast is not clean UTF-8 text");
  }
}

validate(ROAST);
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ROAST, "utf8");
console.log(`wrote ${ROAST.length} characters to ${OUT_FILE}`);
