# Separate video fields

Planning to bring interlaced or field-rendered footage—NTSC video, say—into an After Effects project? You'll come out ahead by separating the video fields at import time. After Effects pulls the fields apart by building a full frame out of each one, holding on to all of the image data the original footage carried.

Where you intend to alter the image substantially, separating fields becomes essential. Scaling, rotating, or applying effects to interlaced video tends to drag in unwanted artifacts such as crossed fields. Separating fields lets After Effects turn the two interlaced frames in the video into noninterlaced frames accurately, all while holding onto as much image quality as it can. Noninterlaced frames are what let After Effects apply edits and effects evenly and at top quality.

To make field-separated footage out of a single once-interlaced frame, After Effects splits that frame into two standalone frames. Since each new frame keeps only half the original's information, a few frames can look lower in resolution than their neighbors at Draft quality. Come final render, After Effects rebuilds high-quality interlaced frames for output. Render a movie at Best quality and After Effects fills in between a field's scan lines to wring out maximum image quality.

When the output won't be interlaced, you're better off starting from noninterlaced source footage so there's nothing to separate. That said, if no noninterlaced version of your source footage exists, interlaced footage will do the job.

For interlaced footage, separate fields every time. For noninterlaced footage items, never separate fields.

Pulldown removal is available to you only once the fields have been separated.

Rendering a composition that holds field-separated footage calls for setting the Field Rendering option to match the field order of your video gear. Skip field-rendering the composition, or field-render it with the wrong settings, and the finished movie can come out too soft, jerky, or distorted.

Note

For a fast film-like look on video footage, import it twice and interpret each copy with a different field order. Drop both into one composition and blend them. The misread layer contributes a touch of film-like blur.

For D1 and DV video footage items, After Effects separates fields on its own. Every other kind of video footage you separate by hand in the Interpret Footage dialog box.

Select the footage item in the Project panel.

Select File > Interpret Footage > Main Options.

Choose an option from the Separate Fields menu.

Select Preserve Edges (Best Quality Only) to increase image quality in nonmoving areas when the image is rendered at Best quality. Then, select OK.

Note

Provided the input footage is matched by the field settings under Interpret Footage, and the output device is matched by the field settings under Render Settings, one composition can mix footage items whose field orders differ. Get either of those wrong, though, and while frame order holds up, field order may reverse—the result being jerky, unacceptable images.
