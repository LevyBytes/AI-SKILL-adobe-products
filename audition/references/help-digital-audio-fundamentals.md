# Sound, Digitizing Audio

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Understanding sound; Digitizing audio.

## Understanding sound

### Learn core sound concepts, including the way Adobe Audition represents and processes audio for editing and mixing.

Sound begins as air vibration, such as movement from guitar strings, vocal cords, or speaker cones. The vibration compresses nearby air molecules and slightly increases pressure. Those pressurized molecules then push the surrounding molecules, which push the next group, continuing outward. As high-pressure regions travel through the air, lower-pressure regions follow behind them. When these changing pressure waves reach the ear, they move the receptors there, and those vibrations are perceived as sound.

In a waveform display for audio, the image shows those air-pressure waves. The zero line marks resting air pressure. An upward peak represents increased pressure, while a downward trough marks a lower-pressure region.

A sound wave represented as a visual waveform

A. Zero line B. Low-pressure area C. High-pressure area

A sound wave represented as a visual waveform

### Waveform measurements

Waveforms are described with several measurements:

Amplitude

Indicates the pressure difference between a waveform's peak and trough. Loud sounds have high-amplitude waveforms; quiet sounds have low-amplitude waveforms.

Cycle

Names one repeated pattern of pressure movement: zero pressure, then high pressure, then low pressure, and back to zero.

Frequency

Expressed in hertz (Hz), frequency counts how many cycles occur each second. For example, a 1000-Hz waveform completes 1000 cycles per second. Higher frequencies correspond to higher musical pitch.

Phase

Expressed across 360 degrees, phase identifies where a waveform is within its cycle. The start is 0 degrees, high pressure occurs at 90 degrees, the halfway position is 180 degrees, low pressure occurs at 270 degrees, and the end point is 360 degrees.

Wavelength

Measured in units such as inches or centimeters, wavelength is the distance between two locations at the same phase degree. Increasing frequency shortens wavelength.

A single cycle at left; a complete, 20-Hz waveform at right

A. Wavelength B. Degree of phase C. Amplitude D. One second

A single cycle at left; a complete, 20-Hz waveform at right

### How sound waves interact

When sound waves overlap, their pressures combine, so they can increase or reduce one another. Peaks and troughs that line up exactly in phase strengthen one another and create a waveform with greater amplitude than either waveform alone.

When two waveforms have peaks and troughs that are exactly out of phase, they negate one another and leave no waveform.

Most real waves differ in phase by varying amounts, producing a combined waveform more complicated than any single source waveform. For example, a waveform for music, speech, noise, or other audio is built from the waveforms belonging to each sound.

Note

The physical design of one instrument can generate very complex waves. For that reason, a violin and a trumpet sound unlike each other even at an identical pitch.

In-phase waves reinforce each other.

In-phase waves reinforce each other. Out-of-phase waves cancel each other out.

Out-of-phase waves cancel each other out. Two simple waves combine to create a complex wave.

Two simple waves combine to create a complex wave.

## Digitizing audio

### Learn how Adobe Audition digitizes audio, turning analog recordings into high-quality digital files for editing and playback.

Analog audio and digital audio carry and store sound in very different ways.

Analog audio: positive and negative voltage

A microphone changes sound pressure waves into voltage variations in a wire: high pressure becomes positive voltage, while low pressure becomes negative voltage. As those voltage variations move through the microphone wire, tape can store them as magnetic-strength changes, and vinyl records can store them as groove-size changes. A speaker reverses the microphone process by taking voltage signals from an audio recording and vibrating to reproduce the pressure wave.

Digital audio: zeroes and ones

Computers store audio as digital zeroes and ones, unlike analog media such as magnetic tape or vinyl records. Digital storage divides the source waveform into separate snapshots known as samples. This is usually called digitizing or sampling audio, and it is also sometimes called analog-to-digital conversion.

For example, when a microphone records into a computer, analog-to-digital converters turn the analog signal into digital samples that the computer can save and process.

### Understanding sample rate

Sample rate is the count of digital snapshots captured from an audio signal each second. It sets the frequency range available in an audio file. A higher sample rate makes the digital waveform shape more closely match the original analog waveform. Low sample rates reduce the recordable frequency range and may create a recording that represents the original sound poorly.

Two sample rates

A. Low sample rate that distorts the original sound wave. B. High sample rate that perfectly reproduces the original sound wave.

Two sample rates

To reproduce any given frequency, the sample rate needs to be at least double that frequency. CDs, for example, use a sample rate of 44,100 samples per second, allowing reproduction up to 22,050 Hz, slightly beyond the 20,000 Hz upper limit of human hearing.

Here are the most common sample rates for digital audio:

### Understanding bit depth

Bit depth sets dynamic range. During sampling, each sample receives the amplitude value nearest to the original wave's amplitude. Greater bit depth supplies more possible amplitude values, yielding wider dynamic range, a lower noise floor, and better fidelity.

Note

For the best audio quality, Audition processes all audio in 32-bit mode, then converts to the chosen bit depth when files are saved.

Higher bit depths provide greater dynamic range.

Higher bit depths provide greater dynamic range.

### Measuring amplitude in dBFS

Digital audio measures amplitude in decibels below full scale, or dBFS. The highest possible amplitude is 0 dBFS, and every lower amplitude is written as a negative number.

Note

A specific dBFS value is not a direct match for the original sound pressure level measured in acoustic dB.

### Audio file contents and size

An audio file stored on a hard drive, such as a WAV file, contains a small header for sample rate and bit depth, followed by a long sequence of numbers, one number for every sample. These files can grow large. At 44,100 samples per second and 16 bits per sample, for example, mono audio needs 86 KB per second, or about 5 MB per minute. Stereo audio has two channels, so the amount doubles to 10 MB per minute.

### How Adobe Audition digitizes audio

When audio is recorded in Audition, the sound card starts the recording and defines the sample rate and bit depth. Through Line In or Microphone In ports, it receives analog audio and samples it digitally at that specified rate. Audition stores the samples in order until recording stops.

Playback in Adobe Audition uses the opposite path. Audition sends digital samples in sequence to the sound card. The card rebuilds the original waveform, then outputs it as an analog signal through the Line Out ports to the speakers.

In short, digitizing audio begins with an air-pressure wave. A microphone turns that pressure wave into voltage changes. A sound card turns the voltage changes into digital samples. Once analog sound is converted into digital audio, Audition can record, edit, process, and mix it, with possibilities limited only by your imagination.
