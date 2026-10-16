# Special notes for Mac 10.9 and higher

Starting with Mac 10.9, Apple caches plist files. Changes made to plist files do not take effect until that cache refreshes, and the refresh timing is periodic and not predictable. Use one of these methods to make the changes active:

- Kill the **cfprefsd** process. It restarts automatically and picks up
  the plist update.
- Restart your Mac, or log the current user out and back in.
- [More Information](http://hints.macworld.com/article.php?story=20130908042828630)
