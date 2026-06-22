# Files Conformed Each Time Project Opens, Creative Cloud Synced Files End Of Life For Premiere, Networks And Removable Media With Digital Video, Common Issues In Premiere On Apple Silicon Macs

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Files conformed each time project opens; Creative Cloud Synced files End of life for Premiere; Networks and removable media with Digital Video; Common issues in Premiere on Apple silicon Macs.

## Files conformed each time project opens

### Use this fix when project media conforms each time a project opens in Adobe Premiere.

Media conforming can take a long time. Wait until the conforming process finishes before editing so playback works correctly. Editing while conforming is incomplete can stop audio from playing.

Conforming happens only after media is first imported, or when the media changes outside Adobe Premiere.

### Media cache files are located in the proper location

Adobe Premiere conforms files again when it detects additional changes in the media files. Confirm that media cache files are stored in the proper location.

- In Edit > Preferences > Media Cache, verify that Media Cache Database is always set to a local drive that is not removable.
- Another available option is Save .cfa and .pek media cache files next to originals media files when possible. With this option, Media Cache Files can live on a network drive or removable drive, reducing the need to conform the media again.

## Creative Cloud Synced files End of life for Premiere

### Creative Cloud Synced files are ending for business plans as Adobe updates Creative Cloud storage, including Creative Cloud for Teams and Creative Cloud for Enterprise.

On December 11, 2023, entitlement to Creative Cloud Synced files ended for new users and organizations. For personal accounts that existed before December 11, 2023, Creative Cloud Synced files are discontinued starting February 1, 2024. For business accounts created before December 11, 2023, Creative Cloud Synced files are discontinued starting October 1, 2024.

- Discontinuation of Creative Cloud Synced files
- Discontinuation of Creative Cloud Synced files for business plans

Shift those workflows off Creative Cloud Synced files promptly.

Starting in Premiere version 24.1 and later (December 2023), access is checked through your Adobe ID. Entitled users see the UI and can use the functions. Without access, the UI and related functionality are no longer available.

Alert

These functions stop working in all previous versions of Premiere for users without access, even if the UI still appears in the app.

### Autosave Backup to Creative Cloud

- Preferences > Autosave > Save Backup project to Creative Cloud.
- Non-entitled users can no longer use this function.

Workaround: Set the autosave location to any disk folder, including a folder managed by a third-party syncing service.

### Ingest settings

- File > Project Settings > Ingest Settings
- Copy
- Transcode
- Create Proxies
- Copy and Create Proxies
- For non-entitled users, Creative Cloud is no longer available as a save destination in any ingest setting.
- Non-entitled users are prompted to change existing Ingest settings when destination settings point to the Creative Cloud folder.
- When an ingest preset references Creative Cloud files, Media Encoder shows a warning to change the destination setting.

Workaround: Set the ingest setting location to any folder on disk, including a folder managed by a third-party syncing service.

### Importing and Exporting

Import Mode, Export Mode, Media Browser, and the Locate File dialog box no longer show quick access shortcuts for Creative Cloud.

If you still have access, browse directly to the folder on disk as a workaround. This folder will no longer sync through Creative Cloud. Relocate these files to another disk location as soon as possible.

- macOS: ~/Creative Cloud Files
- Windows: X:/Users/<USERNAME>/ Creative Cloud Files

### Creative Cloud Files folder name change

When Creative Cloud Synced files are discontinued for a user, the Creative Cloud Files folder on that device is renamed.

### Team Projects

- In Ingest settings, Creative Cloud files is no longer offered as a destination. Previously, when proxies were enabled in ingest settings for Team Projects, Creative Cloud files was the default location. Documents is now the default.
- When existing projects open, non-entitled users are prompted to change Ingest settings that use the Creative Cloud files directory as the destination.
- Move proxies stored in Creative Cloud files to a new location and reconnect them.

Workaround: Set the ingest setting location to any folder on disk, including a folder managed by a third-party syncing service.

## Networks and removable media with Digital Video

### Common problems and fixes for video editing with removable media

Note

As Adobe introduces the next generation of Adobe Premiere mobile apps, Adobe Premiere Rush is being discontinued. After September 30, 2025, Adobe.com will no longer offer Premiere Rush. The recommended alternative is Premiere on iPhone; a version for Android is also in development. For more information, visit the Premiere Rush Discontinuation FAQ.

Opening and saving files across a network or from removable media introduces many variables that affect application performance. Because of this, work done over a network or from removable media more often encounters problems than files kept on a local hard disk. Examples of network-related problems include damaged files, denied access, and slow performance. In these situations, Production Premium can display messages like these:

- "Could not complete this operation because this file is in an unknown format."
- "Could not complete the request because the file is locked."
- "Could not save because of a disk error."

Note

Problems with Production Premium files used across a network or from removable media may appear intermittently or after a delay.

Adobe Technical Support supports Adobe Premiere, Adobe Premiere Rush, Adobe Premiere Elements, After Effects, Encore, Media Encoder, Prelude, or SpeedGrade only when used from a local hard disk. Network and peripheral configuration problems are difficult to recreate or diagnose accurately.

Important: External hard drives are common and should work with Project Files without trouble. Rendering video files or storing media on an external drive requires fast media, such as external drives using eSata or USB 3.0. A suitable test is to temporarily disable those drives and work only from an internal drive. Adobe is not saying that sufficiently fast external non-portable hard disks should regularly cause problems when storing files or supporting work.

### Issues when working with network files or removable media

Adobe Premiere and other video applications use substantial resources and need more RAM and hard disk space than most applications. Although Adobe Premiere can work across networks and removable media, those setups reduce application performance and reliability. Faster access speed on the disk that holds the media or the Media Cache disk files lets Digital Video applications read and write media files faster. Internal hard disks have quicker access speeds than network servers, meaning a hard disk reached over a network, and removable media.

### Additional variables when using networks

Network setups vary widely by configuration, such as client-server or peer-peer, and by type, such as ethernet or IP; many companies also build the hardware and software involved. Each setup needs specialized software and hardware with its own settings, preferences, and updates. That extra hardware and software layer raises the chance of errors from causes such as line noise, RF interference, or packet collisions.

Data transmission across a network is affected by many elements, including software, file servers, routers, bridges, network cards, cables, connectors, power cables, and power supplies. Network connections may become unavailable suddenly, which increases the risk of data loss and application errors. During sending and receiving, network software checks whether data has been transmitted and received. The amount of checking depends on the network software package and sometimes cannot be viewed through the operating system. Saving files across a network may produce an error such as "Could not complete the request because the file is locked," or "Could not save because of a disk error." However, the network and operating system may not warn you when a rendered movie contains damaged or incomplete information.

### Additional variables when using removable media

Removable media includes many types, such as portable external hard drives and flash drives, made by many manufacturers. The operating system must recognize the related cables or connections and device drivers. Removable media is also damaged more easily than internal disks, which increases the risk to media files.

### Recommended workflow

Technical Support strongly recommends working with digital media files directly on the local hard disk. To avoid data loss, save files to the hard disk first, then use the Finder or Windows Explorer to move them onto the network or removable drive. When retrieving files, use the Finder or Windows Explorer to copy them from the network or removable drive back to the hard disk. This workflow avoids issues from incompatibilities between the operating system or video editing software and network system setups or removable media device drivers.

### Suggestions for troubleshooting

Application performance problems can come from several causes, including memory conflicts among device drivers, damaged or conflicting files, and operating system software or hardware issues. If problems occur while working directly from networks or removable media, use these suggestions for troubleshooting.

Disclaimer: Adobe provides these suggestions as a courtesy and does not support networks or removable media.

- Confirm that your Adobe software is the latest version. Download Adobe updates from www.adobe.com/support/downloads/.
- Move the file from the network or removable disk onto a local hard disk, then open it in the editing software.
- Try another computer connected to the same network or the same type of removable media.
- Ask your network administrator about known network problems or configuration changes, including changed access privileges or updated drivers.
- Check that the Adobe software installation and running copy are both on a local hard disk, then try to reproduce the problem. If the problem can be reproduced, troubleshoot it on the local configuration. If it cannot, the cause may be work from removable media or a network.

## Common issues in Premiere on Apple silicon Macs

### Premiere on Apple silicon Macs: common issues

Note

Rosetta support has ended for Adobe video and audio products

From version 24.0 onward, Adobe video and audio products do not support Rosetta emulation for Intel versions running on Apple M1/M2. The Creative Cloud desktop may still show the Rosetta option on M1/M2 machines, but it launches the native Apple Silicon version. Intel versions run only on Mac Intel machines.

The Get Info window no longer includes the Open using Rosetta option.

Premiere runs natively on Macs with Apple silicon, with average speed gains around 80% versus similarly configured previous-generation Apple systems.

### Known differences and limitations

Premiere running on Apple silicon chips has a few feature and workflow gaps.

- Capture workflows (DV, HDV, third-party capture support, and device control)
- The loudness radar effect.
- Export to Wraptor DCP
- Import and export of the GoPro CineForm codec
- Import of specific XDCAM formats (currently XDCAMEX)
- Export to the P2 Movie format

### Plugins and Integrations

Adobe video technology partners can use the published SDKs to update effects, plug-ins, and panels for Premiere on Apple silicon chips. Ask the plug-in developer whether an Apple silicon-ready build is available.

### Are legacy versions compatible?

Older Premiere releases work with Big Sur, and no issues are currently known. For the smoothest experience, update Premiere to the newest available release.
