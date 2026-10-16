# Special notes for macOS 10.9 and higher

Beginning in macOS 10.9, Apple caches plist files. Edits to plist files are ignored until that cache refreshes, and the timing of that refresh is not predictable. Use either of these methods to force the change to apply:

- Terminate the **cfprefsd** process; it restarts automatically, and the update
  is then picked up.
- Restart macOS, or sign out of the current user and sign back in.
- [More Information](http://hints.macworld.com/article.php?story=20130908042828630)
