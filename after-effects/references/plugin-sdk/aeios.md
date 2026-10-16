# AEIOs

AEIOs are AEGPs that import and/or export media files. For a file of a specific type, an AEIO performs the work After Effects, or the plug-ins that ship with After Effects, would otherwise handle. On import, AEIOs can open existing files, maintain file-specific interpretation settings, and supply audio plus frames to After Effects in `AEGP_SoundWorld` and `PF_EffectWorld` form. AEIOs can also create files interactively by asking users for their desired settings instead of reading those settings from a file. On export, AEIOs can create and manage output settings for render queue items, create output files, and write frames supplied by After Effects as `PF_EffectWorlds` into those files.

AEIOs operate on uncompressed video whose pixels are in ARGB order from low-byte to high-byte. Pixels may be 8-bit, 16-bit, or 32-bit float per channel. Any supported codec compression or decompression is the AEIO's responsibility.
