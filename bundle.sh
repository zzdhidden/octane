#!/bin/sh
cat base.js richards.js deltablue.js crypto.js raytrace.js earley-boyer.js regexp.js splay.js navier-stokes.js mandreel.js gbemu-part1.js gbemu-part2.js box2d.js typescript.js typescript-input.js typescript-compiler.js bundle-run.js > all.js
cat base.js richards.js deltablue.js crypto.js raytrace.js bundle-run.js > all-part.js
cat base.js earley-boyer.js regexp.js splay.js navier-stokes.js mandreel.js bundle-run.js > all-part2.js
