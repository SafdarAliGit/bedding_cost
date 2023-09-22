from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in bedding_cost/__init__.py
from bedding_cost import __version__ as version

setup(
	name="bedding_cost",
	version=version,
	description="This is bedding cost",
	author="Tech Venture",
	author_email="safdar211@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
