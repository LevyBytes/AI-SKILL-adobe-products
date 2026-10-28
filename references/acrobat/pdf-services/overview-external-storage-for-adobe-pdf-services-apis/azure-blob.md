Use `storage: "BLOB"` with an Azure Blob signed URL or SAS URL. A SAS is an authorization token attached to a resource URI. Its permissions, resource scope and validity period determine the access available to the consumer. The application issuing it needs the appropriate signing authority; Adobe does not need that application's separate Azure credentials.

Choose permissions for the intended input read or output write and keep the URL valid while the job uses it. Retain the authorization query parameters. Follow the [Azure SAS contract and best practices](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview), including its guidance on restricted permissions and limited lifetimes.

Check the [Azure Blob host pattern](supported-url-prefixes.md#azure-blob) and [Adobe transport constraints](overview-limitation.md), then supply the URL through the operation's [external-storage request](../overview-external-storage-for-adobe-pdf-services-apis.md).
