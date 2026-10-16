# Automatically manage your Media Cache files

Configure Premiere preferences so cache files can be removed automatically by age and memory use.

In the Preferences dialog box, open Media Cache to configure cache handling. Automated cleanup can be based on age with Automatically delete cache files older than, or on cache size with Automatically delete oldest cache files when cache exceeds.

Select Edit > Preferences (Windows) > Media Cache or Premiere > Settings (macOS) > Media Cache.

Choose the needed settings in the Media Cache Management section.

Use Media Cache Management settings to remove old or unused media cache files and help Premiere perform well.

The Media Cache Management controls can also clear stale or unnecessary cache files as part of performance upkeep.

- Do not delete cache files automatically - This default Media Cache preferences setting leaves cache cleanup disabled. Automatic media cache deletion applies only to .pek, .cfa and .ims files in the Peak and Media Cache files subdirectory folders.
- Automatically delete cache files older than - 90 days is the default. Set a different period if your workflow needs one.
- Automatically delete oldest cache files when cache exceeds - By default, the threshold is 10% of the volume size that stores the media cache.

Note

Age-based or size-based cleanup starts only after Premiere is quit and opened again. During the next launch, Premiere checks whether media cache files match the deletion rules; when they do, deletion begins 10 minutes after launch. From then on, that maintenance repeats once per week.
