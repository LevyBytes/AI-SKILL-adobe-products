# Clips in a Production

Productions use a defined clip-reference approach that controls clip behavior across projects.

- This clip-referencing model differs from the behavior in other project types.
- In the model, clips reside in a media project, while a timeline project holds a sequence assembled from those clips.
- Editing media-project clips into a sequence does not make additional source clips. The timeline project contains only the sequence.
- Even after all 100 clips are cut into the sequence, the timeline project still displays a single item. Sequence clips point back to the original source clips in the media project.
- Moving sequences between projects does not create duplicate clips under this model.
- The model is available only inside a Production.
- In a standalone, non-Production project, every sequence clip must have a matching source clip in that same project.

One way to understand the model is to picture a Production with two projects: a Media Project that stores the clips, plus a timeline project that builds a sequence from them.

A Production can split source clips and sequences into separate projects.

A Production can keep source clips and sequences in different projects.
