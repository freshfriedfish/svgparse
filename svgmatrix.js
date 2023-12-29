import {BeatmapDecoder, BeatmapEncoder, SlidableObject} from "osu-parsers";
import textfile from "/a - pupa (Metal Wings) [exports1].txt?raw";
import {Matrix} from "ml-matrix";

const path = document.getElementById('path2');
const pathdata = path.getPathData({normalize:true});
console.log("pathdata", pathdata);
//test pathdata 1darr
const flatarr = pathdata.map((command) => {
    return command.values;
}).flat(1);
console.log("flatarr", flatarr);

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
console.log("amatrix", aMatrix.to2DArray());
const startPos = aMatrix.getColumnVector(0);
aMatrix.subColumnVector(startPos);
const transMatrix = new Matrix(aMatrix.transpose());
console.log("transMatrix", transMatrix.to2DArray());
console.log("end");
//pathdata.forEach()