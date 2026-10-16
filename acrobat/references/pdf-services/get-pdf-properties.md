# Get PDF Properties

Call this service when you need a PDF's metadata returned for downstream handling. It reports attributes such as the page total, the PDF version, how large the file is, which compliance standards are met, font details, the permission flags, and additional fields — all delivered as JSON so a program can parse them without effort.

Typical reasons to pull these properties include: confirming whether the document has been made fully searchable through OCR; reading the certificate details behind an e-signature; identifying which standards apply (for instance, PDF/A and PDF/UA); gauging how big the file is ahead of a compression pass; and inspecting the flags that govern copying, editing, printing, and encryption — among other checks.
