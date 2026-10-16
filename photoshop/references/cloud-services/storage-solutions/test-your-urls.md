# Test your URLs

Run these commands to verify that a public URL or pre-signed URL works.

Input file path test:

```bash
curl -X GET "<your_file_path>" \
--output <some-file.jpg>
```

Output file path test:

```bash
curl -X PUT "<your_file_path>" \
-d <some-file.txt>
```
