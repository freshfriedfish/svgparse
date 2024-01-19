import {Matrix} from "ml-matrix";
import {Vector2, PathPoint, SliderPath} from "osu-classes";
import {BeatmapDecoder, BeatmapEncoder, SlidableObject} from "osu-parsers";
import textfile from "/a - pupa (Metal Wings) [exports1].txt?raw";

function bruh(data) { //returns array of arrays, where each nested array represents a 2d coordinate. accepts array
    return data.reduce((a, c, i) => {
        return i % 2 === 0 ? a.concat([data.slice(i, i + 2)]) : a;
    }, []);
}

const path = document.getElementById('path2');
const pathdata = path.getPathData({normalize: true});
console.log(pathdata);

const flatarr = pathdata.map((command) => command.values).flat(1);
console.log(flatarr);

//console.log("flattened array", flatarr);
const flatarrcopy = [...flatarr];

//flatarr.splice(0, 2);

const flatarrMat = new Matrix(bruh(flatarr));

const startPosMat = flatarrMat.getRowVector(0);
console.log(startPosMat.toString());
flatarrMat.subRowVector(flatarrMat.getRowVector(0));

/* the following bugs out flatarrmat
.transpose();
flatarrMat.subColumnVector(flatarrMat.getColumnVector(0));
flatarrMat.transpose();
 */

const flatarr2d = flatarrMat.to2DArray()
//console.log("flatarr2d",flatarr2d);

//converting svg types to an array to iterate through

//matrix to obj
const newControlPointsFixed = flatarr2d.map((elem) => {
    return new PathPoint(new Vector2(elem[0], elem[1]), null);
});

const newControlPointsCopy = flatarr2d.map((elem) => {
    return new PathPoint(new Vector2(elem[0], elem[1]), null);
});


const arrlen = pathdata.map(command => command.values.length / 2 - 1);
// arrlen[arrlen.length - 1] = arrlen[arrlen.length - 1] + 1;
console.log("arrlen", arrlen);

// let iteratedval = 0;
// for (let i = 1; i < arrlen.length; i++) {
//     console.log(i)
//     for (let j = 0; j < arrlen[i]; j++) {
//         iteratedval++;
//         console.log("ran");
//     }
//     newControlPointsCopy[iteratedval].type = "B";
// }
console.log("newControlPointsCopy", newControlPointsCopy);

newControlPointsFixed[0].type = "B";
newControlPointsFixed[3].type = "B";

console.log("newControlPointsFixed", newControlPointsFixed);


//UNRELATED: matrix to SVG
const arrlenConvert = arrlen.map(ele => flatarr2d.splice(0, ele).flat(1));
const newPathData = pathdata.map(elem => ({
    type: elem.type, values: elem.values,
})); //END

/*
position:[10,10],
type: "B"
 */

for (let i = 0; i < newPathData.length; i++) {
    newPathData[i].values = arrlenConvert[i];
}
console.log("copy of path", newPathData);

console.log(pathdata);

console.log("final array", arrlenConvert);


//convert [[2],[6]... to [[2],[2];