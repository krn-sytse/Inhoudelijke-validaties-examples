const SaxonJS = require('saxonjs-he')
const fs = require('node:fs')

const args = Object.fromEntries(process.argv.slice(2).map(keyValueString => keyValueString.split("=")))

const xmlFile = args.xml

if (!xmlFile) {
    console.error("An NLCS++ XML file must be provided, e.g. xml=path/to/nlcs.xml")
    process.exit(1)
}

const sefFile = "dist/src/base/v12.sef.json"

if (!fs.existsSync(sefFile)) {
    console.error("The validation XSL had not yet been transpiled, please run the following command:\n\n\tnpm run transpile\n")
    process.exit(1)
}

SaxonJS.transform({
    stylesheetFileName: sefFile,
    sourceFileName: xmlFile,
    destination: "serialized"
}, "async").then((output) => {
    const svrlContent = output.principalResult
    const svrlFile = xmlFile.split("/").at(-1).replace(".xml", ".svrl.xml")
    fs.writeFile(svrlFile, svrlContent, err => {
        if (err) {
            console.error(err)
        }
        else {
            console.log(`Validation ready, report has been saved at ${svrlFile}`)
        }
    })
})