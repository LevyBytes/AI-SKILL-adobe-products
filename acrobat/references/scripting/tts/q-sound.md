# qSound

Adds the named sound to the queue for talk to render. It takes a single argument, cSound, drawn from a set of recognized sound cue names. Each name corresponds straight to a sound file kept in the SoundCues folder, should that folder be present.

```javascript
tts.qSound("DocPrint");         // Plays DocPrint.wav
```

You will find the SoundCues folder at the viewer’s program level — for instance, C:Program FilesAdobeAcrobat 9.0SoundCues.

Note

Windows only—the only files qSound accepts are 22 KHz, 16-bit PCM .wav files. They ought to run at least 1 second so MS SAPI does not hit a queue delay snag. A sound shorter than 1 second should be edited to tack some silence onto its end.

Parameters

cSound

Which sound cue name to use.
