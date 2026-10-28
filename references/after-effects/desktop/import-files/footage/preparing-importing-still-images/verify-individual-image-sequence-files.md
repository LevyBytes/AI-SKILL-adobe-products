# Verify individual image sequence files

Bringing image sequence files into After Effects skips a file-by-file check of the whole sequence. That speeds the image sequence import along, particularly when the source is network storage. The trade-off: if the sequence holds aliases or shortcuts that fail to resolve—say the drive is offline—After Effects won't flag those files as missing.

Run into unexpected missing frames while importing an image sequence? Then switch on the Verify Individual Files option; it runs slower by comparison but checks every file in the sequence (Select After Effects > Settings > Import > enable the Sequence Footage and Verify Individual Files (slower) options.
