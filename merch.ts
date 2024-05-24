import { JSDOM } from "jsdom";
import { writeFileSync } from "fs";
const DOMParser = new JSDOM().window.DOMParser;


// fetch html from rokkitwear
//  https://www.rokkitwear.com/school/56516-synnovation-lab/
// parse html and collect most popular items
// present to user

let dataPromise = fetch("https://www.rokkitwear.com/school/56516-synnovation-lab/");
dataPromise.then((response) => {
  return response.text();
}).then((html) => {
  let domParser = new DOMParser();
  let dom = domParser.parseFromString(html, "text/html");
  dom.querySelectorAll("#productImageDisplay").forEach((x) => {
    parseProduct(x);
  });
  let js_file_output = "let image_sources = [\n";
  for (let src of imageSources) {
    js_file_output += "\t\"" + src + "\",\n";
  }
  js_file_output += "];";
  writeFileSync("./Merch/sources.js", js_file_output, "utf8");
});

let imageSources: string[] = [];
function parseProduct(p: Element) {
  let image = p.querySelector("img");
  let imageSource = image?.src;
  if (imageSource === undefined) return;
  imageSources.push(imageSource);
}
