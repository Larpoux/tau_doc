#!/bin/bash

bundle config set --local path '~/vendor/bundle'
bundle install
bundle exec jekyll build

if [ $? -ne 0 ]; then
    echo "Error"
    exit -1
fi

cp index.html _site

git add .
git commit -m 'tau-doc update'
git pull
git push
