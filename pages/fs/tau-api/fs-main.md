---
title:  "Flutter Sound API"
description: "The Flutter Sound API."
summary: "Flutter Sound; is composed with 3 modules."
permalink: fs-tau_api_main.html
sidebar: fs_sidebar
tags: [api,getting_started]
keywords: API
---

# The Main modules

Flutter Sound is composed with 3 modules :

- `FlutterSoundPlayer`, wich deal with everything about playbacks
- `FlutterSoundRecorder`, which deal with everything about recording
- `FlutterSoundHelper`, which offers some convenients tools

To use Flutter Sound you just do :

```dart
import 'package:flutter_sound/flutter_sound.dart';
```

This will import all the necessaries dart interfaces.

## Playback

1. **Instance one ore more players.**
A good place to do that is during your variables initialisation..
It is also possible to instanciate the players "on the fly", when needed.
```dart
FlutterSoundPlayer myPlayer = FlutterSoundPlayer();
```


2. **Open it.**
A good place to do that is in your `init()` function.
It is also possible to open the players "on the fly", when needed.
You cannot do anything on a closed Player.
```dart
myPlayer.openPlayer().then( (){ ...} );
```


3. **Use the various verbs implemented by the players.**
- `startPlayer()`
- `startPlayerFromStream()`
- `setVolume()`
- `stopPlayer()`
- ...


4. **Close your players.**
This is important to close every player open for freeing the resources taken by the audio session.
A good place to do that is in the `dispose()` procedure.
```dart
myPlayer.closePlayer();
```


## Recording


1. **Instance your recorder.**
A good place to do that is during your variables initialisation.
```dart
FlutterSoundRecorder myRecorder = FlutterSoundRecorder();
```

2. **Open it.**
A good place to do that is in your `init()` function.
It is also possible to open the recorders "on the fly", when needed.
You cannot do anything on a closed Recorder.
```dart
myRecorder.openRecorder().then( (){ ...} );
```


3. **Use the various verbs implemented by the players.**
- `startRecorder()`
- `pauseRecorder()`
- `resumeRecorder()`
- `stopRecorder()`
- ...


4. **Close your recorder.**
This is important to close it for freeing the resources taken by the audio session.
A good place to do that is in the `dispose()` procedure.
```dart
myRecorder.closeRecorder();
```

