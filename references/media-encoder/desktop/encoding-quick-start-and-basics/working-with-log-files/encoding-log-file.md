# Encoding log file

The encoding log is a plain-text record of every file queued for encoding, whether the job completed or not. Each encoded file's status is appended after earlier entries, placing the newest record last. Entries keep accumulating until you clear them manually. To remove log entries, open the file in a text editor, select every entry, delete the selection, and save the empty file as AMEEncodingLog.txt.

The log file lives at these locations:

- Windows 10 (v22H2 or later) and 11: C:\Users\[user]\Documents\Adobe\Adobe Media Encoder\[product version]\AMEEncodingLog.txt
- Mac OS Monterey (version 12 or later): /Users/[user]/Documents/Adobe/Adobe Media Encoder/[product version]/AMEEncodingLog.txt

To view the log file, choose File > Show Log or press Ctrl + L.

There are two log files:

AMEEncodingLog.txt: for jobs that encoded successfully.

AMEEncodingErrorLog.txt: for jobs that failed, or that the user stopped.
