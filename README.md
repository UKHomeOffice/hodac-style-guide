UI prototype boilerplate with GOV.UK sass stylesheets
=====================================================

A starter project including full setup for Jekyll, GulpJS, SASS, AutoPrefixer and BrowserSync

## System Preparation

To use this starter project, you'll need the following things installed on your machine.

1. [Jekyll](http://jekyllrb.com/) - `$ gem install jekyll`
2. [NodeJS](http://nodejs.org) - use the installer.
3. [GulpJS](https://github.com/gulpjs/gulp) - `$ npm install -g gulp` (mac users may need sudo)

## Local Installation

1. Clone this repo, or download it into a directory of your choice.
2. Install Docker:https://www.docker.com/

## Usage

**development mode**

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting etc etc.


*Build the docker image*

```shell
$ make
```

*Run docker image*

```shell
$ docker-compose up
```

## Project Structure

Markdowns files for the solution can be found in the following folders:

1. _common
2. _project-*


## Integration with other applications

Please import the:
 git+https://gitlab.digital.homeoffice.gov.uk/hodac/HODAC-style-guide.git#master repository

Copy all the assets, as reference please look at the Gulp file.
