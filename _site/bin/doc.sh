#!/bin/bash

cp ../flutter_sound/flutter_sound/doc/FLUTTER_SOUND_VERSION bin
. bin/FLUTTER_SOUND_VERSION
gsed -i "s/^FS_VERSION:.*/FS_VERSION: $FLUTTER_SOUND_VERSION/" _config.yml
rm -rf _site
bundle config set --local path '~/vendor/bundle'
bundle install

bundle exec jekyll build
if [ $? -ne 0 ]; then
    echo "Error"
    exit -1
fi

git add .
git commit -m 'doc'
git pull
git push

echo -n 'Upload to canardoux.xyz ...'
ssh tau@danku 'rm -r /var/www/canardoux.xyz/tau/doc'
scp -r _site tau@danku:/var/www/canardoux.xyz/tau/doc >/dev/null
echo ''
exit 0

bin/apidoc.sh

rm -r danku/fs-live
cp -a ../flutter_sound/flutter_sound/example/build/web danku/fs-live

ssh tau@danku "rm -rf /var/www/canardoux.xyz/tau/*"
scp -r _site/* tau@danku:/var/www/canardoux.xyz/tau/ >/dev/null
ssh -t larpoux@danku "sudo /etc/init.d/nginx restart"
