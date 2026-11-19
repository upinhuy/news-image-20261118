// News image entry (Node 22, standard library only): the image is entry.png
// beside this file, and the program copies it to the output directory
// the grader gives it. Outside the grader, MAKEFUN_OUTPUT_DIR stands
// in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) throw new Error('entry.png is missing beside main.ts');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
// Copying one fixed file makes the run deterministic: same bytes every time.
// The output name stays entry.png, as the competition requires.
copyFileSync(source, join(outDir, 'entry.png'));
