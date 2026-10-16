# Detect edit points using Scene Edit Detection

Use Scene Edit Detection in Adobe Premiere to find original cut points in footage with less manual searching.

Scene Edit Detection finds cuts automatically inside a single video file, making it easier to split that file into individual shots for editing. It is especially helpful with a long master clip or compiled footage when each shot needs to be isolated for trimming, effects work, or color correction.

Add your media to Premiere, then place it in the timeline.

From the main menu, choose Clip > Scene Edit Detection, or open that command from the sequence context menu in the Timeline panel.

When the Scene Edit Detection dialog box appears, select one or more of these options:

- Apply a cut at each detected cut point: Premiere inserts an edit point at every scene change it finds.
- Create bin of subclips from each detected cut point: each detected section becomes its own subclip inside a new bin.
- Create clip marker at each detected cut point: places markers at detected changes so you can review them manually.

Select Analyze to run detection and apply the selected actions.

Premiere also applies cuts to linked audio automatically. To avoid that result, separate audio from video before running scene edit detection. Another option is to select the audio clips after the cuts are created, right-click, and select Merge to combine the audio clips.
