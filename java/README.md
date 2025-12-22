# NLCS++ Java CLI Validation

This project serves as a very basic example of how NLCS++ validations can be performed using [Saxon-HE](https://github.com/Saxonica/Saxon-HE) in a Java CLI.

## Getting Started

### Installing

1. Run `sh install.sh` to install the JARs and latest NLCS++ validation release

### Executing validations

* Run `java -jar saxon-he.jar -xsl:dist/src/base/v12.xsl -s:path/to/nlcs.xml -o:path/to/report.svrl.xml`, replacing `path/to/nlcs.xml` with your NLCS++ file and `path/to/report.svrl.xml` with your desired validation report location