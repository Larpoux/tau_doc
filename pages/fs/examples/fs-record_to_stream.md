---
title:  "Examples"
description: "RecordToStream"
summary: "RecordToStream"
permalink: fs-flutter_sound_examples_record_to_stream.html
sidebar: fs_sidebar
tags: [example,demo]
keywords: Flutter, Flutter Sound, examples, demo
---
# Examples


## RecordToStream

{% include image.html file="examples/record_to_stream.png" %}

This is an example showing how to record to a Dart Stream. It writes all the recorded data from a Stream to a File, which is completely stupid: if an App wants to record something to a File, it must not use Streams.

The real interest of recording to a Stream is for example to feed a Speech-to-Text engine, or for processing the Live data in Dart in real time.

This example does not run on Web. If you want record to streams on web, you can look to the [Media Recorder example](/fs-flutter_sound_examples_mediaRecorder.html)

The complete example source is there : [RecordToStream](https://github.com/canardoux/flutter_sound/blob/master/flutter_sound/example/lib/recordToStream/record_to_stream_example.dart).
