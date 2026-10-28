# Configure ingest settings

Configure ingest settings to decide how media files are copied, transcoded, and organized during import.

Ingest settings control the way media files are copied, transcoded, and managed as they enter a project. They are especially useful for keeping media in an efficient editing format and storage location.

Before you begin:

Start by opening an existing project, or create a new project.

Select File > Project Settings > Ingest Settings.

Premiere opens the ingest controls.

When the Ingest Settings dialog box appears, pick one of the following operations to start automatically as files are imported into the project. Editing can continue while ingest finishes in the background.

Ingest Settings options available when setting up footage in a project.

Ingest Settings choices available for footage during project setup.

- Copy: copies the media unchanged to a new location. For example, this is commonly used to move camera footage from removable media to a local hard drive. The transfer path comes from the Primary Destination option in Ingest Settings. After copying, the clips in the project point to the copied files.
- Transcode: choose this when imported media files should be converted to another format. For example, this is commonly used to convert original camera footage into a format required by a post-production facility. After transcoding, the project clips point to those transcoded file copies.
- Create Proxies: creates and attaches proxies to the media. For example, this can generate lower-resolution clips for better editing performance, with the option to return to the original full resolution files for final output. Once the proxies are generated, Premiere automatically attaches them to the project clips.
- Copy and Create Proxies: copies media and creates proxies for that media too.

To add custom presets made in Adobe Media Encoder, select Add Ingest Preset and browse to the saved preset (.epr) file.

Add custom ingest presets created with Adobe Media Encoder.

Upload custom ingest presets made in Adobe Media Encoder.

After choosing the ingest option, select the Primary Destination and Proxy Destination when proxies are being created.

Select OK.

When media is imported into the project, Premiere applies the ingest settings you defined. It copies, transcodes, and manages media files according to those settings.
