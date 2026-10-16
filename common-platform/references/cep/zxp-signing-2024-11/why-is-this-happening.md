# Why is this happening?

When CEP loads a plugin inside the host application, signature checking is handled through `ZXPSignLib`. If the package was installed through [UPIA](https://helpx.adobe.com/in/creative-cloud/help/working-from-the-command-line.html) or through a UPIA-based installer such as "ZXPInstaller", that verification can fail and the plugin is blocked from loading.

During UPIA installation, any symbolic links (symlinks) inside the plugin package are expanded as ordinary text files that store the path to the original file, rather than the original file's actual contents.

For signature verification, ZXPSignLib replaces symlinks in the extension directory with the files those links target. Because plugin installation occurs in system space, ZXPSignLib needs administrator privileges for that replacement. Running the host application in administrator mode lets the symlinks be replaced with the original files, which clears the issue. After that replacement has happened, signature verification passes and the extension can load even when the application is later started by a non-administrative user.

With ExManCmd-based installs, ZXPSignLib signature verification also ran during installation. Since ExManCmd used elevated permissions, ZXPSignLib could reproduce the symlinks correctly at install time, so the load-time failure did not occur.
