---
title:  "Examples"
description: "Playback From Stream(1)"
summary: "Playback From Stream(1)"
permalink: fs-flutter_sound_examples_playback_from_stream_1.html
sidebar: fs_sidebar
tags: [example,demo]
keywords: Flutter, Flutter Sound, examples, demo
---
# Examples

## livePlaybackWithoutBackPressure

{% include image.html file="examples/live_playback_without_back_pressure.png" %}

A very simple example showing how to play Live Data without back pressure. It feeds a live stream, without waiting that the Futures are completed for each block. This is simpler than playing buffers synchronously because the App does not need to await that the playback for each block is completed playing another one.

This example get the data from an asset file, which is completely stupid : if an App wants to play a long asset file he must use `startPlayer\(fromDataBuffer: ...\)`.

Feeding Flutter Sound without back pressure is very simple but you can have two problems :

* If your App is too fast feeding the audio channel, it can have problems with the Stream memory used.
* The App does not have any knowledge of when the provided block is really played.

  For example, if it does a "stopPlayer\(\)" it will loose all the buffered data.

This example uses the [FoodEvent](https://github.com/dooboolab/flutter_sound/tree/bb6acacc34205174a8438a13c8c0797f7bfa2143/doc/tau/player.md#food) object to resynchronize the output stream before doing a [stopPlayer\(\)](https://github.com/dooboolab/flutter_sound/tree/bb6acacc34205174a8438a13c8c0797f7bfa2143/doc/tau/player.md##stopplayer).

If you are interested about playing with back pressure, you can look to [this example](/fs-flutter_sound_examples_playback_from_stream_2.html).

The complete example source is there : [livePlaybackWithoutBackPressure](https://github.com/canardoux/flutter_sound/blob/master/flutter_sound/example/lib/livePlaybackWithoutBackPressure/live_playback_without_back_pressure.dart)
