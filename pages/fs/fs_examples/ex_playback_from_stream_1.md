---
title:  "Play Stream without flow control"
summary: "Play from a dart stream, without flow control."
permalink: fs-ex_playback_from_stream_1.html
---
The example source [is there](https://github.com/canardoux/flutter_sound/blob/master/example/lib/livePlaybackWithoutBackPressure/live_playback_without_back_pressure.dart). You can have a live run of the examples [here](/tau/fs/live/index.html).

A very simple example showing how to play Live Data without back pressure. It feeds a live stream, without waiting that the Futures are completed for each block. This is simpler than playing buffers synchronously because the App does not need to await that the playback for each block is completed playing another one.

This example get the data from an asset file, which is completely stupid : if an App wants to play a long asset file he must use [startPlayer\(\)](https://github.com/dooboolab/flutter_sound/tree/bb6acacc34205174a8438a13c8c0797f7bfa2143/doc/tau/player.md#startplayer).

Feeding Flutter Sound without back pressure is very simple but you can have two problems :

* If your App is too fast feeding the audio channel, it can have problems with the Stream memory used.
* The App does not have any knowledge of when the provided block is really played.

  For example, if it does a "stopPlayer\(\)" it will loose all the buffered data.

{% include image.html file="/fs/ExampleScreenShots/toto.png" %}
