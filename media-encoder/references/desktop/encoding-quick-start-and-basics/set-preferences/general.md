# General

Use General preferences to control Media Encoder queue behavior, output options, and video rendering.

These General settings cover queue operation, output handling, and how video rendering runs in Media Encoder.

Start queue automatically when idle for

After an item enters the queue, encoding starts by itself once the chosen idle interval has passed. Any interaction with the application restarts the countdown timer. Clear this option to turn off automatic startup. The setting is off by default.

Show Queue Elapsed Encoding Time

Displays the time that has passed since encoding began.

Preview while encoding

Displays video frames in the Encoding Panel while they are encoded.

Play chime when finished encoding

Plays a chime after encoding completes.

Remove completed files from queue on exit

On application quit, clears encoded items from the encoding queue.

Enable Parallel Encoding

Parallel encoding can reduce processing time by encoding every output from one source simultaneously. If an output format does not support parallel encoding, Media Encoder renders outputs one at a time (aka serial encoding).

Stop current item if decode errors are detected

With some MXF sources, detected decode errors cause duplicated frames to be inserted. Enable this option to halt encoding on decode errors instead of adding duplicated frames. It is enabled by default.

Import image sequences from watch folders

When this is on, watch folders treat sequentially named image files as a single source. Use the timer to set how long AME waits before importing the full sequence.

Import sequences natively

Lets systems without Premiere installed import Premiere sequences.

Don’t encode outputs when missing items are detected

For certain sources and outputs, Media Encoder warns when it finds missing items such as offline media or missing fonts. Turn this setting on to prevent outputs with missing items from being encoded.

Append preset name to file name

Adds the encoding preset name to the output file name automatically.

Increment output file name if file with same name exists

By default, when an output file would use the same name as an existing file in the same folder, Media Encoder increments the new output's name. For example, if you encode a video clip and create video.avi, then encode the same file again without deleting video.avi, Media Encoder names the next file video_1.avi.

If the Increment output file name check box is disabled, choose file names carefully so they do not accidentally overwrite each other.

Specify output file destination

Media Encoder normally stores exported files in the same folder as the source video clip. To send encoded media clips somewhere else, browse to the target folder on your system.
