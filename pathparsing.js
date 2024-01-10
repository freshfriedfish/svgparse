import parse from 'parse-svg-path';

function bruh(data) { //returns array of arrays, where each nested array represents a 2d coordinate. accepts array
    return data.reduce((a, c, i) => {
        return i % 2 === 0 ? a.concat([data.slice(i, i + 2)]) : a;
    }, []);
}

const parsedPath = parse("M43 110C100 69 167 167 226 116C318 183 372 75 350 43");
console.log(parsedPath);

const commands = parsedPath.map((elem) => elem.shift());

console.log(commands);
console.log(parsedPath);