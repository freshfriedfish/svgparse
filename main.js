import {BeatmapDecoder, BeatmapEncoder, SlidableObject} from "osu-parsers";
import textfile from "/a - pupa (Metal Wings) [exports1].txt?raw";
import {Vector2, PathPoint, SliderPath} from "osu-classes";
//88,104,569,2,0,L|166:88,1,80
//76,214,2569,2,0,B|142:165|183:260|250:216|250:216|313:260|356:186|321:162,1,320
//svg
//const path = document.getElementById('path2');
const path = document.getElementById('path2');

const pathdata = path.getPathData({normalize: true});
console.log(pathdata);
//beatmap
const tempBeatmap = new BeatmapDecoder().decodeFromString(textfile, true);
const sliderCopy = tempBeatmap.hitObjects[tempBeatmap.hitObjects.length - 1].clone();
const sliderOg = tempBeatmap.hitObjects[tempBeatmap.hitObjects.length - 1].clone();
console.log(sliderOg.path);

const firstslider = tempBeatmap.hitObjects[0].clone();
console.log("first slider", firstslider.path);

const secondslider = tempBeatmap.hitObjects[1].clone();
console.log("second slider", secondslider.path);

// const teststr = '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600" fill="none"> <path d="M43 110C100 69 167 167 226 116C318 183 372 75 350 43" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" id="path2"/> </svg>';
// console.log(teststr);

/*
C
null
null
C
null
null
null //last one is added as an extra
*/

//pathdata to slider
// pathdata.forEach((command) => {
//     const newpath = [];
//     switch (command.type) {
//         case "M":
//             //startpos
//             break;
//         case "C":
//             newpath.push(new PathPoint());
//     }
// });

const copiedPathProper = [
    new PathPoint(new Vector2(0,0), "B"),
    new PathPoint(new Vector2(57,-41), null),
    new PathPoint(new Vector2(124,57), null),
    new PathPoint(new Vector2(183,6), "B"),
    new PathPoint(new Vector2(275,73), null),
    new PathPoint(new Vector2(329,-35), null),
    new PathPoint(new Vector2(307,-67), null),
]
console.log(sliderCopy.path);
sliderCopy.startPosition = new Vector2(43, 110);
sliderCopy.path = new SliderPath("B", copiedPathProper, 400);
console.log("newpath", sliderCopy.path);
//sliderCopy.startPosition = new Vector2(10, 10);
//sliderCopy.path.controlPoints = copiedPath;
tempBeatmap.hitObjects.push(sliderCopy);

console.log(sliderCopy.path);

console.log("again");
console.log(new BeatmapEncoder().encodeToString(tempBeatmap));