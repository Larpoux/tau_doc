#!/bin/bash

. DANKU_VERSION

        echo "Setting the Dank u version $DANKU_VERSION"
        gsed -i  "s/^DANKU_VERSION:.*/DANKU_VERSION: $DANKU_VERSION/"                                 _config.yml
        gsed -i  "s/^\( *version: \).*/\1$DANKU_VERSION/"                                             _data/sidebars/mydoc_sidebar.yml



echo "Building Jekyll doc"
rm -rf _site
#rm home.md 2>/dev/null
bundle exec jekyll build
if [ $? -ne 0 ]; then
    echo "Error"
    exit -1
fi


