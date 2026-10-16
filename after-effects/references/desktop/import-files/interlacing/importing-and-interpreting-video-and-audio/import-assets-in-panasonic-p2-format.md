# Import assets in Panasonic P2 format

Slotting into the PCMCIA slot of a Panasonic P2 video camera, a P2 card is a solid-state memory device. The camera writes its digital video and audio data onto the card in a structured, codec-independent format called MXF (Media eXchange Format). To be precise, the Panasonic Op-Atom variant of MXF is what Adobe Premiere and After Effects support, carrying video in AVC-Intra 50, AVC-Intra 100, DV, DVCPRO, DVCPRO50, and DVCPRO HD formats. A clip counts as P2 format when its audio and video sit inside Panasonic Op-Atom MXF files and those files occupy a specific folder structure.

At the top of the P2 folder structure is a CONTENTS folder. Every essence item (a piece of video or audio) lives in its own MXF wrapper file; the video MXF files go in the VIDEO subfolder and the audio MXF files in the AUDIO subfolder. Tracking how essence files relate to their associated metadata are the XML files in the CLIP subfolder.

Note

Proxies that Panasonic P2 camcorders record into P2 card PROXY folders aren't supported by Adobe Premiere or After Effects.

Since the video and audio on a P2 card already exist in digital form—as though the card were a hard disk—importing its media involves no capture step. Reading that data off the card and turning it into a project-usable format sometimes goes by the name ingest.

Before your computer can read P2 cards, you have to install the right driver, downloadable from the Panasonic website. Panasonic supplies the P2 Viewer application as well, which lets you browse and play media held on a P2 card.

Owing to the FAT32 file system that Panasonic P2 cards use, no single file can exceed 4 GB. Record a shot needing more than 4 GB and a P2 camera spins up another file, carrying on with the shot into it seamlessly. The term for this is clip spanning, since the shot spans more than one file or clip. A camera can likewise span a shot across files on different P2 cards: with more than one P2 card loaded, it records the shot until the first P2 card fills, then opens a new file on the next P2 card that has space and keeps recording into it. Even though one shot may end up recorded as a group of several spanned clips, that multiple-file shot is meant to be handled as a single clip or footage item inside a video editing application. For After Effects to import a group of spanned clips together automatically and reassemble them into one footage item, all of them must have been recorded to the same P2 card and not one file—including the matching XML metadata file—can be missing.

Although you can import assets into Adobe Premiere Pro or After Effects straight off a P2 card, copying the card's contents onto a hard disk first is usually the more efficient path.

Select File > Import.

Navigate to the CONTENTS folder.

To import a video essence item and its associated audio essence items, select the MXF files from the VIDEO folder.

To import only the audio essence items, select the MXF files from the AUDIO folder.

To import a group of spanned clips for a shot that was recorded onto the same P2 card, select only one of the MXF files in the group from the VIDEO folder. The group is imported as a single footage item with a duration equal to the total duration of all the spanned clips it includes. If you select more than one of these spanned clips, you import duplicates of the whole group of spanned clips as duplicate footage items in the Project panel.

Spanned clips from a shot that straddles two different cards can't be imported as one footage item. Instead, pick one MXF file belonging to the shot off each card, which creates a separate footage item for the portion of the shot recorded on that card. Say a group of spanned clips for one shot itself straddles two cards—you would then take, off card 1, one clip out of its group, and off card 2, one clip out of that group. The shot's contents land as two footage items in the Project panel.

When each source clip was captured shows up in the Date column of the Project panel. Once spanned clips are imported, that Date value lets you sort out their proper chronological order inside the shot.

Note

Exporting straight to the P2 format isn't something After Effects can do. For rendering and exporting to P2 format, turn to Adobe Media Encoder or Premiere.

### More like this

- Converting movies
- Importing and interpreting footage items
- Importing assets from tapeless formats
- Export video
