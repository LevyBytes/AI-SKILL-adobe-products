# Shared-storage practices for Adobe Premiere Productions

Use these core practices when Premiere Productions are stored on shared storage:

- Network Attached Storage (NAS) Connections: NAS hardware can expose storage through several protocols. For shared storage access, choose SMB instead of AFP or NFS.

  - On macOS, use an identical volume name on every system.
  - On Windows, assign the share to the same drive letter on every system.

- Proprietary shared storage systems: Productions can operate on storage platforms that use proprietary file systems or client applications when those platforms refresh the file system in a way Premiere understands. Confirm compatibility with the storage provider.
- Scratch disks: Shared storage is acceptable for scratch disks such as Auto Save, Preview Files, and similar files. By default, a Production stores scratch disks next to the Production folder; you can change that location in Production settings.
- Media cache files and database: Leave Media Cache Files and Media Cache Database in the default location on the system boot drive, or put them on a separate fast directly attached SSD for each workstation. Adobe support guidance excludes shared-storage placement for those cache files.

  - Minimum: for Productions, provide 1Gbps per workstation.
  - Recommended: use 10Gbps or faster when frame sizes exceed HD, Productions are larger, or several users work at the same time. Increase storage and network capacity as the concurrent user count grows.

- Consumer file syncing services: A Production can be stored in services such as Dropbox or Google Drive, but those services are not recommended as a replacement for shared storage. Production collaboration is not built around that type of service.
