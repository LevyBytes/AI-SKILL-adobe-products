# To extract data from the sample PDF file

```bash
python src/extractpdf/extract_text_table_info_with_renditions_from_pdf.py
```

Note: those commands operate on the “extractPdfInput.pdf” input found in the “src/main/resources” directory and write their result into the project's “output” directory; should the output files already be present, the commands raise an error.

The SDK ships with other sample programs too, letting you experiment with API options such as producing a tagging report and promoting headings so that only the document title stays at H1.
