# NLCS++ Python Validation

This project serves as a very basic example of how NLCS++ validations can be performed using [saxonche](https://pypi.org/project/saxonche/) in Python.

## Getting Started

### Installing

1. Create a virtual environment: `python3 -m venv .venv`
2. Activate the virtual environment:
    ``` ps
    # Windows
    .venv\Scripts\Activate.ps1

    # MacOS/Linux
    source .venv/bin/activate
    ```
3. Install the required packages: `pip install -r requirements.txt`
4. Download the validation software: `../scripts/install-dist.sh`

### Executing validations

* Run `python main.py ../nlcs-example.xml`
* The NLCS++ validation report should generate at `../nlcs-example.svrl.xml`
