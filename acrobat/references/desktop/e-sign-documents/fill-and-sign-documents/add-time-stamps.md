# Add time stamps

See how attaching a trusted timestamp to a PDF in Acrobat backs up its authenticity and lets it be verified.

Certificate-based signatures, as well as PDFs that carry no identity-based signature, can have the date and time stamped onto them. A timestamp issued by a trusted authority confirms when signing happened and guards against the signature being invalidated. It also vouches for authenticity and meets the PAdES standard (ETSI 102 778).

The timestamp may come from an outside authority or from the certificate authority tied to your digital ID. When a timestamp server is configured, Acrobat draws on its time; with none in place, the machine's local clock fills in. Skip adding a timestamp at signing and you can still attach one afterward through long-term validation.
