# Data merge fails with absolute paths on macOS

Fix absolute-path failures by changing Adobe InDesign configuration files in the application folder.

On macOS, Data Merge in InDesign can fail to load images or other assets that use absolute file paths, even if both the file and the path are valid. InDesign may show an alert explaining that absolute-path references cannot be used because a configuration setting stops POSIX-style paths from resolving during data merge operations.
