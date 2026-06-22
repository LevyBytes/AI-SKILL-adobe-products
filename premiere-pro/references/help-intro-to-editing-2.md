# Creating Clips For Offline Editing, Create Low Resolution Clips For Offline Editing

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Creating clips for offline editing; Create low-resolution clips for offline editing.

## Creating clips for offline editing

### Make lower-quality clip versions for easier editing, then reconnect to the original high-quality files for the final edit.

Online editing uses clips at the quality needed for the finished video program, and it is the default Premiere workflow. It is practical when the host computer has enough speed and storage for the video formats in use. For instance, most current systems can play DV at full resolution, but formats with higher demands, such as HDV or HD footage, may strain the same hardware. In those situations, many videographers choose offline editing.

During offline editing, high-resolution clips are captured first and then copied into lower-resolution versions for the edit. When editing is complete, the low-resolution footage linked to the clips is replaced with the original high-quality footage. The final program can then be finished, rendered, and exported at high resolution. Working with lower-resolution clips lets standard computers handle very large media, including HDV or HD footage, with better performance. It also supports laptop editing, such as work done on location.

A project can stay online the whole time with the high-resolution footage available. Another approach is a two-stage process: make the creative choices while the high-resolution footage is offline, then reconnect it for fine-tuning, grading, and color correction.

For example, an HD offline edit can be completed in Premiere and exported as an EDL for transfer to an editing system with stronger hardware. The final online edit and full-resolution rendering can then be done on that more capable system.

## Create low-resolution clips for offline editing

### Create low-resolution clips for offline editing in Adobe Premiere, then swap in high-resolution clips for online editing.

Online editing works directly with full-quality video and therefore benefits from a powerful computer. Offline editing uses lower-quality copies to keep editing responsive, then relinks to the original high-quality clips for the finished video. Many editors begin offline and complete the project online.

Bring assets into the Project panel at full resolution by capturing or importing them.

In the Project panel, select the New Bin button, then name the bin that will hold the low-resolution clips.

Open Adobe Media Encoder and add every project clip to the Adobe Media Encoder Queue.

In Adobe Media Encoder, choose Settings.

Adjust the format and related settings to a lower-resolution format and setting combination.

Select the filename shown in the Output Name field, then browse to the folder prepared for the low-resolution clips.

Select OK, then select Start Queue.

Adobe Media Encoder creates low-resolution encoded clips and, by default, keeps the original clip filename inside each encoded filename.

Note

When Adobe Media Encoder creates low-resolution clips for offline editing, clips are generated with two audio channels even when the source footage has four or more audio channels. This is an Adobe Media Encoder limitation; choose another tool if the extra audio channels must be retained.

Back in the Premiere Project panel, open the bin made for low-resolution clips. Import those low-resolution clips into that bin.

Edit the project with the low-resolution clips.

### Replace low-resolution clips with high-resolution clips for online editing

Low-resolution asset copies can be swapped for the original high-resolution media before final rendering.

Use Clip > Replace Footage. Locate the original high-resolution clip that shares the selected low-resolution clip's filename, then select it.

Continue editing the project with the low-resolution clips.
