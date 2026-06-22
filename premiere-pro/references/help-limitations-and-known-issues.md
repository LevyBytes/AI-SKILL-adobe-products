# Known And Fixed Issues, Iphone Hdr Clips Are Unsupported, Unable To Send Media From Firefly To Premiere, Cannot Open 25 6 Projects In 25 X ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Known and fixed issues in Adobe Premiere; iPhone HDR clips are unsupported for Generative Extend; Unable to send media from Firefly to Premiere; Projects saved in v25.6.0 cannot be opened in other v25.x versions; Software rendering update; Generative Extend known issues; UI errors when using obsolete effects in on macOS Dark Mode.

## Known and fixed issues in Adobe Premiere

### Check the current status of known and fixed issues in Adobe Premiere.

### Feature issues

Object mask data absent after Adobe Media Encoder export

Resolved

| App version | Premiere 26.0 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | March, 9, 2026 |

Summary

During sequence export through Adobe Media Encoder, users could receive a Missing Mask Data warning, and the exported media might omit object mask data.

Next steps

Premiere version 26.0.2 contains the fix.

Premiere installs with English only despite the Creative Cloud language choice

Resolved

| App version | Premiere 26.0 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | February, 13, 2026 |

Summary

The installer could fail to honor the Default install language setting in Creative Cloud desktop, leaving only English-language access available.

Next steps

Premiere version 26.0.1 contains the fix.

Text panel missing and UXP panels blank

Resolved

| App version | Premiere 25.6.1 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | January, 21, 2026 |

Summary

In Premiere, the Text panel and other UXP panels (Export, Import, Progress, etc.) could render blank or remain on a loading screen.

Next steps

Premiere version 26.0 contains the fix.

Timeline drag feedback disappears after GPU UI rendering is turned off

Resolved

| App version | Premiere 25.6.1 |
| --- | --- |
| Impacted device types | Windows |
| Last updated | January, 21, 2026 |

Summary

On Windows systems with GPU-accelerated UI rendering disabled, dragging clips in the timeline could hide the clip outline, snap function, or playhead.

Next steps

Premiere version 26.0 contains the fix.

Write access unavailable for the project directory

Resolved

| App version | Premiere 25.6.1 |
| --- | --- |
| Impacted device types | Windows |
| Last updated | January, 21, 2026 |

Summary

Project saves could trigger Windows permissions errors for some users.

Next steps

Premiere version 26.0 contains the fix.

Default media scaling fails

Resloved

| App version | Premiere 25.6.1 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | January, 21, 2026 |

Summary

Choosing Fit to Frame for Default Media Scaling in Media Preferences failed to scale the media.

Next steps

Premiere version 26.0 contains the fix.

Transmit fails to start automatically when an enabled project opens

Under Review

| App version | Premiere 25.6.1 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | December, 13, 2025 |

Summary

When a project opened with Transmit still enabled, playback could fail to appear automatically on the selected external monitor. Toggling Transmit off and on again from the Project Monitor did not resolve it.

Next steps

For now, choose Preferences > Playback and confirm the selections again.

Another workaround is to open the project while the Color or Effects workspace is already active, or switch to the Color or Effects workspace during the same session, which restores Transmit. If those workspaces are not active, opening the Lumetri Color panel also restores the external output.

Export Frame stills omit captions

Under Review

| App version | Premiere 25.6.1 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | December, 9, 2025 |

Summary

Export Frame produces the selected frame, but captions are omitted even though they appear in the Program Monitor and Sequence.

Next steps

As a workaround, choose Upgrade Caption to Graphic from the Graphics and Titles menu, convert the caption needed in the still into a graphic element, and export the frame again.

Firefly-to-Premiere transfer fails

Under Review

| App version | Premiere 25.6 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | November, 18, 2025 |

Summary

Media transfer from Firefly on the web to Premiere on the desktop can fail even when both the Creative Cloud desktop app and the latest Premiere release are installed correctly. In that failure state, the handoff page downloads an installer instead of opening the Creative Cloud desktop app to import the asset there.

Next steps

Try the workaround

Premiere release 25.6 crashes on the masking upgrade dialog

Resloved

| App version | Premiere 25.6 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | November, 13, 2025 |

Summary

An incorrect dialog appeared to enable new masking features.

Next steps

Premiere version 25.6.1 contains the fix.

Premiere Production incorrectly reports duplicate project IDs

Under Review

| App version | Premiere 25.6 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | January, 13, 2026 |

Summary

Premiere can report duplicate IDs inside a Production even when no duplicate IDs actually exist.

Next steps

As a temporary workaround, return to an earlier Premiere release, such as version 25.3.

Premiere release 25.5 and earlier cannot upload to Behance

Resolved

| App version | Premiere 25.5 and earlier |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | November, 06, 2025 |

Summary

An Identity Management Systems security API update from Adobe blocked Behance uploads from Premiere versions 25.5 and earlier.

Next steps

Premiere versions 25.6 and 26.0 contain the fix.

Render and Replace overwrites files instead of appending new values

Under Review

| App version | Premiere 25.4 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | July, 3, 2025 |

Summary

When Render & Replace is used on clips that have video effects, the operation can fail. The result may include missing assets, frame replacement errors, and an internal Premiere assertion failure tied to ProRes decompression.

Next steps

No workaround is available at this time; the team is working on a correction. Future status notes will carry updates.

Export-mode X sign-in crashes CEP

Resolved

| App version | Premiere 25.4 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | August, 14, 2025 |

Summary

Trying to sign in to X (formerly Twitter) directly from Export mode could crash the CEP panel.

Next steps

This issue is fixed.

Compressed long-duration media imports more slowly

Under Review

| App version | Premiere 25.3 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | August, 14, 2025 |

Summary

In 25.3, long-duration compressed media can import more slowly than in 25.2.3, independent of where the files are stored.

Next steps

No workaround is available at this time; the team is working on a correction. Future status notes will carry updates.

Multiple open projects make Auto Save use the wrong location

Under Review

| App version | Premiere 25.2 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | April, 2, 2025 |

Summary

When several projects are open and each uses "Same as Project" for Auto Save, every open project can use the Auto Save destination of the most recently opened project. Instead of storing autosaves in each project's own "Same as Project" path, Premiere writes them to the wrong project directory, which makes recovery files harder to locate.

Next steps

No workaround is available at this time; the team is working on a correction. Future status notes will carry updates.

Generative Extend clip extensions do not retain timecode

Resloved

| App version | Premiere 25.2 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | April, 2, 2025 |

Summary

Extending a clip does not preserve its timecode. Extended clips always begin from zero, while the original clip remains unchanged.

Next steps

Premiere version 25.4 contains the fix.

Add Marker shortcut opens Edit Marker

Resloved

| App version | Premiere 25.2 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | April, 21, 2025 |

Summary

For some custom keyboard presets, the Add Marker command behaves like a double click and incorrectly opens the Edit Marker dialog.

Next steps

Premiere version 25.3 contains the fix.

Large-file imports can congest networks during content credentials scanning

Resolved

| App version | Premiere 25.2 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | April, 21, 2025 |

Summary

Large file imports may congest networks because Premiere scans for content credentials.

Next steps

Premiere version 25.2 contains the fix.

Tangent color correction control surfaces encounter Lumetri Effects selection problems

Resloved

| App version | Premiere 25.2 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | April, 21, 2025 |

Summary

Selecting Lumetri Effects can cause problems for Tangent color correction control surfaces.

Next steps

Premiere version 25.2 contains the fix.

Content credentials display incorrectly for extended Sora videos in Premiere

Under review

| App version | Premiere 25.2 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | April, 21, 2025 |

Summary

After videos are imported from Sora and generatively extended in Premiere, their content credentials can display incorrectly.

Next steps

No workaround is available at this time; the team is working on a correction. Future status notes will carry updates.

Multiple clips added from Search panel to a sequence can unlink audio from video

Resolved

| App version | Premiere 25.2 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | April, 24, 2025 |

Summary

When multiple audio-video results from the Search panel are added to a sequence, every clip after the first can have its audio separated from the video.

Next steps

Premiere version 25.2.3 contains the fix.

RED R3D media LUT selection crashes Premiere

Resolved

| App version | Premiere 25.2 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | April, 24, 2025 |

Summary

If RED R3D media was recorded with a camera LUT selected, Premiere does not show that LUT after import. Existing and new projects are affected. Selecting the LUT in the camera through Effects Controls > Source > RED Source Settings > Creative 3D LUT causes Premiere to crash.

Next steps

Premiere version 25.2.3 contains the fix.

Wide Gamut presets in the Lumetri Color panel break color pickers

Resolved

| App version | Premiere 25.2 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | April, 24, 2025 |

Summary

In the Lumetri Color panel, color pickers can behave incorrectly after the Color setup in the Sequence group of the Settings tab is changed to any Wide Gamut preset.

Next steps

Premiere version 25.2.3 contains the fix.

Minimum video track height makes edit points hard to see

Resolved

| App version | Premiere 25.1 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | April, 24, 2025 |

Summary

Edit points can become hard to see when the video track height is reduced to its minimum. The problem may stand out more when a Label Color Preset other than Default is selected.

Next steps

Premiere version 25.2 contains the fix.

Import Files dialog box stalls during Windows import

Resolved

| App version | Premiere 25.0 |
| --- | --- |
| Impacted device types | Windows |
| Last updated | October, 14, 2024 |

Summary

On Windows, the Import Files dialog box may remain unfinished in either of these cases:

One of the Learn, Libraries, or Frame.io panels is enabled, or a panel listed under Windows > Extensions is enabled.

The import uses an AAF, Final Cut Pro XML, or EDL file.

Next steps

Premiere version 25.1 contains the fix.

Vimeo sign-in from Export mode or Adobe Media Encoder shows a crash dialog

Resolved

| App version | Premiere 25.0 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | Octobe, 14, 2024 |

Summary

The crash comes from a background process and can be ignored safely. Select the Log In tab and continue signing in to Vimeo normally. The crash prevents creation of a new Vimeo account from inside Premiere. To make an account, create it on the Vimeo website in a browser.

Next steps

Premiere version 25.2 contains the fix.

## iPhone HDR clips are unsupported for Generative Extend

### Work with iPhone HDR clips while using Generative Extend in Adobe Premiere.

Convert iPhone HDR clips to a supported format with these steps:

Create a sequence in the Rec. 709 color space, or switch the current sequence to it. Select Sequence Menu > Sequence Settings > Color Management > Color Setup. Then choose Direct Rec 709 (SDR).

Built-in tone mapping then converts HDR content on the timeline from HDR to SDR automatically.

After tone mapping is applied, choose Render and Replace from the clip's timeline context menu, or use the option under the Clip menu.

## Unable to send media from Firefly to Premiere

Resolve cases where media sent from Firefly on the web does not open in Adobe Premiere.

Transfers from Firefly on the web to Premiere on the desktop can sometimes fail, even with both the Creative Cloud desktop app and the latest Premiere version installed correctly. When this happens, the handoff page downloads an installer program instead of opening the Creative Cloud desktop app so the asset can be imported into Premiere.

### Browser blocking local network access

In the browser, find the pop-up that asks whether the Adobe website may connect to devices on the local network.

Choose Allow so Firefly on the web can connect to the Creative Cloud desktop app for asset transfer.

If Block was selected earlier, open Site settings in the browser for the Adobe website.

Locate the permission for local network access or device access, then set it back to Allow.

Reload the browser page so the connection starts again, then try sending the media once more.

### DNS rebind protection interrupts the Firefly transfer

Open the internet router settings and find DNS rebind protection or a comparable security option.

Add this domain to the router allow list, following the device manual:

detect.ffc.adobeoobe.com.

Save the settings and restart the router if needed.

Send the media again from Firefly on the web to Premiere.

On an enterprise or managed network, have the network administrator review Adobe's full allow-list of required domains and confirm that those domains are permitted.

## Projects saved in v25.6.0 cannot be opened in other v25.x versions

Fix situations where projects saved in Adobe Premiere v25.6.0 cannot open in other v25.x versions because of version compatibility changes.

Some users may have trouble opening project files saved in Premiere v25.6.0 when using another v25.x release. This can happen after a newer build changes the project file format, which stops older versions from reading the updated file.

Note

The limitation applies only to projects created in Premiere 25.6.0 that will not open in any other 25.x version. Projects saved in Premiere v26.x (beta) cannot be downgraded.

### Project format updated in v25.6.0

Download the project conversion app for your platform:

- Windows
- macOS

Install and launch the app, then select the Premiere project files to convert. One file or multiple files can be selected at once.

Alert

Several downgrade apps are available online, but Adobe strongly recommends not using them. Non-Adobe apps and scripts are frequently outdated and can cause crashes and data loss. For details, review the full post.

### Team Projects support

When a Team Project made in v25.6.0 will not open in a later version, use this recovery path:

Open a different project.

Choose Windows > Media Browser panel.

In Media Browser, browse to Creative Cloud > Team Projects Versions.

Find the Team Project that needs recovery and select it.

Right-click the Team Project name, then choose one of these commands:

- New Team Project from Version: uses the selected version to make a separate Team Project.
- Open Team Project (Version X, Read-Only): opens that historical state without write access.

After recovery, save the result to a new Team Project, or store it on your computer as a local Premiere project file.

## Software rendering update

### Software rendering options have been removed.

In Premiere (version 25.2 and later), Project Settings > General no longer includes the software renderer choice "Mercury Playback Engine Software Only".

Software rendering can slow performance and render at 8-bit, which may create image quality problems.

Affected products and platforms:

- Premiere - Windows
- Premiere - Macintosh Intel
- Adobe Media Encoder - All platforms

Premiere on Apple silicon computers is unchanged, because this platform never offered software rendering.

Only rendering is affected by this update. Software encoding remains available during export. Hardware encoding is the recommended path for best performance.

On a computer with one GPU type, Project Settings > General > Renderer selects that GPU and disables the menu because there is no second GPU type available. The playback engine displayed there is active for rendering.

On a computer with two GPU types, choose which GPU type, OpenCL or CUDA, handles rendering.

Note

If a project rendered correctly with software rendering in version 25.1 or earlier but fails in later versions, submit a bug report so the problem can be fixed.

## Generative Extend known issues

### Generative Extend in Adobe Premiere: limitations and workarounds

### Speech to Text transcription is not supported

Speech to Text cannot transcribe extended clips, so Text-Based Editing and captioning workflows cannot cover the generated portions.

Workaround: Transcribe clips before applying Generative Extend. Turn on Automatic Transcription when the project begins through Preferences > Media Analysis & Transcription so transcription coverage is complete.

### Media Intelligence indexing excluded

Media Intelligence visual-content searches do not return extended clips.

Workaround: In the project panel, search for the original source clip rather than the extended sequence clip.

### Speed adjustments not supported

Generative Extend cannot process clips with speed changes or time remapping. Premiere shows: "Generative Extend does not support clips with speed changes or time remapping."

Fix: First return the clip to normal speed, create the extension at 100% speed, and then restore the speed adjustment after generation finishes.

### Multicam clips require flattening

Multicam clips cannot be extended in their nested form. Premiere shows: "Generative Extend does not support nested sequences."

Workaround: Convert the multicam clip to the selected angle before extension by right-clicking it and choosing Multicam > Flatten.

### Single-side extension limit

Generative Extend can target the beginning or the end of a clip, but not both sides. Extending both sides displays the warning "Generative Extend can only be applied once."

Workaround: Before creating any extensions, add a blade edit at the center of the clip. Extend the start of the first segment and the finish of the second segment. The edit point stays invisible. To extend the other side after an initial extension, use Render and Replace from the timeline clip's right-click menu or from the Clip Menu.

### Music content unsupported

Clips that contain music can produce incomplete audio with silence and a "Can't complete" label. This applies to music-only clips and to background music inside mixed audio. In the project panel, the extended clip icon shows a question mark. Premiere reports: "Generative Extend can't process your audio. Check that your audio clip doesn't contain music."

Workaround: For clips with some musical content, right-click and choose Unlink to separate audio from video, then extend only the video. For music-only audio, consider Remix for extension after unlinking.

### Multichannel audio is not supported

Audio beyond stereo (2 channels) cannot be extended.

Workaround: Unlink the AV pair before extension and process only the video. Turn off Linked Selection by selecting the sequence header icon or by using the Sequence menu. Another option is to choose Unlink from the right-click menu or Clip Menu.

### Markers not preserved

After Generative Extend runs, markers from the original clip are not retained.

Workaround: Add the markers again manually after the extension is complete.

### Logging metadata not transferred

Extended clips do not receive user-entered logging metadata fields (Shot, Scene, Good Take). Intrinsic metadata (FPS, inpoint, outpoint) is retained.

Workaround: Sort by name in the Project panel so the extended clip appears beside the original, then use the original clip as the reference for metadata fields.

### Timecode reset to zero-based

Extended clips always start from zero-based timecode, regardless of the source clip's timecode. The source clip itself is unchanged.

Workaround: Place the original clip above the extended clip as an overlay when specific timecode moments need to be referenced.

### Modify clip properties unavailable

Through the Modify menu, reached by right-clicking a clip in the project panel or by using the Clip Menu, these property modifications are not available:

- Audio Channels
- Color
- Interpret Footage
- Timecode
- VR Properties

There are no alternatives for these limits.

### Source clip color space not accessible

For extended clips, the Lumetri Color panel cannot inspect or change the source clip color space.

### Project Manager does not collect extensions

Project Manager cannot collect extension segments.

Workaround: Before running Project Manager, use Render and Replace on every extended clip in the sequence. Reach Render and Replace from the timeline clip's right-click menu or from the Clip Menu.

### Exchange formats require preparation

XML, AAF, EDL, OMF, and OTIO are not fully supported as exchange formats.

Workaround: Before exporting any exchange format, use Render and Replace on each extended clip in the sequence. Reach Render and Replace from the timeline clip's right-click menu or from the Clip Menu.

### Edit in Audition unsupported

Extended clips cannot be sent straight to Audition for editing.

Workaround: Before sending material to Audition, run Render and Replace on each extended clip in the sequence. Reach Render and Replace from the timeline clip's right-click menu or from the Clip Menu.

### After Effects composition replacement unsupported

Premiere cannot swap extended clips for After Effects compositions.

Workaround: Before sending material to After Effects, use Render and Replace on each extended clip in the sequence. Reach Render and Replace from the timeline clip's right-click menu or from the Clip Menu.

### Productions environment creates duplicates

In a Productions environment, adding the extension to each project inside the production creates duplicate project items because cross-project media referencing is not supported. Every project that includes the extended segment needs its own matching project item.

### iPhone HDR clips unsupported

Generative Extend does not support HDR content, so iPhone HDR clips cannot be extended.

Workaround: Use a Rec.709 sequence and convert to SDR with Render and Replace. Choose Sequence Menu > Sequence Settings > Color Management > Color Setup, set the sequence color space to Rec.709, and then choose Direct Rec. 709 (SDR). Premiere built-in tone mapping converts HDR timeline content to SDR automatically. Then reach Render and Replace from the timeline clip's right-click menu or from the Clip Menu.

### Generate Again creates new project items

Generate Again creates a separate, different project panel item instead of overwriting the earlier generation.

### Revert to Original unavailable in specific cases

When you right-click the AI-generated label, Revert to Original appears greyed out in these cases:

- Negative speed is applied to the extended clip
- The original clip is missing from the project or was deleted from the Projects panel
- In an AV clip, audio or video fails and the Compound Clip icon in the Projects panel shows missing media

## UI errors when using obsolete effects in on macOS Dark Mode

### Fix white-button display issues from obsolete effects in Dark Mode on macOS in Adobe Premiere.

Adding an obsolete effect while macOS is in Dark Mode can trigger a UI display problem.

- For Audio Track effects, open the Track FX (Effects) Editor UI by double-clicking the effect.
- For Audio Clip effects, open the Clip FX (Effects) Editor UI by selecting the Edit button beneath the effect name in the Effects Control panel.

Some button text may appear white.

Note

- The issue applies to every obsolete effect except the Adaptive Noise Reduction effect.
- Only the effect UI appearance is affected. The effects remain fully functional.

### Issue with Dark Mode

Disable Dark Mode by going to Apple Menu > System Preferences > General > Appearance > Light.
