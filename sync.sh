#!/bin/bash

# chmod +x ./sync.sh
echo '✨Synchronizing "gh-pages" with "master"...'
git checkout -f gh-pages
git pull origin master
git push origin gh-pages
git checkout master
echo '✨Done.'
