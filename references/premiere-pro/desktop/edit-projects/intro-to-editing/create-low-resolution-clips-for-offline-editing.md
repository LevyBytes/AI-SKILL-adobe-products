# Create low-resolution clips for offline editing

Create low-resolution clips for offline editing in Adobe Premiere, then swap in high-resolution clips for online editing.

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
