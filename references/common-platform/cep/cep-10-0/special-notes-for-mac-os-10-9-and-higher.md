# Special notes for macOS 10.9 and higher

Starting with macOS 10.9, Apple added caching for plist files. Changes to plist files do not apply until the cache refreshes, and the timing of that refresh is not predictable. Use either of these methods to force the change to apply:

- Kill the **cfprefsd** process. It restarts automatically, after which the update
  takes effect.
- Restart macOS, or log out the current user and log back in.
- [More Information](http://hints.macworld.com/article.php?story=20130908042828630)
