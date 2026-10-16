# File metadata versus clip metadata

Premiere uses two metadata contexts: File metadata and Clip metadata. The difference matters for subclips, repeated instances, and clips that point to one source file.

File metadata is stored in the source files themselves. Because it applies universally, each clip instance that references the same source file shares identical file metadata. Use file metadata for properties describing the source material, such as copyright information, camera settings, or content that does not change based on project usage.

Clip metadata lives only in the Premiere project file. Separate clip instances can carry different clip metadata even if they all reference one source file. This separation supports multiple subclips from a single source, each with its own scene descriptions, log notes, or custom labels based on how that portion of footage is used.

Specific clip metadata fields can be linked to matching XMP file metadata fields. When fields are linked, Premiere synchronizes information between them automatically, so other applications can read clip-specific details through XMP fields. Linking connects project-level organization with metadata sharing across applications.
