# How input and output nodes work

Input nodes make one or more assets available to the rest of the workflow. You can provide those assets from your local drive as a single file or a multi-file upload, or from cloud-connected locations configured for your organization. Many environments expose Adobe Experience Manager (AEM) Assets plus Adobe cloud storage integrations; where configured, they can retrieve content from Adobe Cloud Storage, Frame.io, and similar services.

Output nodes take the files created by the workflow. They serve as the handoff point for exporting finished assets to local download locations and supported cloud systems. This lets workflow runs move assets between Workflow Builder and a Digital Asset Management system or review tools.

For local-file uploads, cloud processing handles the workflow and places completed files on output nodes according to the original connections. Download finished products from an output node location when you need them in local storage. Generated files are also listed in generation history: open Canvas View, use the right-hand toolbar, then open history. That view lets you review, inspect, and download outputs without checking only one node at a time.
