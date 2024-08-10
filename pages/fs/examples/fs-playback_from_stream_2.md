---
title:  "Examples"
description: "Playback From Stream (2)"
summary: "Playback From Stream (2)"
permalink: fs-flutter_sound_examples_playback_from_stream_2.html
sidebar: fs_sidebar
tags: [example,demo]
keywords: Flutter, Flutter Sound, examples, demo
---
# Examples


## livePlaybackWithBackPressure

{% include image.html file="examples/live_playback_with_back_pressure.png" %}

A very simple example showing how to play Live Data with back pressure. It feeds a live stream, waiting that the Futures are completed for each block.

This example get the data from an asset file, which is completely stupid : if an App wants to play an asset file he must use `startPlayer(fromDataBuffer: ...)`.

If you do not need any back pressure, you can see another simple example : [Live Playback Without Back Pressure](/fs-flutter_sound_examples_playback_from_stream_1.html). This other example is a little bit simpler because the App does not need to await the playback for each block before playing another one.

The complete example source is there : [livePlaybackWithBackPressure](https://github.com/canardoux/flutter_sound/blob/master/flutter_sound/example/lib/livePlaybackWithBackPressure/live_playback_with_back_pressure.dart)
