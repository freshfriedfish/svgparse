import {BeatmapDecoder, BeatmapEncoder, SlidableObject} from "osu-parsers";
import textfile from "/a - pupa (Metal Wings) [exports1].txt?raw";
import {Matrix} from "ml-matrix";

const path = document.getElementById('path2');
const pathdata = path.getPathData({normalize:true});
console.log(pathdata);
//test pathdata 1darr
const flatarr = pathdata.map((command) => {
    return command.values;
}).flat(1);
console.log(flatarr);

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
console.log(aMatrix.transpose().to2DArray());
//maparr length for loop

//test map arr arr
const arrarr = pathdata.map((command) => {
    return command.values;
});
console.log(arrarr);

//test map arr arr to arr mat

const arrmat = arrarr.map((element) => {
    return arr2mat(element);
});
arrmat.forEach((mat) => console.log(mat.to2DArray()));

//test map mat arr
const matarr = pathdata.map((command) => {
    return new Matrix([command.values]);
});
matarr.forEach((mat) => console.log(mat.to2DArray()));

//matrix remove test


//matrix to pathdata
const arr = [];
let count = 0;
pathdata.forEach((command) => {
    const thearr = [];

    switch (command) {
        case "M":


    }

    arr.push(thearr);
});

// console.log(arr);

/**
 *
 * @param arr
 * @returns {Matrix}
 */
function arr2mat(arr) {
    const mat = new Matrix([
        [],
        [],
    ]);
    for (let i = 0; i < arr.length; i+=2) {
        mat.addColumn([arr[i], arr[i + 1]]);
    }
    return mat;
}