# Signature Format (_signatureFormat_)

Picks which of the supported digital signature formats to apply:

- PADES : A newer, hardened format with tighter, more concrete, and more secure rules. Reference material lives at [ISO 32000-2](https://www.iso.org/standard/75839.html) and [ETSI EN 319 142-1](https://www.etsi.org/deliver/etsi_en/319100_319199/31914201/03.01.01_60/en_31914201v030101p.pdf).
- PKCS7 : A looser format than PADES, because it tolerates a wider set of PDF edits before the digital signature breaks. When nothing is chosen, this one is used. Reference material lives at [ISO 32000-1](https://www.iso.org/standard/63534.html).
