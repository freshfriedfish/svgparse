import parse from 'parse-svg-path';
import abs from 'abs-svg-path';
import normalize from 'parse-svg-path';

const hi = parse(
    "M 80 160 L 200 20 L 260 0 L 240 60 L 100 180 C 120 200 120 220 140 200 C 140 220 160 240 140 240 A 28.4 28.4 90 0 1 120 260 A 100 100 90 0 0 80 200 Q 70 198 70 210 T 40 236 T 24 220 T 50 190 T 60 180 A 100 100 90 0 0 0 140 A 28.4 28.4 90 0 1 20 120 C 20 100 40 120 60 120 C 40 140 60 140 80 160"
);
// console.log(hi);
// const thing = normalize(abs(parse("M43 110C100 69 167 167 226 116C318 183 372 75 350 43")));
// console.log(thing);
// const normal = normalize(hi);
// console.log(normal);

console.log(normalize([['L', 1, 2]]));
