import {Matrix} from "ml-matrix";
import _ from "lodash";

const path = document.getElementById('path2');
const pathdata = path.getPathData({normalize: true});
console.log(pathdata);
const flatarr = pathdata.map((command) => command.values).flat(1);
const arrlen = pathdata.map((command) => command.values.length/2);

console.log(flatarr);
const flatarrCopy = [...flatarr];

//flatarr.splice(0, 2);
console.log(flatarr)

const flatarrMat = new Matrix(bruh(flatarr)).transpose();
flatarrMat.subColumnVector(flatarrMat.getColumnVector(0));
flatarrMat.transpose();
const flatarr2d = flatarrMat.to2DArray()
console.log("hi",flatarr2d.toString());

const arrlenConvert = arrlen.map((ele) => {
    return flatarr2d.splice(0, ele);
});

console.log(arrlenConvert);




/*
return
    if(even)
        a.concat([data.slice(i, i + 2)])
    else
        a
 */
function bruh(data) {
    return data.reduce((a, c, i) => {
        return i % 2 === 0 ? a.concat([data.slice(i, i + 2)]) : a;
    }, []);
}



//convert [[2],[6]... to [[2],[2];