""" Test the Cookiecutter template.

A template project is created in a temporary directory and its tests are run.

"""
from json import loads
from pathlib import Path
from shlex import split
from subprocess import check_call
from tempfile import TemporaryDirectory

from cookiecutter.main import cookiecutter


def main() -> int:
    """ Execute the test.
    
    """
    template = Path(__file__).resolve().parents[1]
    defaults = loads(template.joinpath("cookiecutter.json").read_text())
    with TemporaryDirectory() as tmpdir:
        cookiecutter(str(template), no_input=True, output_dir=tmpdir)
        path = Path(tmpdir) / defaults["project_slug"]
        for command in "install", "run build", "run test":
            check_call(split(f"npm {command:s}"), cwd=path)
    return 0
    
    
# Make the script executable.

if __name__ == "__main__":
    raise SystemExit(main())
