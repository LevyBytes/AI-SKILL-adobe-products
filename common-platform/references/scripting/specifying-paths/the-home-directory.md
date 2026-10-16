# The home directory

A leading tilde (~) in a path name means the user's home directory and maps to the platform's HOME environment variable.

UNIX and Mac OS set HOME from the user's login. On Mac OS, the default home directory is /Users/username. On UNIX, it is usually /home/username or /users/username. ExtendScript takes the home directory value directly from the platform.

On Windows, HOME is optional. If HOME is set, its value must be a Windows path name or a path name to a remote server, such as \\myhost\mydir. If HOME is undefined, ExtendScript defaults to the user's home directory, usually C:\Users\username.

Note

Many folders named by platform-specific variables are exposed through static, globally available Folder class properties; for instance, appData refers to the folder used for application data for all users.
