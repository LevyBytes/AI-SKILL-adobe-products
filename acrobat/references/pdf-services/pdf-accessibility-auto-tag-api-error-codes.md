# PDF Accessibility Auto-Tag API — Error codes

| Scenario | Error code | Error message |
| --- | --- | --- |
| Unknown error/ failure | ERROR | Unexpected error |
| Timeout | TIMEOUT | Unexpected error: Processing timeout |
| Disqualified | DISQUALIFIED | File is not suitable for conversion |
| Unsupported XFA file | `DISQUALIFIED_XFA` | File is not suitable for conversion: File contains an XFA form |
| Page limit violation | `DISQUALIFIED_PAGE_LIMIT` | File is not suitable for conversion: File exceeds page limit |
| Scan page limit violation | `DISQUALIFIED_SCAN_PAGE_LIMIT` | File is not suitable for conversion: Scanned file exceeds page limit |
| File size violation | `DISQUALIFIED_FILE_SIZE` | File is not suitable for conversion: File exceeds size limit |
| Encryption permission | `DISQUALIFIED_PERMISSIONS` | File is not suitable for conversion: File permissions do not allow conversion |
| Complex file | `DISQUALIFIED_COMPLEX_FILE` | File is not suitable for conversion: File content is too complex |
| Unsupported language | `DISQUALIFIED_LANGUAGE` | File is not suitable for conversion: File content language is unsupported |
| Bad PDF | `BAD_PDF` | The PDF file is damaged or its content is too complex |
| Bad PDF file type | `BAD_PDF_FILE_TYPE` | The input file is not a PDF file |
| Damaged input file | `BAD_PDF_DAMAGED` | The input file is damaged |
| Complex table | `BAD_PDF_COMPLEX_TABLE` | The input file contains a table that is too complex to process |
| Complex content | `BAD_PDF_COMPLEX_INPUT` | The input file contains content that is too complex to process |
| Unsupported font | `BAD_PDF_UNSUPPORTED_FONT` | The input file contains font data that is corrupted or not supported |
| Large PDF file | `BAD_PDF_LARGE_FILE` | The input file size exceeds the maximum allowed |
| Protected PDF | `PROTECTED_PDF` | PDF is encrypted or password-protected |
| Empty or corrupted input | `BAD_INPUT` | Input is corrupted or empty |
| Invalid input parameters | `BAD_INPUT_PARAMS` | Invalid input parameters |
| User not enrolled to allowed Atlas plans | `INVALID_PLAN_CODE` | Unauthorized to execute this operation. User is not enrolled to plans allowed for the service |
