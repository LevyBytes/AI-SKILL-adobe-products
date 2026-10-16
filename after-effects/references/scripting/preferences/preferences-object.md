# Preferences object

app.preferences

### Description

Through the Preferences object you get a convenient handle on After Effects' internal preferences — the same ones surfaced under AE's Preferences menu. Stored in the After Effects preference files, they survive from one application session to the next.

Every preference is located by its section plus its key inside the file, and each key name pairs with one value.

Within the preferences file, brackets and quotation marks wrap each section name, while key names sit in quotation marks underneath the section name. Strings hold all of the values.

Beyond reading preferences that already exist, this object lets you add brand-new ones.

Starting with Version 12/CC, the preferences and settings methods accept a third argument naming the target preferences file, used whenever the Section/Key does not reside in "Adobe After Effects $versionNumber.x Prefs.txt".

Omit that third argument and the default — PREFType.`PREF_Type_MACHINE_SPECIFIC` — applies, so After Effects reads from or writes to the "Adobe After Effects $versionNumber.x Prefs.txt" preferences file.
