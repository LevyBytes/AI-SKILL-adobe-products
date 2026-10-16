# Create proxies in Adobe Premiere.

Proxies are low-resolution versions of high-resolution video files. Editing with these proxy files can improve performance and efficiency, especially for large media or files that require substantial processing.

Proxy creation is available only for video clips that do not have captions. Proxies are not supported for other file types or growing files. The media must be online.

Before you begin:

Import the high-resolution files into Premiere.

Use low-resolution media copies to reduce processing time and system load.

In the Project panel, right-click a media file. On the context menu, choose Proxy > Create Proxies.

Note

This option becomes available when the panel selection contains one or more items eligible for proxy creation. Premiere can make proxies for master clip project items when the item contains video, lacks captions, is not a growing file, and has online media.

In the Create Proxies dialog, keep the default frame size of Half and the default preset ProRes QuickTime Proxy, or choose another frame size and preset.

(Optional) You can also add presets made in Adobe Media Encoder by selecting Add Ingest Preset. Proxies can be created in a Proxies directory next to the original media or in a custom location.

To make proxy files easy to recognize in the Program Monitor, choose a watermark. Select None for no watermark, choose an icon that marks the file as a proxy, or upload a custom watermark of your own.

In the Destination section, choose one of these options:

- Next to Original Media, in Proxy Folder: with this choice, Premiere places each proxy clip in its own new folder alongside the original high res media. Because many high end cameras use complex file structures with each clip isolated in its own folder, this choice is usually inconvenient. Grouping the proxies for transfer to another drive, or deleting them at project completion, becomes harder.
- Choose Location : browse and choose a destination so all proxies are stored in the same folder.

Note

By default, Premiere adds "\_Proxy" to Proxy clip names, such as scene01_Proxy.mxf, and stores the on-disk Proxy clips in a Proxies folder beside the full resolution clips. That placement helps with clip reattachment. If you use a custom destination, add the Proxies folder to that destination.

Select OK.

Premiere shows a progress dialog box while preparing proxy creation jobs for Adobe Media Encoder.

Adobe Media Encoder then receives one proxy job for each selected project item that can be proxied, and Premiere attaches an offline proxy to each project item. Job progress can be monitored in the Premiere Progress panel or in Adobe Media Encoder.

While those jobs run, continue working in Premiere with the matching high-resolution project items.
