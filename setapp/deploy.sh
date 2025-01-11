#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory

# move the built files to the /docs folder in the parent directory
rm -rf ../../docs/*    # lösche alten Inhalt im /docs-Ordner
mv ./dist/ ../../docs/       # verschiebe neue Dateien in den /docs-Ordner


# add the /docs folder to the main branch
git add ../docs
git commit -m 'Deploy to ../docs'
git push origin pages
