# Lost or stolen digital IDs

Should a certificate-authority digital ID go missing or get stolen, stop using the private key, alert the certificate authority without delay, and ask them to revoke your certificate. For a self-issued ID that is lost or stolen, wipe out the private key and warn everyone you handed the matching public key or certificate to, because someone could otherwise abuse your digital signature.
