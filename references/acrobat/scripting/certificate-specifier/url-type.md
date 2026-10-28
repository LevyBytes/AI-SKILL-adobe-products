# CertificateSpecifier.urlType

Type: String. Access: R/W.

(Acrobat 8.0) A string telling what kind of URL the url property holds. For Acrobat 8.0 the valid values are:

"HTML": the url aims at an HTML website, which Acrobat renders through the web browser. Here the url bit within the flags property is disregarded.

"ASSP": the url points to a signature web service fit for server-based signing. Where the url bit of the flags property marks this a required constraint, it means the signing credential has to originate from that server.

When this attribute is absent, the url is taken to aim at an HTML site.
