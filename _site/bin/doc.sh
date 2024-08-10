#!/bin/bash

rm -rf _site
bundle config set --local path '~/vendor/bundle'
bundle install
bundle exec jekyll build

if [ $? -ne 0 ]; then
    echo "Error"
    exit -1
fi

#cp index.html _site

#rm -rf danku
#rm -r ../danku/rs-live
cp -a ../flutter_sound/flutter_sound/example/build/web danku/fs-live
#cp -a ../danku danku

git add .
git commit -m 'tau-doc update'
git pull
git push

ssh tau@danku "rm -rf /var/www/canardoux.xyz/tau/*"
scp -r _site/* tau@danku:/var/www/canardoux.xyz/tau/ >/dev/null

#ssh danku@danku "rm -rf /var/www/canardoux.xyz/danku/fs-live"
#scp -r ../flutter_sound/flutter_sound/example/build/web  danku@danku:/var/www/canardoux.xyz/danku/fs-live >/dev/null

#ssh danku@danku "rm -rf /var/www/canardoux.xyz/danku/extract"
#scp -r ../danku/extract  danku@danku:/var/www/canardoux.xyz/danku/extract >/dev/null
