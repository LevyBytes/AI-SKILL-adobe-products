# V1 behavior

In V1, `documentManifest` produced a layer hierarchy with basic layer metadata: `name`, camelCase `type`, bounds in `height`/width`/`left`/top` form, a presigned S3 thumbnail URL string, and a simple `locked` boolean. Artboards appeared the same as group layers. Smart object data used a flat shape containing `instanceId`, `name`, `path`, and MIME-type `type`. The document section included `bitDepth`, `iccProfileName`, and `name`.
