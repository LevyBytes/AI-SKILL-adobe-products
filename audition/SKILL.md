---
name: audition
description: Use when a task specifically concerns Adobe Audition: Audition audio editing, waveform, multitrack, restoration, recording, effects, or audio export; this is the product subskill routed from adobe-products.
---

# Adobe Audition Reference

Use this subskill for audio editing, waveform and multitrack workflows, effects, restoration, recording, and export.

## Workflow

1. Identify the surface the task touches (desktop/web help, UXP, ExtendScript, REST API, C++ SDK, samples).
2. Use the task router below or `references/INDEX.md` to open the one file that matches.
3. Treat every label, menu path, shortcut, API/method/object name, endpoint, enum value, and number as an exact reference fact.

## Task router

Load only the reference the task needs. Files are grouped by surface.

### Desktop & Web Help

| Topic | Read |
| --- | --- |
| Whats New, Audition Releasenotes, Known Issues, Fixed Issues | references/help-introduction.md |
| Control Surface Support, Viewing Zooming Navigating Audio, Customizing Workspaces, Connecting Audio Hardware | references/help-workspace-and-setup.md |
| Customizing Saving Application Settings, Finding Customizing Shortcuts, Perform Mic Check | references/help-workspace-and-setup-2.md |
| Sound, Digitizing Audio | references/help-digital-audio-fundamentals.md |
| Multichannel Audio Workflow, Creating Opening Files, Importing Files Panel, Extracting Audio Cds ... | references/help-importing-recording-and-playing.md |
| Monitoring Recording Playback Levels, Strip Silence | references/help-importing-recording-and-playing-2.md |
| Essential Sound Panel, Clip Markers For Multitrack In Audition, Match Loudness, Displaying Audio Waveform Editor | references/help-editing-audio-files.md |
| Selecting Audio, Copying Cutting Pasting Deleting Audio, Visually Fading Changing Amplitude, Markers ... | references/help-editing-audio-files-2.md |
| Analyzing Phase Frequency Amplitude, Frequency Band Splitter, Undo Redo History, Converting Sample Types | references/help-editing-audio-files-3.md |
| Creating Podcasts | references/help-creating-podcasts.md |
| Enabling Cep Extensions, Effects Controls, Applying Effects Waveform Editor, Applying Effects Multitrack Editor ... | references/help-applying-effects.md |
| Amplitude Compression Effects (part 1) | references/help-amplitude-compression-effects.md |
| Amplitude Compression Effects (part 2) | references/help-amplitude-compression-effects-2.md |
| Delay Echo Effects, Diagnostics Effects Waveform Editor Only, Filter Equalizer Effects | references/help-effects-reference.md |
| Modulation Effects | references/help-modulation-effects.md |
| Noise Reduction Restoration Effects (part 1) | references/help-noise-reduction-restoration-effects.md |
| Noise Reduction Restoration Effects (part 2) | references/help-noise-reduction-restoration-effects-2.md |
| Reverb Effects | references/help-reverb-effects.md |
| Special Effects, Stereo Imagery Effects | references/help-effects-reference-2.md |
| Time Pitch Manipulation Effects, Generate Tones Effect | references/help-effects-reference-3.md |
| Creating Remix, Multitrack Editor Overview, Basic Multitrack Controls, Multitrack Routing Eq Controls ... | references/help-mixing-multitrack-sessions.md |
| Looping Clips, Clip Volume Matching Fading Mixing, Automating Mixes Envelopes1, Multitrack Clip Stretching | references/help-mixing-multitrack-sessions-2.md |
| Video And Surround Sound, Keyboard Shortcuts | references/help-desktop.md |
| Saving Exporting Files1, Viewing Editing Xmp Metadata | references/help-saving-and-exporting.md |
| Using, User Guide | references/help-desktop-2.md |

## Gotchas

Recurring failure modes and what to do instead live in the sibling [GOTCHA.md](GOTCHA.md).

## References

Start at `references/INDEX.md`; metadata in `references/topics.json`. One subject per file; open only what the router points to.

## Verification

- Validate: `python "$env:DEVROOT\SKILLS\skills\skill-drafting\scripts\validate_skill_package.py" "$env:DEVROOT\SKILLS\skills\adobe-products\audition"`
