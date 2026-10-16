# Project file paths

Move a project file to another computer, open it, and After Effects goes hunting for the project's footage files in this order: it looks first in the folder holding the project file; next along the file's original path or folder; and last at the root of the directory the project sits in.

For cross-platform projects, you're best served when the full paths carry identical names on macOS and Windows. When footage and project live on separate volumes, mount the right volume before opening the project, and keep network volume names matching across both systems.

Storing footage in the same folder as the project file — or in a folder nested inside it — works best. A sample hierarchy looks like this:

- /newproject/project_file.aep
- /newproject/source/footage1.psd
- /newproject/source/footage2.avi

Copy that whole new project folder across platforms and After Effects tracks down all the footage correctly.

Note

Reach for the Collect Files feature to pull copies of every file in a project into one folder. You can then carry the folder with the copied project over to the other platform.
