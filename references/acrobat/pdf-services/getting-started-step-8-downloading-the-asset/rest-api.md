# Download request

For Adobe-hosted electronic-seal output, wait for the job-status body to report `done`. Set `DOWNLOAD_URI` to the complete `asset.downloadUri` from that response and `OUTPUT_FILE` to the local PDF destination path. Run this template in Bash:

```bash
curl --fail --location "$DOWNLOAD_URI" --output "$OUTPUT_FILE"
```

The signed URI authorizes access to the storage object. Keep its complete query and save the returned bytes; do not reconstruct a storage URL from an old example. Inspect HTTP errors before using the output.
