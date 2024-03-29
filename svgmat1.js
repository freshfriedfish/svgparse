import {Matrix} from "ml-matrix";
import {Vector2, PathPoint, SliderPath} from "osu-classes";
import {BeatmapDecoder, BeatmapEncoder, SlidableObject} from "osu-parsers";
import textfile from "/a - pupa (Metal Wings) [exports1].txt?raw";

function bruh(data) { //returns array of arrays, where each nested array represents a 2d coordinate. accepts array
    return data.reduce((a, c, i) => {
        return i % 2 === 0 ? a.concat([data.slice(i, i + 2)]) : a;
    }, []);
}

//all paths
//curvex4
//5,186,0,2,0,B|42:250|97:248|122:172|122:172|148:242|204:242|241:166|241:166|269:233|341:232|358:153|358:153|400:218|497:212|506:133,1,700
const path3 = document.getElementById('path3');
const path3data = path3.getPathData({normalize: true});
console.log("path3data", path3data);
//bump
//76,221,0,2,0,B|186:222|186:222|215:163|302:162|318:221|318:221|435:220,1,375
const path4 = document.getElementById('path4');
const path4data = path4.getPathData({normalize: true});
console.log("path4data", path4data);
//z
//114,189,0,2,0,B|220:262|220:262|302:121|302:121|398:178,1,400
const path5 = document.getElementById('path5');
const path5data = path5.getPathData({normalize: true});
console.log("path5data", path5data);


//main path
const path = document.getElementById('path5');
const pathdata = path.getPathData({normalize: true});
const flatarr = pathdata.map((command) => command.values).flat(1);
const flatarrMat = new Matrix(bruh(flatarr));
const startPos = flatarrMat.getRowVector(0).to1DArray();
flatarrMat.subRowVector(flatarrMat.getRowVector(0));
/* the following bugs out flatarrmat
.transpose();
flatarrMat.subColumnVector(flatarrMat.getColumnVector(0));
flatarrMat.transpose();
 */
const flatarr2d = flatarrMat.to2DArray()
const newControlPointsFixed = flatarr2d.map((elem) => {
    return new PathPoint(new Vector2(elem[0], elem[1]), null);
});
const newControlPointsCopy = flatarr2d.map((elem) => {
    return new PathPoint(new Vector2(elem[0], elem[1]), null);
});
const arrlen = pathdata.map(command => command.values.length / 2 - 1);
// arrlen[arrlen.length - 1] = arrlen[arrlen.length - 1] + 1;
console.log("arrlen", arrlen);

//attempt 1
/*
let iteratedval = 0;
for (let i = 1; i < arrlen.length; i++) {
    console.log(i)
    for (let j = 0; j < arrlen[i]; j++) {
        iteratedval++;
        console.log("ran");
    }
    newControlPointsCopy[iteratedval].type = "B";
}
 */

let iteratedVal = 0;
pathdata.forEach((command) => {
    switch (command.type) {
        case "M":
            newControlPointsCopy[iteratedVal].type = "B";
            break;
        case "L":
            iteratedVal++
            newControlPointsCopy[iteratedVal].type = "B";
            break;
        case "C":
            iteratedVal++;
            iteratedVal++;
            iteratedVal++;
            newControlPointsCopy[iteratedVal].type = "B";
            console.log(iteratedVal);
            break;
    }
});
newControlPointsCopy[iteratedVal].type = null;

//beatmap
const tempBeatmap = new BeatmapDecoder().decodeFromString(textfile, true);
const sliderCopy = tempBeatmap.hitObjects[tempBeatmap.hitObjects.length - 1].clone();
sliderCopy.startPosition = new Vector2(startPos[0], startPos[1]);
sliderCopy.path = new SliderPath("B", newControlPointsCopy, 400);
tempBeatmap.hitObjects.push(sliderCopy);
console.log(new BeatmapEncoder().encodeToString(tempBeatmap));