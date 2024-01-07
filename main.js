import {BeatmapDecoder, BeatmapEncoder, SlidableObject} from "osu-parsers";
import textfile from "/a - pupa (Metal Wings) [exports1].txt?raw";
import {Vector2, PathPoint} from "osu-classes";
import {StandardRuleset} from "osu-standard-stable";
//88,104,569,2,0,L|166:88,1,80
//76,214,2569,2,0,B|142:165|183:260|250:216|250:216|313:260|356:186|321:162,1,320
//svg
//const path = document.getElementById('path2');
const path = document.getElementById('path2');

const pathdata = path.getPathData({normalize:true});
console.log(pathdata);
//beatmap
const tempBeatmap = new BeatmapDecoder().decodeFromString(textfile, true);
const sliderCopy = tempBeatmap.hitObjects[tempBeatmap.hitObjects.length - 1];

// const teststr = '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600" fill="none"> <path d="M43 110C100 69 167 167 226 116C318 183 372 75 350 43" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" id="path2"/> </svg>';
// console.log(teststr);
console.log(sliderCopy.path.controlPoints);
//

//pathdata to slider
pathdata.forEach((command) => {
    const newpath = [];
    switch (command.type) {
        case "M":
            //startpos
            break;
        case "C":
            newpath.push(new PathPoint());
    }
});



tempBeatmap.hitObjects.push(sliderCopy);

//console.log(new BeatmapEncoder().encodeToString(tempBeatmap));