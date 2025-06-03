import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// get the directory name of the current module
const _dirname = dirname(fileURLToPath(import.meta.url));
// get the path to the licenses.json file
const licensesFilePath = join(_dirname, "../licenses.json");
// open the licenses.json file and parse it
const data = JSON.parse(readFileSync(licensesFilePath, "utf-8"));
const licenseMap = {};

// for each package, get the license and repository info
for (const [pkg, info] of Object.entries(data)) {
  const license = info.licenses || "UNKNOWN";
  const nameVersion = `${pkg}`;
  const repo = info.repository || "No repository info";
  // if the license is not in the map, create an entry for it
  // and add the package to the list of packages for that license
  if (!licenseMap[license]) licenseMap[license] = [];
  licenseMap[license].push({ nameVersion, repo });
}
// sort the licenses alphabetically
const sortedLicenses = Object.keys(licenseMap).sort();

// create the markdown file
let markdown = "# Third-Party Licenses\n\n";
markdown += "This file lists third-party dependencies and their licenses.\n\n";

// for each license, add a section to the markdown file
for (const license of sortedLicenses) {
  markdown += `## ${license}\n\n`;
  // add the link to the github repository for the license
  for (const dep of licenseMap[license]) {
    markdown += `- [${dep.nameVersion}](${dep.repo})\n`;
  }

  markdown += "\n";
}

writeFileSync("Third-Party-Licenses.md", markdown, "utf-8");
console.log("Third-Party-Licenses.md generated.");
