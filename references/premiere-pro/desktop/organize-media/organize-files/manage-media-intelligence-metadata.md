# Manage media intelligence metadata

Manage Media Intelligence metadata in Adobe Premiere through the Media Analysis & Transcription preferences section.

The Media Analysis & Transcription section of Premiere preferences includes additional Transcription options for managing analysis.

Use Media Analysis & Transcription settings to decide how Premiere analyzes footage for visual search, speech-to-text, and metadata.

Media Analysis & Transcription settings control Premiere analysis for visual search, speech-to-text, and metadata.

Premiere caches analysis results so footage reused across projects or by other users does not always need to be processed again. Select the metadata storage method that best fits the workflow.

- In the Media Cache: Selected by default. Stores analysis results in the Media Cache location configured in Preferences > Media Cache. When a clip is imported into another project, Premiere skips analysis if a cache already exists for that clip. Because the Media Cache is local to each user, other computers cannot reuse that analysis.
- Next to the media as a sidecar file: Stores analysis results as sidecar files beside each analyzed or transcribed clip, using files with the .prmi extension. Media can be shared with those sidecar files on other computers, and Premiere uses the sidecar to avoid reanalyzing the footage. This preference is recommended for Production workflows.
- Do not cache: Saves the analysis results directly in project data or the project index. Importing the same clip into another project or onto another computer requires analysis to run again.
