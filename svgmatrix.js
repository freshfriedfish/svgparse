import {BeatmapDecoder, BeatmapEncoder, SlidableObject} from "osu-parsers";
import textfile from "/a - pupa (Metal Wings) [exports1].txt?raw";
import {Matrix} from "ml-matrix";

const path = document.getElementById('path2');
const pathdata = path.getPathData({normalize:true});
console.log(pathdata);

const aMatrix = new Matrix([
    [],
    [],
]);

//pathdata to matrix
pathdata.forEach((command) => {
    for (let i = 0; i < command.values.length; i += 2) {
        aMatrix.addColumn([command.values[i], command.values[i + 1]]);
    }
});
console.log(aMatrix.to2DArray());
const startPos = aMatrix.getColumnVector(0);
// aMatrix.subColumnVector(startPos);
console.log(aMatrix.to2DArray());

//matrix to pathdata
const arr = [];
pathdata.forEach((command, index) => {
    const thearr = [];
    for (let i = 0; i < command.values.length-1; i++) {
        thearr.push(aMatrix.getColumn(i));
    }
    arr.push(thearr);
});

console.log(arr);
console.log(aMatrix.to2DArray());