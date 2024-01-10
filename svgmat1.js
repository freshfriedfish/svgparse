import {Matrix} from "ml-matrix";
import {Vector2} from "osu-classes";

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
const arrlen = pathdata.map((command) => command.values.length / 2);
console.log(arrlen);
const arrlenClone = arrlen.map(ele => ele - 1);
//console.log(arrlenClone)


//console.log("flattened array", flatarr);
const flatarrcopy = [...flatarr];

//flatarr.splice(0, 2);

const flatarrMat = new Matrix(bruh(flatarr));

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
const newControlPoints = flatarr2d.map(elem => ({
    position: new Vector2(elem), type: null,
}));

newControlPoints[0].type = "B";
newControlPoints[3].type = "B";


console.log(newControlPoints)

//matrix to SVG
const arrlenConvert = arrlen.map(ele => flatarr2d.splice(0, ele).flat(1));
const newPathData = pathdata.map(elem => ({
    type: elem.type, values: elem.values,
}));

/*
position:[10,10],
type: "B"
 */

/*
some progress on converting SVGs to sliders. demo tomorrow prolly 🥂

(top is svg path data, bottom is slider controlpoint data)
 */
for (let i = 0; i < newPathData.length; i++) {
    newPathData[i].values = arrlenConvert[i];
}

console.log("copy of path", newPathData);

console.log(pathdata);


console.log("final array", arrlenConvert);


//convert [[2],[6]... to [[2],[2];