#!/bin/bash

rm -r fs-api
cp -a ../flutter_sound/flutter_sound/doc/api fs-api

echo "Add Front matter on top of dartdoc pages"
for f in $(find fs-api -name '*.html' )
do
        gsed -i "1i ---" $f
        gsed -i "1i summary: dart doc for $f" $f
        gsed -i "1i sidebar: fs_sidebar" $f
        gsed -i "1i title: $f" $f
        #gsed -i  "1i toc: false" $f
        gsed -i  "1i ---" $f
        gsed -i  "/^<script src=\"https:\/\/ajax\.googleapis\.com\/ajax\/libs\/jquery\/3\.2\.1\/jquery\.min\.js\"><\/script>$/d" $f
done

echo "Symbolic links of the API"
echo "--------------------------"
cd _site
for dir in $(find fs-api -type d)
do
        rel=`realpath --relative-to=$dir .`
        #echo "----- dir=$dir ----- rel=$rel"
        for d in */ ; do
            #echo "ln -s -v $rel/$d $dir"
            ln -s -v $rel/$d $dir
        done
        #for f in *
        #do
        #        ln -s $rel/$f $dir
        #done
done
cd ..
