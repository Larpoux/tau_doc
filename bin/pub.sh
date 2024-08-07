#!/bin/bash

source ../bin/new-version.sh

echo "Upload"
cd _site
tar  cz --no-xattrs -f ../_toto.tgz *
cd ..
pwd
scp _toto.tgz danku@danku:~
ssh  danku@danku "rm -rf /var/www/canardoux.xyz/danku/doc; mkdir /var/www/canardoux.xyz/danku/doc/; tar xzf _toto.tgz -C /var/www/canardoux.xyz/danku/doc/; rm _toto.tgz"

rm _toto.tgz

git add .
git commit -m "Danku-doc : Version $DANKU_VERSION"
git pull origin
git push origin
#if [ ! -z "$DANKU_VERSION" ]; then
    git tag -f $DANKU_VERSION
    git push  -f origin $DANKU_VERSION
#fi

echo "EOJ"

