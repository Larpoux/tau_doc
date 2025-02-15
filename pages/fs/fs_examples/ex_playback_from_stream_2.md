---
title:  "Play Stream with flow control"
summary: "Play from a dart stream, with flow control."
permalink: fs-ex_playback_from_stream_2.html
---

The example source [is there](https://github.com/canardoux/flutter_sound/blob/master/example/lib/livePlaybackWithBackPressure/live_playback_with_back_pressure.dart). You can have a live run of the examples [here](/tau/fs/live/index.html).

{% include image.html file="examples/live_playback_with_back_pressure.png" %}

A very simple example showing how to play Live Data with back pressure. It feeds a live stream, waiting that the Futures are completed for each block.

This example get the data from an asset file, which is completely stupid : if an App wants to play an asset file he must use "StartPlayerFromBuffer".

If you do not need any back pressure, you can see another simple example : [LivePlaybackWithoutBackPressure.dart](https://github.com/dooboolab/flutter_sound/tree/bb6acacc34205174a8438a13c8c0797f7bfa2143/doc/tau/player.md##liveplaybackwithoutbackpressure). This other example is a little bit simpler because the App does not need to await the playback for each block before playing another one.

{% include image.html file="/fs/ExampleScreenShots/PlaybackWithBackPressure.png" %}