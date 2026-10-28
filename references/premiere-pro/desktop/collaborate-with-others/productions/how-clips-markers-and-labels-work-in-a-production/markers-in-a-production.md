# Markers in a Production

Because a sequence can use source clips stored in another project, marker behavior is tied to read/write access on both projects. If the source-clip project and the sequence project are both open with read and write access, adding a clip-level marker on either instance also shows it on the other instance.

When a marker is added in a sequence while the source-clip project is not open in read and write mode, that marker remains only in the sequence at first. After both projects are opened again in read and write mode, the marker syncs to the source clip and then back.
