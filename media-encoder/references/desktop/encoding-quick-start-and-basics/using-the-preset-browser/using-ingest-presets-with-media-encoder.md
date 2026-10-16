# Using Ingest Presets with Media Encoder

Adobe Media Encoder can ingest camera media to a local drive, letting editing begin quickly in Premiere. In AME, use the Media Browser to choose the clips for ingest and add In/Out points when needed.

To ingest clips, drag them onto an Ingest preset in the Preset Browser, or drag them straight to the Queue and apply an Ingest preset to the new sources there. In the Ingest Preset Settings dialog, choose the local destination for copied camera files, pick a Transcode format, and, when needed, configure Metadata or rename the assets. After queue processing finishes, import the resulting files into the Premiere project and start editing.

Build an Ingest Preset and configure its options to define how project media import is handled.

Build an Ingest Preset and configure its options to define how project media import is handled. Note

The Media Intelligence feature is available only in the beta release.

For copying files from a camera or networked volume, enable 'Copy files to destination', then choose where the ingested files go by clicking 'Browse For Location' and selecting a destination folder. To confirm that copies match their sources, select Verify and pick one of these methods:

- MD5 Comparison: runs an MD5 validation and confirms that the ingested file matches the source file.
- File Size Comparison: compares the ingested file's size against the original movie clip's size.
- Bit by Bit Comparison: runs a CRC validation and checks whether the source-file checksum matches the ingested file. When the files differ, the checksums do not match and the test fails.

For transcoding during ingest, enable 'Transcode files to destination', then choose where the ingested files go by clicking 'Browse For Location' and selecting a destination folder. Then select a transcoding Format and Preset from installed system presets, or use a custom Encoding preset that you previously created or imported into the Preset Browser.
