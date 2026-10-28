# Adobe Audition crashes during video import/edit/playback

Issue: Devices with pre-installed Nahimic drivers can crash Adobe Audition.

Workaround: Use one of these options:

- Remove the Nahimic driver from the system.
- If you prefer to keep Nahimic installed, locate the Nahimic blocklist at C:\ProgramData\AVolute\AVolute.Nahimic\Modules\Scheduled\Configurator\BlackApps.dat, include Adobe Audition.exe in the list, and save.
