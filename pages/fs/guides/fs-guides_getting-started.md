---
title:  "Getting Started"
description: "Getting Started.."
summary: "Introduction for Flutter Sound beginners."
permalink: fs-guides_getting_started.html
sidebar: fs_sidebar
tags: [getting_started,guide]
keywords: gettingStarted
---

# Getting Started

## Playback

The complete running example [is there](fs-flutter_sound_examples_simple_playback.html)

### 1. Create an audio session (optional)

If you want to control your audio session or if you are using also the Flutter Sound recorder, you may create an audio session. (see `recording` chapiter).

### 2. FlutterSoundPlayer instanciation

To play back something you must instanciate a player. Most of the time, you will need just one player, and you can place this instanciation in the variables initialisation of your class :

```dart
  import 'package:flauto/flutter_sound.dart';
...
  FlutterSoundPlayer _myPlayer = FlutterSoundPlayer();
```


### 3. Open and close the player

Before calling `startPlayer()` you must open it.

When you have finished with your player, **you must** close it. A good places to put those verbs are in the procedures `initState()` and `dispose()`.

```dart
@override
  void initState() {
    super.initState();
    // Be careful : openAudioSession return a Future.
    // Do not access your FlutterSoundPlayer or FlutterSoundRecorder before the completion of the Future
    _myPlayer.openPlayer().then((value) {
      setState(() {
        _mPlayerIsInited = true;
      });
    });
  }

  @override
  void dispose() {
    // Be careful : you must `close` the audio session when you have finished with it.
    _myPlayer.closePlayer();
    _myPlayer = null;
    super.dispose();
  }
```

### 4. Play your sound

To play a sound you call `startPlayer()`. To stop a sound you call `stopPlayer()`

```dart
void play() {
    _myPlayer.startPlayer(
      fromURI: _exampleAudioFilePathMP3,
      codec: Codec.mp3,
    ).then((value) {
      setState(() {
        _playing = true;
      });
    });
  }

  void stopPlayer() {
    await _myPlayer.stopPlayer().then((value) {
      setState(() {
        _playing = false;
      });
    });
  }
```

## Recording

The complete running example [is there](fs-flutter_sound_examples_simple_recorder.html)

### 1. Ask the user the permission to record

You may not record anything without the user permission. By the past, Flutter Sound managed itself this permission.
We abandoned that because of conflicts with other audio plugins. Now, to do that, you can use the 
Flutter [Permission Handler](https://pub.dev/packages/permission_handler) plugin.

### 2. Open an audio session

By the past, Flutter Sound tried to manage itself the audio sessions. We abandoned this because of two points :

- Audio sessions are a very bad thing on iOS. There is only one audio session for all the app.
- Flutter Sound was not compatible with the use of other audio plugins.

We incite you to use a general Flutter plugin that federates audio session management in one single point,
for example [Flutter audio_session](https://pub.dev/packages/audio_session).

It is very simple to create an audio-session. This is just a matter of just one instruction:

```dart
    final session = await AudioSession.instance;
    await session.configure(AudioSessionConfiguration(
      avAudioSessionCategory: AVAudioSessionCategory.playAndRecord,
      avAudioSessionCategoryOptions:
          AVAudioSessionCategoryOptions.allowBluetooth |
              AVAudioSessionCategoryOptions.defaultToSpeaker,
      avAudioSessionMode: AVAudioSessionMode.spokenAudio,
      avAudioSessionRouteSharingPolicy:
          AVAudioSessionRouteSharingPolicy.defaultPolicy,
      avAudioSessionSetActiveOptions: AVAudioSessionSetActiveOptions.none,
      androidAudioAttributes: const AndroidAudioAttributes(
        contentType: AndroidAudioContentType.speech,
        flags: AndroidAudioFlags.none,
        usage: AndroidAudioUsage.voiceCommunication,
      ),
      androidAudioFocusGainType: AndroidAudioFocusGainType.gain,
      androidWillPauseWhenDucked: true,
    ));
```

### 3. FlutterSoundRecorder instanciation

To record something you must instanciate a recorder. Most of the time, you will need just one recorder, and you can place this instanciation in the variables initialisation of your class :

```dart
  FlutterSoundRecorder _myRecorder = FlutterSoundRecorder();
```


### 4. Open and close the recorder

Before calling `startRecorder()` you must open it.

When you have finished with it, **you must** close it. A good place to pute those verbs is in the procedures `initState()` and `dispose()`.

```dart
@override
  void initState() {
    super.initState();
    // Be careful : openRecorder return a Future.
    // Do not access your FlutterSoundPlayer or FlutterSoundRecorder before the completion of the Future
    _myRecorder.openRecorder().then((value) {
      setState(() {
        _mRecorderIsInited = true;
      });
    });
  }



  @override
  void dispose() {
    // Be careful : you must `close` the audio session when you have finished with it.
    _myRecorder.closeRecorder();
    _myRecorder = null;
    super.dispose();
  }
```

### 5. Record something

To record something you call `startRecorder()`. To stop the recorder you call `stopRecorder()`

```dart
  void record() {
    await _myRecorder.startRecorder(
      toFile: _mPath,
      codec: Codec.aacADTS,
    ).then((value) {
      setState(() {
        _recording = true;
      });
    });
  }


  void stopRecorder() {
    _myRecorder.stopRecorder().then((value) {
      setState(() {
        _recording = false;
      });
    });
  }
```
