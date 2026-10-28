# Issue: placeholder not replaced

**Error**: File path contains literal `__ADDITIONAL_CONTENTS_PATH_0__`

**Solution**: Provide an `additionalContents` array under `options`, then verify that the placeholder index is the expected 0-based value.
