# Video/Audio Playback

CEP 5.0 and later support playback of video and audio encoded in the formats below.

| Format | MIME-Type | Misc. |
| --- | --- | --- |
| MP4 | video/mp4 | MPEG 4 files with H.264 video codec and AAC audio codec Ogg video/ogg Ogg files with Theora video codec and Vorbis audio codec |
| mp3 | audio/mpeg |  |

Example video playback markup for an extension:

```html
<video poster="http://www.html5rocks.com/en/tutorials/video/basics/star.png" controls>
    <source src="http://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
</video>
```

Because HTML extensions are hosted inside the integrating application's windows, video cannot enter full-screen playback mode.
