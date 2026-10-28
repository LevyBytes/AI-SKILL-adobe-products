# Import a file as raw data

Files without header information describing the sample type cannot be opened normally. To provide that information yourself, bring the file in as raw data.

Select File > Import > Raw Data.

Choose the file, then click Open.

Configure these options:

Sample Rate

- Sample Rate: use the file's actual rate when you know it. Audition accepts raw data rates from 1 Hz to 10,000,000 Hz, while playback and recording work only from 6000 Hz through 192,000 Hz.
- Channels: type a value from 1 to 32.
- Encoding: sets the storage scheme used for the file's data. If the encoding is unknown, check with the file supplier or the documentation for the application that produced it.
- Byte Order: sets the byte sequence for numeric data. Little-Endian is common for WAV files, Big-Endian is common for AIFF files, and Default Byte Order uses your system processor's default, which is usually best.
- Start Byte Offset: sets the file data point where importing begins.
