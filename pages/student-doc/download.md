---
title: Downloads
keywords: Danku Download
tags: [downloads]
sidebar: mydoc_sidebar
toc: false
permalink: download.html
folder: danku
---
Dank u is a web App that has been ported to several Operating Systems and run under modern 64 bits hardware machines.

## 1 - Live running

This is the simplest way to run Dank u. There is nothing to download. Nothing to prepare.
Your class sessions are stored locally inside your browser disk space.
The accessible classes are all the Dank u Databases offered on the web

- [Dank u on Vercel](https://danku.vercel.app)
- [Dank u on canardoux](https://danku.canardoux.xyz/index.html)

### Here is the Dank u documentation

- [Doc on Svelte](https://danku-doc.vercel.app/)
- [Doc on canardoux](https://danku-doc.canardoux.xyz/)

Dank u is compatible with the main Web Browsers :

- Firefox
- Chrome
- Safari
- Edge

## 2 - PWA (Progressive Web App)

Running Dank u on the web is fine and simple, but maybe you would like to run Dank u in its own window, without all the browsers menus, tool bars and title bars.
Dank u suports correctly the PWA specifications for the major Web Browsers.

### a - Firefox

To use PWA feature, Firefox needs a specific extension. Please follow Mozilla documentation to install a such extension. Then you will have the same icon on the right of the web address bar, like on Chrome.

### b - Chrome

When you run Dank u under Chrome, there is an icon on the right of the address bar (just near the star to bookmark the web address).
This icon can represent a desktop screen with an arrow pointing downside (this is the install button) or sometimes a square with an arrow pointing up-right (this is the button to open Dank u inside its own app).

### c - Safari

When you run Dank u under Safari, there is an icon on the up-right side of the Window title bar (just near the plus button to create a new tab).
This icon represents a square with an arrow pointing upside. This is the "Sahre" button. When you push this button you can select "Add To Dock".

### d - Edge

When you run Dank u under Safari, there is an icon on the up-right side of the Window title bar (just near the plus button to create a new tab).
This icon represents a square with an arrow pointing upside. This is the "Sahre" button. When you push this button you can select "Add To Dock".

### d - iOS

On Chrome and Safari, you must select the menu "Add to Homescreen" in the hamburger menu, on top right of the screen.
On Edge you must ... (TODO)
Unfortunately I was not able to discover how to install a PWA application on Firefox. Please look to the Mozilla documentation for more informations.

## 3 - Android

The final Dank u version has not yet been published on the Google Play Store.
You can run a [pre-version of the App](https://www.canardoux.xyz/downloads/danku/danku.apk) with a direct download and install it.
You must ensure that your Android device allows such an installation.
You probably want to look to your Android documentation to learn how to setup this parameter.

## 4 - iOS (Todo)

The final Dank u version has not yet been published on the Apple App Store.
You can run a pre-version of the App using Apple Test Flight.




## 5 - Linux Debian / Ubuntu / Linux Mint / ...

You must download the correct "deb" file (for ARM64 or for AMD64).
Then you can use the regular package manager to install the App under a Debian derived distribution.

- [Arm 64](https://www.canardoux.xyz/downloads/danku/xyz.canardoux.danku-arm64.deb)
- [AMD 64](https://www.canardoux.xyz/downloads/danku/xyz.canardoux.danku-amd64.deb)

You download the correct "deb" file and install it using apt-get:

``` sh
$apt-get install xyz.canardoux.danku-arm64.deb
```

or

``` sh
$apt-get install xyz.canardoux.danku-amd64.deb
```

## 6 - Linux Tarball

- [Arm 64](https://www.canardoux.xyz/downloads/danku/xyz.canardoux.danku-arm64.tar.gz)
- [AMD 64](https://www.canardoux.xyz/downloads/danku/xyz.canardoux.danku-amd64.tar.gz)

You can download  the correct "tarball" file (for ARM64 or for AMD64/Intel x86) and then extract the directory somewhere

```sh
$tar xzf xyz.canardoux.danku-arm64.tar.gz
```

or

```sh
$tar xzf xyz.canardoux.danku-amd64.tar.gz
```

## 7 - MacOS

Both ARM64 (Apple Silicon) and AMD64 (or Intel x86) are included with [this download](https://www.canardoux.xyz/danku/downloads/danku-universal.dmg).



## 8 - Windows 64

Only the 64 bits flavors of Windows are suported by Dank u.
Both ARM64 (Apple Silicon) and AMD64 (or Intel x64) are included with [this download](https://www.canardoux.xyz/downloads/danku/Danku-Setup.exe).
