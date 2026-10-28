# Digital seals

What a digital seal vouches for is the integrity of some digital asset — documents put out by an organization, server software, or source code, for example. The certificate behind it carries a subject-name field that pins down the responsible legal entity.

A digital certificate underlies both digital seals and digital signatures alike. The subject-name field on each one points to whoever it represents: an organization in the case of a digital seal, or a person in the case of a digital signature.

Inside Adobe Acrobat Sign, a blue bar flags the digital seal that guarantees where every signed document or audit report exported to PDF came from and that it hasn't been tampered with. Which certificate builds that seal depends on the shard the account sits on:

- NA1 and other shards use DigiCert
- EU1 uses Intesi Group
- IN1 uses Emudhra
