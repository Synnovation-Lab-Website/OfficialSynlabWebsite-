import { JSDOM } from "jsdom";
import { writeFileSync } from "fs";
const DOMParser = new JSDOM().window.DOMParser;

let dataPromise = fetch("https://www.rokkitwear.com/school/56516-synnovation-lab/");
dataPromise.then((response) => {
  return response.text();
}).then((html) => {
  let domParser = new DOMParser();
  let dom = domParser.parseFromString(html, "text/html");
  dom.querySelectorAll("#productImageDisplay").forEach((x) => {
    parseImage(x);
  });
  dom.querySelectorAll(".rw-text10black").forEach((x) => {
    parseName(x);
  });
  let js_file_output = "let image_sources = [\n";
  for (let i = 0; i < imageSources.length; i++) {
    js_file_output += "\t[\"" + imageSources[i] + "\", \"" + merchNames[i] + "\"], \n";
  }
  js_file_output += "];";
  writeFileSync("./Merch/sources.js", js_file_output, "utf8");
});

let imageSources: string[] = [];
function parseImage(i: Element) {
  let parent_div = i.parentNode;
  let image = i.querySelector("img");
  let imageSource = image?.src;
  if (imageSource === undefined) return;
  imageSources.push(imageSource);
}

let merchNames: string[] = [];
function parseName(p: Element) {
  let name = p.innerHTML.split("</span>")[1].replace("\n", "");
  merchNames.push(name);
}
