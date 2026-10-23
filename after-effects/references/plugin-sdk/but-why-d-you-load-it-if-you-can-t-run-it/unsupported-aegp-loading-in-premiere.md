# Unsupported Features - But... Why'd You LOAD It If You Can't RUN It?!

Premiere Pro tries to load AEGP plug-ins. To detect this and avoid problematic behavior, the command hook function can access a suite supplied only by After Effects; `AEGP_CanvasSuite` is a good candidate.

If that suite is missing, return an error. Premiere Pro will put the plug-in on its "don't load these" list.
