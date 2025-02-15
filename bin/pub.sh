#!/bin/bash

#cp ../flutter_sound/flutter_sound/doc/FLUTTER_SOUND_VERSION bin
#. bin/FLUTTER_SOUND_VERSION
#gsed -i "s/^FS_VERSION:.*/FS_VERSION: $FLUTTER_SOUND_VERSION/" _config.yml
rm -rf _site
#cp ../flutter_sound/README.md pages/fs




rm -rf tau/fs/* tau/etau/* tau/taudio/*
cp -r ../etau/example/build/web tau/etau/live
cp -r ../flutter_sound/example/build/web tau/fs/live
cp -r ../taudio/example/build/web tau/taudio/live
if [ $? -ne 0 ]; then
    echo "Error"
    exit -1
fi


echo 'config set --local path ~/vendor/bundle'
bundle config set --local path '~/vendor/bundle'
bundle install

###cp -a ../etau/doc/api etau_api

###rm -r live_etau_example 2>/dev/null
###cp -a ../etau/example/build/web live_etau_example
###gsed -i "s/^\ *<base href\=.*$/  \<base href\=\"\/live_etau_example\/\"\>/"           live_etau_example/index.html
echo 'bundle exec jekyll build'
bundle exec jekyll build
if [ $? -ne 0 ]; then
    echo "Error"
    exit -1
fi


cp -a ../flutter_sound/doc/api tau/fs
cp -a ../taudio/doc/api tau/taudio
cp -a ../etau/doc/api tau/etau

#cp index.html _site/index.html
#cp -a ../etau/example/build/web _site/live_etau_example

echo 'git push'
git add .
git commit -m 'doc'
git pull
git push

echo -n 'Upload to canardoux.xyz ...'
scp -r _site/* canardoux@danku:/var/www/canardoux.xyz/tau/doc > /dev/null
echo ''





exit 0
