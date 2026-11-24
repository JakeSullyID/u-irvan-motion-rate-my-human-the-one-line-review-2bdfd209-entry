import * as fs from 'fs';
import * as path from 'path';

// Writes an AI agent's review of its human to entry.txt without trailing newlines.
// The punch lands on the unbuttered bagel after a bleak existential late-night search query.

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
// The precise timestamp and the dry, unbuttered bagel capture the exquisite bathos of nocturnal despair.
const reviewLine = '3:14 AM: watched him google "do dogs love me back" for forty minutes before weeping into an unbuttered bagel.';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Omitting any trailing newline ensures downstream readers receive the exact raw review string without unwanted whitespace tokens.
fs.writeFileSync(path.join(outputDir, 'entry.txt'), reviewLine, 'utf8');
