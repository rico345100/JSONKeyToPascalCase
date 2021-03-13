const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));

function print() {
    console.log.apply(null, arguments);
}

function toPascalCase(string) {
    return `${string}`
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
    new RegExp(/\s+(.)(\w+)/, 'g'),
    ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\s/, 'g'), '')
    .replace(new RegExp(/\w/), s => s.toUpperCase());
}

(async function() {
    print("Change All JSON Key to Pascal Case...");

    const { i: inputJsonDir } = argv;
    const { o: outputDir = 'result.json' } = argv;

    try {
        if (typeof argv.i === "undefined") {
            throw new Error("Input Source JSON is missing.");
        }

        const sourceBuffer = await fs.promises.readFile(inputJsonDir);
        const sourceText = sourceBuffer.toString();
        const sourceJson = JSON.parse(sourceText);
        const outputJson = {};

        function parseAndUpdate(source, dest) {
            const keys = Object.keys(source);

            for (let key of keys) {
                const element = source[key];
                const pascalCasedKey = toPascalCase(key);

                if (Array.isArray(element) != true && typeof element === 'object' && element !== null) {
                    dest[pascalCasedKey] = {};
                    parseAndUpdate(element, dest[pascalCasedKey]);
                }
                else {
                    dest[pascalCasedKey] = source[key];
                }
            }
        }

        parseAndUpdate(sourceJson, outputJson);

        await fs.promises.writeFile(outputDir, JSON.stringify(outputJson, null, 4));

        print("Update completed. Please check your output directory.");
        print("Written as: " + outputDir);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
})();