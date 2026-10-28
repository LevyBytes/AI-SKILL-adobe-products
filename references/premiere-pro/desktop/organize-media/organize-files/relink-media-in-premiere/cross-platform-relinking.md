# Cross-platform relinking

Relinking can work across operating systems, so projects may move between macOS and Windows while keeping media links intact when the folder structure stays consistent. Premiere compares the current project path with the last known media path to identify a shared root folder, then searches inside that structure for the media.

Note

On Windows network storage, map a drive letter to the media location instead of using Universal Naming Convention (UNC) paths. For collaboration, including Productions workflows, each Windows computer should map the media location with the same drive letter.
