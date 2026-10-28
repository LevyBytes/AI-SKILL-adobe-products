# How Adobe Audition digitizes audio

When audio is recorded in Audition, the sound card starts the recording and defines the sample rate and bit depth. Through Line In or Microphone In ports, it receives analog audio and samples it digitally at that specified rate. Audition stores the samples in order until recording stops.

Playback in Adobe Audition uses the opposite path. Audition sends digital samples in sequence to the sound card. The card rebuilds the original waveform, then outputs it as an analog signal through the Line Out ports to the speakers.

In short, digitizing audio begins with an air-pressure wave. A microphone turns that pressure wave into voltage changes. A sound card turns the voltage changes into digital samples. Once analog sound is converted into digital audio, Audition can record, edit, process, and mix it, with possibilities limited only by your imagination.
