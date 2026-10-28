# January, 2024; Java SDK 4.0.0 major release

- Shipped Adobe PDF Services Java SDK v4.0.0, with new interfaces that draw fully on the power of the new PDF Services REST APIs.
- Brought in delete asset, refresh download URI, and webhook notifiers.
- Cut out the need for storage to hold intermediate results by dropping the dependency on temporary storage.
- Widened I/O reach by adding external storage to most PDF Services operations.
- Reworked the PDF Properties operation so it returns a PDFProperties object alongside the JSON string.
- Reworked the Extract PDF operation so it returns content and resource assets alongside the content JSON object.
