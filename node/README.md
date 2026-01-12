# NLCS++ SaxonJS Validation

This project serves as a very basic example of how NLCS++ validations can be performed using [saxonjs-he](https://www.npmjs.com/package/saxonjs-he) in Node.js.

## Getting Started

### Installing

1. Run `npm install` to install the required modules and latest NLCS++ validation release
2. Run `npm run transpile` and install the [xslt3-he](https://www.npmjs.com/package/xslt3-he) package when prompted

### Executing validations

* Run `npm run validate -- xml=../nlcs-example.xml`
* The NLCS++ validation report should generate at `nlcs-example.svrl.xml`