# V2 Edit Api Benchmarking

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Benchmark data below covers **benchmarking results for unified API workloads** for async jobs completed through **POST /v2/edit** in Photoshop APIs, with raster outputs at fixed dimensions and separate JPEG `quality` / PNG `compression` request options. Treat the data as **capacity planning and rough expectations**, not as a performance SLA. Job duration changes with adjustments, source images, I/O behavior, and system load.

See [Edit Operations Migration](api-edit-operations.md) for endpoint usage and adjustment parameters.

Note

These benchmark results are illustrative. They do not guarantee processing time for any specific workload or environment.

## JPEG output (seconds)

The table uses JPEG `input` and JPEG `output` with `quality` values `poor`, `medium`, and `photoshop_max`. For the full set of supported `quality` values and defaults, see [Output Types Migration](api-output-types-migration.md).

### JPEG chart

[Figure: Line chart: JPEG output latency in seconds versus image resolution for POST /v2/edit, series for quality poor, medium, and photoshop_max](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/v2-edit-jpeg-benchmarking.png?raw=true)

_Chart series match the table columns below. Axis units are seconds._

| Resolution | `poor` | `medium` | `photoshop_max` |
| --- | --- | --- | --- |
| 640×640 | 0.789 | 0.945 | 0.876 |
| 800×600 | 0.848 | 0.858 | 0.800 |
| 1024×768 | 0.755 | 0.788 | 0.742 |
| 1280×720 | 0.774 | 0.805 | 0.808 |
| 1080×1080 | 0.817 | 0.877 | 0.894 |
| 1920×1080 | 0.939 | 0.888 | 1.046 |
| 2160×3840 | 1.288 | 1.300 | 1.430 |
| 3840×2160 | 1.248 | 1.341 | 1.387 |
| 4000×3000 | 1.579 | 1.637 | 1.913 |
| 5120×2880 | 1.723 | 1.819 | 2.202 |
| 4000×4000 | 2.057 | 1.966 | 2.486 |
| 6000×4000 | 2.229 | 2.300 | 2.826 |
| 4320×7680 | 3.094 | 2.986 | 3.855 |
| 7680×4320 | 3.081 | 3.140 | 3.945 |
| 6000×6000 | 3.497 | 3.345 | 4.116 |
| 7500×5000 | 3.284 | 3.662 | 4.198 |
| 8200×5120 | 3.807 | 3.753 | 4.584 |
| 8000×6000 | 4.272 | 4.011 | 5.367 |
| 7872×7872 | 5.292 | 5.326 | 6.550 |
| 7990×7926 | 5.401 | 5.603 | 6.446 |

## PNG output (seconds)

The table uses PNG `input` and PNG `output` with `compression` values `none`, `default`, and `maximum`. For the full set of supported `compression` values and defaults, see [Output Types Migration](api-output-types-migration.md).

### PNG chart

[Figure: Line chart: PNG output latency in seconds versus image resolution for POST /v2/edit, series for compression none, default, and maximum](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/v2-edit-png-benchmarking.png?raw=true)

_Chart series match the table columns below. Axis units are seconds._

| Resolution | `none` | `default` | `maximum` |
| --- | --- | --- | --- |
| 640×640 | 1.253 | 0.989 | 1.244 |
| 800×600 | 0.988 | 1.008 | 1.164 |
| 1024×768 | 0.872 | 1.144 | 1.605 |
| 1280×720 | 0.824 | 1.113 | 1.541 |
| 1080×1080 | 1.099 | 1.149 | 1.926 |
| 1920×1080 | 1.156 | 1.569 | 2.891 |
| 2160×3840 | 1.897 | 3.788 | 11.174 |
| 3840×2160 | 2.048 | 3.732 | 9.369 |
| 4000×3000 | 2.500 | 5.470 | 14.948 |
| 5120×2880 | 2.660 | 5.981 | 19.766 |
| 4000×4000 | 3.471 | 7.359 | 21.271 |
| 6000×4000 | 4.728 | 10.693 | 37.174 |
| 4320×7680 | 5.706 | 12.697 | 49.087 |
| 7680×4320 | 4.411 | 12.881 | 55.451 |
| 6000×6000 | 5.261 | 14.899 | 59.810 |
| 7500×5000 | 5.305 | 15.386 | N/A |

**N/A:** The job **timed out** and the request **could not be completed** under the benchmark conditions for PNG `maximum` at that resolution.
Note: Resolution 7500×5000 and higher will timeout.

## Reading the numbers

At large resolutions, PNG **`maximum`** compression can add much more encode time than **`default`**. For the biggest entries, **`maximum`** can hit `/v2/edit` job limits, which is why **N/A** appears. To improve completion reliability for very large exports within normal job timeouts, use **`default`** or a lower compression level. See [Technical Usage Notes](https://raw.githubusercontent.com/getting-started/technical-usage-notes/index.md) for service limits, retries, and related behavior.
