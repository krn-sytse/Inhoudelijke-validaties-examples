import sys
from saxonche import PySaxonProcessor


def validate_nlcs():
    if len(sys.argv) < 2:
        print(f"Usage: {sys.argv[0]} /path/to/nlcs.xml")
        sys.exit(1)
    
    xml_path = sys.argv[1]
    svrl_path = xml_path.replace('.xml', '.svrl.xml')

    with PySaxonProcessor(license=False) as proc:
        xsltproc = proc.new_xslt30_processor()

        executable = xsltproc.compile_stylesheet(
            stylesheet_file="dist/src/base/v12.xsl"
        )

        executable.transform_to_file(source_file=xml_path, output_file=svrl_path)
        print(f"Validation ready, report has been saved at {svrl_path}")

if __name__ == "__main__":
    validate_nlcs()
