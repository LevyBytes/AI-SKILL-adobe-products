# Missing user dictionaries

Fix missing-dictionary alerts by relinking user dictionaries or changing path settings in Adobe InDesign.

This problem comes from the new macOS dictionary-file path format introduced in InDesign 20.0. The computer can still contain dictionaries made in older releases, but InDesign may be unable to locate them. Starting with InDesign 20.0, dictionary references use POSIX-style file paths. Older dictionaries from InDesign 19.3 or earlier may still contain HFS-format paths.
