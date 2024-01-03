# Project Setup Instructions

Html files are stored in `/pages` folder.
Scss files are stored in `/resources/scss` folder.
Any images and js files are temporary stored in `/assets/img` and `/assets/js` folders.

Links in html to css files should start with `/assets/css/....` and css files in `/assets/css` folder
will be automaticly created and updated with commands listed below.

## Installation

To install the JS dependencies for this project, run:

`npm install`

## Run build for front assets

Public assets are built using sass

`npm run sass-build` to build css assets from scss
`npm run sass-watch` to watch changes on scss files and rewrite changes to csss files

On initial setup first run `npm install`, then `npm run sass-build`, and if developing changes is needed run `npm run sass-watch`. To exit from watch press `ctrl+c`.

When you create new scss file, run `npm run sass-build` and then `npm run sass-watch` to let system continue to watch your changes.

Any fonts and images should be stored to `/resources/fonts` and `/resources/media` folders, and after any change in those folders command `npm run sass-build` must be called. Command will copy content on those to folders into `/assets/fonts` and `/assets/img` folders.

BESIDE THIS COMMANDS THAT YOU WILL USE IN COMMAND TERMINAL IN ROOT OF THIS PROJECT, 
DO NOT USE ANY EXTERNAL TOOL FOR SCSS!!!!

To get familiar with file structure and commands in terminal,
practice a little with `primer.scss` file in `resources/scss` folder.
When you get use to now how project is organized delete `primer.scss` file.