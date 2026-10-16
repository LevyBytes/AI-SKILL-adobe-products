# PNG chart

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
