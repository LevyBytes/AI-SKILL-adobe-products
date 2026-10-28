Use `storage: "S3"` with an S3 presigned URL for the input object or output destination. The application generating the URL needs valid AWS credentials and permission for the requested operation. Adobe uses the URL's delegated access without receiving separate AWS credentials; authorization is still required and encoded in the signed request.

Generate the URL for the correct object, HTTP method and expiration. A download URL and an upload URL authorize different operations. The signer's permissions and credential lifetime bound the resulting access. Follow the [S3 presigned-URL contract](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html).

Check the [S3 host patterns](supported-url-prefixes.md#amazon-s3) and [Adobe transport constraints](overview-limitation.md). Put the complete URL in the selected operation's input or output field as described in the [external-storage workflow](../overview-external-storage-for-adobe-pdf-services-apis.md).
