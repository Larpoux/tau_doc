#!/bin/bash

rm -r fs-api
cp -a ../flutter_sound/flutter_sound/doc/api fs-api
rm -r toto
cp -a ../flutter_sound/flutter_sound/doc/api toto
cp ../taudoc/bin/taudoc-api-styles.css fs-api/static-assets/styles.css

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

        gsed -i  "s|<html|<tau-html|g"     $f
        gsed -i  "s|</html|</tau-html|g"     $f
        gsed -i  "s|<body|<tau-body|g"     $f
        gsed -i  "s|</body|</tau-body|g"     $f
        gsed -i  "s|<header|<tau-header|g"     $f
        gsed -i  "s|</header|</tau-header|g"     $f
        gsed -i  "s|<footer|<tau-footer|g"     $f
        gsed -i  "s|</footer|</tau-footer|g"     $f
        gsed -i  "s|<main|<tau-main|g"     $f
        gsed -i  "s|</main|</tau-main|g"     $f
done

echo "Symbolic links of the API"
echo "--------------------------"
for dir in $(find fs-api -type d)
do
        rel=`realpath --relative-to=$dir .`
        ln -s  $rel/css $dir
        ln -s  $rel/js $dir
        ln -s  $rel/images $dir
        ln -s  $rel/fonts $dir
        #echo "----- dir=$dir ----- rel=$rel"
        #for d in */ ; do
            #echo "ln -s -v $rel/$d $dir"
            #ln -s -v $rel/$d $dir
        #done

        #for f in *
        #do
                #echo "********************** $f"
        #done
done