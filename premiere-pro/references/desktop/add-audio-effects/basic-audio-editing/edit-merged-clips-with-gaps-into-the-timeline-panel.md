# Edit merged clips with gaps into the Timeline panel

Merged clips behave differently when edited into the Timeline panel if their component structure contains gaps.

- Another component clip is available: When an In or Out point falls inside an audio or video gap and another component clip exists above or below that gap, Premiere Pro assigns a track for the gap as the merged clip is added to the Timeline panel.
- When no component clip is available: A merged audio/video clip may include gap areas that have no alternate component clip. If an In or Out point is marked in such a gap, adding the merged clip to the Timeline panel triggers this Premiere Pro message: “Invalid edit. No media present in source clip’s marked In/Out range”. The No drop icon appears if you try to drag and drop the merged clip into the timeline.

Note

Video gaps play as black, meaning no visual content. Audio gaps play as silence unless a different audio clip on another track fills the gap.
