# Special notes for macOS 10.9 and higher

Starting with macOS 10.9, Apple added plist-file caching. Changes to plist files do not take effect until that cache refreshes, and the refresh time is not predictable. Use either of these approaches to force the change to apply.

- Kill **cfprefsd** process. It restarts automatically, after which the update takes effect.
- Restart macOS, or log out the current user and log back in.
- [More Information](http://hints.macworld.com/article.php?story=20130908042828630)
