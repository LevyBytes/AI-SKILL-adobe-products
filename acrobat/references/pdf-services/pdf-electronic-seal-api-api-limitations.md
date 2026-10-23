# PDF Electronic Seal API - API limitations

- **Input PDF size:** The input PDF may be at most 100 MB.
- **Seal Image size:** A seal image file may be at most 5 MB.
- **Seal Image formats:** Accepted seal image types are JPEG(image/jpeg), PNG(image/png) and PDF(application/pdf).
- **Password-protected Files:** Electronic sealing cannot run against encrypted or password-protected PDFs.
- **Signed/Sealed Files:** A PDF that already carries a signature, certification, or seal is off-limits for electronic sealing.
- **Input PDF version:** Any input PDF older than version 1.3 is rejected.
- **Usage Rights File:** Input PDFs that already carry usage rights are not accepted.
