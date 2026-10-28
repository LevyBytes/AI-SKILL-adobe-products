# $.getenv()

$.getenv(envname)

### Description

Retrieves the named environment variable's value, or null when it does not exist.

Note

On MacOS, accessible environment variables are limited to:

- System default environment variable
- Custom environment variables created by the $.setenv() method
- Custom environment variables created with launchctl setenv `CUSTOM_VAR` "custom_value"

Environment variables set in .bash_profile, .bashrc, .profile, .zshenv, or .zshrc are ignored.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| envname | String | Name of the environment variable. |

### Returns

String
