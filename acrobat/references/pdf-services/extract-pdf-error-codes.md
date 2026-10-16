# Extract PDF — Error codes

| Scenario | Error code | Error message |
| --- | --- | --- |
| Invalid API parameters | \- | Invalid parameters |
| File size violation | `DISQUALIFIED_FILE_SIZE` | File exceeds size limit. |
| Page limit violation | `DISQUALIFIED_PAGE_LIMIT` | File exceeds page limit. |
| Scan page limit violation | `DISQUALIFIED_SCAN_PAGE_LIMIT` | Scanned file exceeds page limit. |
| Unsupported XFA file | `DISQUALIFIED_XFA` | File contains XFA form(s). Not supported for content extraction. |
| Encryption permission | `DISQUALIFIED_PERMISSIONS` | File permissions do not allow for content extraction. |
| Complex file | `DISQUALIFIED_COMPLEX_FILE` | File contents are too complex for content extraction. |
| Unsupported language | `DISQUALIFIED_LANGUAGE` | File content language is unsupported. |
| Bad PDF | `BAD_PDF` | Unable to extract content. File is corrupted, malformed or an empty PDF. |
| Invalid file type | `BAD_PDF_FILE_TYPE` | The input file is not a PDF file. |
| Damaged file | `BAD_PDF_DAMAGED` | The input file is damaged. |
| File contains complex table | `BAD_PDF_COMPLEX_TABLE` | The input file contains a table that is too complex to process. |
| File contains complex content | `BAD_PDF_COMPLEX_INPUT` | The input file contains content that is too complex to process. |
| File contains unsupported font | `BAD_PDF_UNSUPPORTED_FONT` | The input file contains font data that is corrupted or not supported. |
| Large PDF | `BAD_PDF_LARGE_FILE` | The input file size exceeds the maximum allowed. |
| Protected PDF | `PROTECTED_PDF` | Unable to extract content. File is password protected. |
| Empty or corrupted input | `BAD_INPUT` | Input is corrupted or empty. |
| Invalid input parameters | `BAD_INPUT_PARAMS` | Invalid input parameters. |
| Timeout | TIMEOUT | Processing timeout. Please try splitting the file into multiple files with fewer pages. |
| Unknown error / failure | ERROR | Unable to extract content - Internal error. |
