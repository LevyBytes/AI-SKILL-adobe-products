# Video/Audio Playback

CEP 5.0 can play video and audio that use these encodings.

| Format | MIME-Type | Misc. |
| --- | --- | --- |
| MP4 | video/mp4 | MPEG 4 files using H.264 video codec with AAC audio codec Ogg video/ogg Ogg files using Theora video codec with Vorbis audio codec |
| mp3 | audio/mpeg |  |

This sample shows video playback from an extension:

```html
<video poster="http://www.html5rocks.com/en/tutorials/video/basics/star.png" controls>
  <source
    src="http://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.mp4"
    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
  />
</video>
```

Because HTML extensions live inside the host application's windowing environment, video playback cannot switch into full-screen mode.
