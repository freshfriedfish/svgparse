import {Matrix} from "ml-matrix";

function bruh(data) {
    return data.reduce((a, c, i) => {
        return i % 2 === 0 ? a.concat([data.slice(i, i + 2)]) : a;
    }, []);
}

const path = document.getElementById('path2');
const pathdata = path.getPathData({normalize: true});
console.log("path data", pathdata);
console.log(pathdata[0]);

const flatarr = pathdata.map((command) => command.values).flat(1);
const arrlen = pathdata.map((command) => command.values.length / 2);

console.log("flattened array", flatarr);
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

console.log("hi", flatarr2d.toString());

const arrlenConvert = arrlen.map(ele => flatarr2d.splice(0, ele).flat(1));

const newPathData = pathdata.map(elem => ({
    type: elem.type,
    values: elem.values,
}));
for (let i = 0; i < newPathData.length; i++) {
    newPathData[i].values = arrlenConvert[i];
}

console.log("copy of path",newPathData);

console.log(pathdata);


console.log("final array", arrlenConvert);


//convert [[2],[6]... to [[2],[2];