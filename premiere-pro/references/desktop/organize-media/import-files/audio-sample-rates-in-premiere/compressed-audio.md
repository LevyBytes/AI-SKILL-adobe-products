# Compressed audio

Premiere conforms every compressed audio format (MP3, WMA, MPEG, compressed MOV files) using each file's original sample rate. When conformed audio is placed in a sequence that uses another sample rate, playback uses the sequence rate and does not trigger another conforming pass.

Note

To prevent conforming delays, convert files with audio editing or transcoding software before import, using uncompressed formats at natively supported sample rates.

### Related files

When audio is imported, Premiere builds PEK files for waveform display. They are stored under Media Cache Files, configured in Preferences > Media, while conformed audio uses separate files.
