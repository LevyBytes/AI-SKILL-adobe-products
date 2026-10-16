# AEIOs — AEIO For Import, Or MediaCore Importer?

After Effects supports MediaCore importer plug-ins. MediaCore is a shared-library set that originated in Premiere Pro, so the Premiere Pro SDK documents the MediaCore APIs.

Only MediaCore importer plug-ins participate in the importer priority system. The highest-priority importer gets the first chance to import a file; if that file is not supported, the next-highest priority importer gets a chance, continuing in order. MediaCore importers cannot hand file import off to an AEIO. Therefore, if you need to take over handling for a file type where After Effects already supplies a plug-in, build a MediaCore importer plug-in.

If those constraints do not already answer the AEIO versus MediaCore importer question, a MediaCore importer is usually the better choice because it works across video and audio applications such as Premiere Pro, Media Encoder, Prelude, SpeedGrade, and Audition.
