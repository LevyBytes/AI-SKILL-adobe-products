# Settings object

app.settings

### Description

The Settings object hands third-party scripts a simple way to keep track of their own settings. They sit inside the main After Effects preferences file and persist from one application session to the next.

A section plus a key inside the file pinpoint each setting, and every key name is tied to one value.

Inside the settings file, brackets and quotation marks surround each section name, with key names quoted on the lines beneath the section name. Every value is a string.

Alongside reaching existing settings, this object also lets you create fresh ones.

Starting with Version 12/CC, the preferences and settings methods accept a third argument that names the target preferences file whenever the Section/Key is missing from the main preferences file. See Preferences object for more info.

Tip

- AE doesn't carry these values across versions; every fresh install lays down new settings files, so the prefs start over.
- Behind the scenes, "Settings\_" is prepended to the section name of every stored setting.
- To read or write internal AE preferences instead, see Preferences object
