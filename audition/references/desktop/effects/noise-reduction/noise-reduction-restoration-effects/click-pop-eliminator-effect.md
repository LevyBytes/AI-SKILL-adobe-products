# Click/Pop Eliminator detection

Click/Pop Eliminator, found under Effects > Noise Reduction/Restoration, removes microphone pops, clicks, light hiss, and crackles. These defects often appear in older vinyl transfers and field recordings. Its dialog remains open, letting you change the selection and repair multiple clicks without relaunching the effect.

Click and pop detection relies on detection and correction settings. The detection and rejection ranges appear as a graph.

Click/Pop Eliminator removes clicks, pops, and other short transient noise from audio recordings.

Click/Pop Eliminator can clean clicks, pops, and other brief transient noises from recorded audio.

Detection graph

Displays the threshold level applied at each amplitude, with amplitude on the horizontal ruler (x-axis) and threshold level on the vertical ruler (y-axis). For louder audio, Adobe Audition uses the right side of the curve, roughly above -20 dB; for softer audio, it uses the left side. Colors distinguish detection from rejection.

Scan for All Levels

Examines the selected area for clicks using Sensitivity and Discrimination, then derives Threshold, Detect, and Reject values. It selects five audio regions, moving from the quietest region to the loudest.

Sensitivity

Sets the click-detection level. A lower value, such as 10, finds many subtle clicks; a value of 20 catches fewer, louder clicks. Levels found with Scan for All Levels are always higher than those produced by this option.

Discrimination

Controls how many detected clicks are repaired. Higher values repair very few clicks and preserve more of the original audio. Lower values, such as 20 or 40, suit material with a moderate click count. Extremely low values, such as 2 or 4, target constant clicking.

Scan for Threshold Levels

Fills in the Maximum, Average, and Minimum Threshold levels automatically.

- Maximum, Average, Minimum: define separate detection and rejection thresholds for the audio maximum, average, and minimum amplitudes. For audio whose maximum RMS amplitude is -10 dB, Maximum Threshold should be -10 dB. When minimum RMS amplitude is -55 dB, Minimum Threshold should be -55.
- Configure threshold levels before changing the related Detect and Reject values. Set Maximum Threshold and Minimum Threshold first, because they usually need little further adjustment once placed. Put Average Threshold at roughly three quarters of the distance from Minimum Threshold to Maximum Threshold. For example, with Maximum Threshold at 30 and Minimum Threshold at 10, use 25 for Average Threshold.
- After previewing a short repaired section, refine the controls as needed. If a quiet passage still contains many clicks, reduce Minimum Threshold slightly. If loud material still clicks, lower Average Threshold or Maximum Threshold. Louder audio usually needs less correction because the program material masks many clicks, while quiet audio exposes clicks and therefore tends to need lower detection and rejection thresholds.

Second Level Verification (Reject Clicks)

Filters out some possible clicks found by the click-detection algorithm. In material such as trumpets, saxophones, female vocals, and snare drum hits, normal peaks can be mistaken for clicks. Correcting those peaks makes the audio sound muffled, so Second Level Verification rejects them and repairs only real clicks.

Detect

Sets sensitivity for clicks and pops. Values can be 1 to 150, though 6 to 60 is the recommended range. Lower values catch more clicks.

Begin with thresholds of 35 for high-amplitude material above -15 dB, 25 for average amplitudes, and 10 for low-amplitude material below -50 dB. These values find the largest number of clicks and typically catch all louder ones. If constant background crackle remains in the source, reduce Min Threshold or raise the assigned dB level. The level can go down to 6, but values below that may make the filter remove non-click audio.

Finding more clicks means performing more repairs, which raises the chance of distortion. When this kind of distortion becomes excessive, the audio can turn flat and lifeless. In that situation, use a fairly low detection threshold and enable Second Level Verification so the detected clicks are analyzed again and percussive transients that are not clicks are ignored.

Reject

Sets how many possible clicks, identified with Detection Threshold, are rejected when Second Level Verification is enabled. Values run from 1 to 100, and 30 is a useful starting point. Lower values allow more click repairs; higher values can block repairs because the events may not be actual clicks.

The goal is to reject as many detections as possible while still removing every audible click. If clicks in a trumpet-like sound remain, lower the value so fewer candidates are rejected. If a sound becomes distorted, raise the setting to minimize repairs. Fewer repairs are preferable when they still produce good results.

Related references:

- [Click/Pop Eliminator repair controls](click-pop-repair-controls.md)
