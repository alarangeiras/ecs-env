const fs = require('fs').promises;

async function writeToFile(fileName, lines) {
    const fileContent = lines.join('\n');
    await fs.writeFile(fileName, fileContent);

}

module.exports = {
    writeToFile
}