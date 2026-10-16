# Special notes for macOS 10.9 and higher

Starting with macOS 10.9, Apple added plist-file caching. Changes to plist files do not apply until the cache refreshes on its periodic schedule, and the exact refresh time is not visible. Use either of these methods to force changes to apply:

- Kill the **cfprefsd** process. It restarts automatically, and then the update
  is applied.
- Restart macOS, or sign out the current user and sign back in.
- [Additional details](http://hints.macworld.com/article.php?story=20130908042828630)
