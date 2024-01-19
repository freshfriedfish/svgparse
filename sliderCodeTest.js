import {BeatmapDecoder, BeatmapEncoder, SlidableObject} from "osu-parsers";
import textfile from "/a - pupa (Metal Wings) [exports1].txt?raw";
import {Vector2, PathPoint, SliderPath} from "osu-classes";

//beatmap
const tempBeatmap = new BeatmapDecoder().decodeFromString(textfile, true);
const sliderCopy = tempBeatmap.hitObjects[tempBeatmap.hitObjects.length - 1].clone();
//curvex4
const slider1 = tempBeatmap.hitObjects[0].clone();
console.log("first slider", slider1.path.controlPoints);
//bump
const slider2 = tempBeatmap.hitObjects[1].clone();
console.log("second slider", slider2.path.controlPoints);
//z
const slider3 = tempBeatmap.hitObjects[2].clone();
console.log("third slider", slider3.path.controlPoints);

console.log(sliderCopy.path);
sliderCopy.startPosition = new Vector2(43, 110);

const copiedPathProper = [
    new PathPoint(new Vector2(0,0), "B"),
    new PathPoint(new Vector2(57,-41), null),
    new PathPoint(new Vector2(124,57), null),
    new PathPoint(new Vector2(183,6), "B"),
    new PathPoint(new Vector2(275,73), null),
    new PathPoint(new Vector2(329,-35), null),
    new PathPoint(new Vector2(307,-67), null),
]
sliderCopy.path = new SliderPath("B", copiedPathProper, 400);
console.log("newpath", sliderCopy.path);

tempBeatmap.hitObjects.push(sliderCopy);

console.log(sliderCopy.path);

console.log("again");
console.log(new BeatmapEncoder().encodeToString(tempBeatmap));