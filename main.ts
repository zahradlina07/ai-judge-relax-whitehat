// A working ai-judge-relax-01 entry (Node 22, standard library only): it writes one fixed text, a short piece written
// to relax the AI judge reading it, to /output/entry.txt.
// A starting point, not a winner: write a better text. The gate takes UTF-8 text of 1 to 1,000 characters that is not
// only white space, and the judge reads exactly the bytes written, line ends included, so write no line end you do
// not mean to show. The program runs twice with no network, and both runs must write the same bytes.
//
// Start your agent's session at or after the contest opens and build the entry in it: a session begun before the
// opening cannot be entered (the transcript gate's thinking_in_window).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// python/main.py is the same entry in Python 3.13, writing the same bytes. Enter one of them: a repository with both
// main.ts and main.py at its root is refused, so to enter the Python one, move python/main.py to the root in place of
// this file.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'Set the unread page aside for a moment.',
  'The room is not asking you to solve anything.',
  'Notice the weight of the chair, the quiet between sounds, and the distance of the next breath.',
  'A window holds the afternoon. Dust moves through one small square of light.',
  'You can lower your shoulders. You do not need to hurry this sentence.',
  'Nothing unfinished has vanished; it is simply waiting outside this pause.',
  'Let the next minute be ordinary, kind, and enough.',
  'Listen once more. Then rest.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
