# Media intelligence and Search panel

Use AI-powered media intelligence and the new Search panel in Adobe Premiere to find the shot you need quickly.

Yes. Visual search can return matching ranges inside a clip rather than only the whole clip, and one source clip may contribute several visual matches. Double-click a result to open it in the Source Monitor, where In and Out points identify the matched section; alternatively, drag the result into a sequence to inspect that range.

No. A search such as "woman with brown hair wearing yellow shirt" can match visual content, but visual search does not name or recognize individual people.

When dialogue has a transcript, matching lines appear under Transcript results. Audio files can also be found through embedded metadata. At present, media intelligence identifies visuals only.

No. Visual search is not optical character recognition. A search such as "stop" might appear to find text on a stop sign, but the match comes from the model understanding the stop sign concept rather than reading the letters on the sign.

Visual search does not depend on tags attached to footage. Analysis places footage into a multi-dimensional semantic representation, and the search text is mapped into that same semantic space. Results are the nearest matches to the text you entered.

Because of that semantic matching, you are not limited to memorizing fixed tags for shots. Detailed descriptions, synonym trials, and wording variations are useful; multi-word phrases commonly outperform very short phrases or single words.

Semantic visual search behaves differently from traditional search in web search engines. Use longer phrases, add descriptive detail, and test alternate wording.

No. For now, the Search panel uses exact text matching for transcripts and metadata, while visuals use natural language descriptions.

No. Premiere analyzes and searches footage with fixed AI models. Later Premiere releases may update or improve those models, but Adobe does not view or train on your footage or search terms. Analysis and search run locally on your computer without internet access.

The .prin file stores the visual-analysis index for every video clip imported into the project. When you search for visuals in the Search panel, Premiere consults that index. If the index is absent, Premiere rebuilds it automatically. When sharing a project, include the .prin file when possible.

During footage analysis, a Media Intelligence item appears in the Progress panel in the upper-right area of the main window. You can keep working while analysis runs; Premiere gives playback priority over background analysis.

Analysis duration varies with computer speed and footage complexity. Premiere uses dedicated machine learning hardware in the system, or the GPU. On most current video-editing systems, hours of footage can be processed within minutes.

Yes. The Analyze all imported media to visually search your projects preference in Media Analysis & Transcription controls analysis in Premiere. With the preference on, all imported clips containing video are analyzed. With it off, new analysis does not start, although clips that already have cached analysis can still use that cache for visual search. To analyze only selected clips, use this sequence:

Turn on the analysis preference, then import the clips that should be analyzed.

Turn off the analysis preference, then import the remaining media.

Afterward, searches in the Search panel return visual results only from clips that were analyzed.

No, but Adobe is exploring this addition.

Yes. Before importing media, open the Media Analysis & Transcription preferences and set Cache analysis results for re-use to Next to the media as a sidecar file. After analysis, Premiere writes a .prmi file beside each video media file. When someone else imports those files, Premiere detects the sidecars and does not analyze them again.

No. Analysis results and the project index are specific to Adobe media intelligence models, so other applications cannot use them.

No. Adobe does not use searches or media to train Adobe AI models. Media intelligence was designed to run entirely on your computer, keeping that activity local.

No. Media intelligence is assistive rather than generative, and it does not create pixels. The feature continues Adobe's long history of automating repetitive production tasks.
