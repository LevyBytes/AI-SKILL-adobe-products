# Tips & Tricks - Global Performance Cache Consideratons

Under the revamped CS6 caching, a change to how your effect renders may require clearing already-cached frames so that frames rendered and saved before the change don't get reused. Here's how to do that by hand during development:

1. In Preferences > Media & Disk Cache, disable the Disk Cache
2. Click "Empty Disk Cache" just to be sure (disabling the Disk Cache in step 1 only disables the writing of disk cache, not necessarily the usage)
3. Relaunch

Run into a glitch and odds are it's a real bug in your effect — mishandled rectangles in SmartFX, say.

Then again, after you squash a rendering bug and push out an update, you can't count on every user emptying their disk caches. One of them might be holding a cached copy of the buggy frame that has to be invalidated. The fix? Bump your plug-in's effect version. Since that value (along with the AE build number) feeds the cache key, raising it means any cached frames containing your plug-in's content stop matching.
