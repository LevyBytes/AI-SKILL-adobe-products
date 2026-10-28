# Interacting with the API

Adobe Acrobat Services APIs bundle together a number of services that each tackle a particular problem fast while also driving multi-step document workflows. Through them you reach the foundational PDF services — creating, securing, compressing, converting, combining, and splitting PDFs — plus more capable ones such as the Document Generation API and the PDF Extract API.

Getting to the Acrobat Services can happen in several ways: through our REST API, through one of our SDKs for Node.js, Java, Python, or .NET, or through the Microsoft Power Automate, Workfront Fusion, and UiPath connectors. Below, this section walks through the transient storage options tied to each of those usage methods.

By default, anything uploaded as an asset or produced as output by the API stays in Adobe Document Cloud for 24 hours. Worth noting: that asset can be reached only by the developer working under the same credential it was generated with, or through the signed URL the API hands back. No API exists for listing the assets that are available.
