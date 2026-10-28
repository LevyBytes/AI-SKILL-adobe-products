# V2 Edit Api Benchmarking

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Benchmark data below covers **benchmarking results for unified API workloads** for async jobs completed through **POST /v2/edit** in Photoshop APIs, with raster outputs at fixed dimensions and separate JPEG `quality` / PNG `compression` request options. Treat the data as **capacity planning and rough expectations**, not as a performance SLA. Job duration changes with adjustments, source images, I/O behavior, and system load.

See [Edit Operations Migration](edit-operations/edit-operations.md) for endpoint usage and adjustment parameters.

Note

These benchmark results are illustrative. They do not guarantee processing time for any specific workload or environment.
