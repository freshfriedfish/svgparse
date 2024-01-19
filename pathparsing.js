import parse from 'parse-svg-path';

function bruh(data) { //returns array of arrays, where each nested array represents a 2d coordinate. accepts array
    return data.reduce((a, c, i) => {
        return i % 2 === 0 ? a.concat([data.slice(i, i + 2)]) : a;
    }, []);
}
const path = document.getElementById('path2');
const pathdata = path.getPathData({normalize: true});
console.log(pathdata);

const pathSword = document.getElementById('path1');
const pathSwordData = pathSword.getPathData({normalize: true});
console.log(pathSwordData);

const path3 = document.getElementById('path3');
const path3data = path3.getPathData({normalize: true});
console.log(path3data);

const path4 = document.getElementById('path4');
const path4data = path4.getPathData({normalize: true});
console.log(path4data);

// const parsedPath = parse("M 80 160 L 200 20 L 260 0 L 240 60 L 100 180 C 120 200 120 220 140 200 C 140 220 160 240 140 240 A 28.4 28.4 90 0 1 120 260 A 100 100 90 0 0 80 200 Q 70 198 70 210 T 40 236 T 24 220 T 50 190 T 60 180 A 100 100 90 0 0 0 140 A 28.4 28.4 90 0 1 20 120 C 20 100 40 120 60 120 C 40 140 60 140 80 160");
// console.log(parsedPath);
// const commands = parsedPath.map((elem) => elem.shift());
// console.log(commands);
// const arrlen = parsedPath.map((elem) => elem.length / 2 -1);
// console.log(arrlen);
// const flatArr = parsedPath.map((elem) => elem).flat(1);
// console.log(flatArr)
// console.log(bruh(flatArr));

