# Basic Host Differences — Missing Suites

Many suites supported by After Effects are absent from the Premiere Pro host. In several cases, even when a suite is missing in Premiere Pro, an equivalent macro function exists. Examples:

| After Effects suite call | Premiere Pro equivalent function |
| --- | --- |
| WorldTransformSuite1()->copy() | `PF_COPY`() |
| WorldTransformSuite1()->convolve() | in_data->utils->convolve() |
| FillMatteSuite2()->fill() | `PF_FILL`() |
| `PF_PixelDataSuite1`->get_pixel_data8() | `PF_GET_PIXEL_DATA8`() |

The sample projects show alternate approaches to missing suites by checking host application and version. The Portable sample demonstrates both host-application and version checks.
