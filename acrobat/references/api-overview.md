# Faq

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Frequently Asked Questions (FAQ) — How can I get access to Adobe PDF Services API Free Tier if I am using company or school account?; Introduction — What are Acrobat Services APIs?.

## Frequently Asked Questions (FAQ) — How can I get access to Adobe PDF Services API Free Tier if I am using company or school account?

There are two routes to gaining access: sign up with your personal email, or pair a [Personal Adobe ID](https://helpx.adobe.com/in/enterprise/using/identity.html) with your work email to generate an Adobe-provided credential. For help deciding which account fits best, read more [here](https://helpx.adobe.com/enterprise/kb/enterprise-id-faq.html). The steps below walk you through pairing a Personal Adobe ID with your work email:

### Step 1:

If the notice “You don’t have access to PDF Services API” appears, **Sign out**.

[Figure: entp signup failure](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/entp-signup-failure.png)

### Step 2:

Press the **"Get Credentials"** button.

[Figure: get credentials image](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/get-creds-btn.png)

### Step 3:

Choose **"Create an account"**, then register with your work email by selecting **Sign up**.

[Figure: create account](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/create-account.png)

### Step 4:

From the account types, pick **"Personal Account"**.

[Figure: personal account](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/personal-account.jpg)

### Step 5:

To log in, choose **"Personal Profile"**.

[Figure: personal profile](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/personal-profile.png)

## Introduction — What are Acrobat Services APIs?

More and more, the people who own content and applications want PDF features that are simple to use as they build today's web experiences. Their preference runs toward cloud platforms offering dependable, plug-and-play services with minimal setup.

Five core APIs make up Adobe Acrobat Services. These are Adobe PDF Services API; Adobe PDF Embed API; Adobe Document Generation API; plus, rounding out the set, Adobe PDF Extract API alongside Adobe PDF Accessibility Auto-Tag API. Those final two APIs, together with their SDKs, ship inside the Adobe PDF Services API under a paid plan. PDF Embed API, by contrast, costs nothing. Through a collection of contemporary cloud-based web services, these APIs handle the generation, manipulation, and transformation of document content automatically. The payoff is faster, simpler, branded experiences in which you govern how users interact with your documents, smooth out PDF workflows, and drive usage and retention.

Because the tooling and language support line up with the skills developers already have, building cohesive, engaging PDF experiences — viewing, exporting, creating, and otherwise working with PDFs — is now within reach.

For PDF workflows, these APIs mark a fundamental change in how such processes coexist and interact with your environment and digital documents. The API portfolio keeps growing fast as Adobe broadens support for more use cases. On top of that, ongoing improvements span the APIs themselves along with their SDKs, sample code, and documentation.

### Introduction — PDF Embed API for viewing and collaboration within your web pages

With just a handful of JavaScript lines, the [PDF Embed API](api-pdf-embed-api.md) delivers PDF viewing into any web application. Thanks to several embed modes, supporting a range of views — full browser, boxed containers, and in line — is straightforward. Commenting, drawing, highlighting, and text editing tools together make document collaboration possible. On the analytics side, you get the chance to layer in dynamic interactivity — chats, prompts, and other event-driven triggers keyed to PDF viewing activity — that elevates the end-user experience.

### Introduction — PDF Services API to automate for your document workflows

A range of operations comes with the [PDF Services API](api-pdf-services-api.md), letting you manipulate documents programmatically and automate a wide variety of document workflows. Generating a PDF from a dynamic HTML report is simple, as is locking a document with a password against unauthorized opening, shrinking it so it travels well as an attachment, or pulling out text, tables, images and document structure to feed downstream solutions.

Beyond that, you can compress or linearize a document so it loads faster on the web, and insert, reorder, rotate, replace, and delete pages inside documents.

Ready-to-use code samples for Java, Node.js, Python and .NET ship with the PDF Services API, which also offers a [Free Tier which includes 500 free Document Transactions per month.](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api)

You'll also find the PDF Services API on [Power Automate](https://docs.microsoft.com/en-us/power-automate/), complete with Power Automate connectors that integrate easily.

### Introduction — Document Generation API for automating document workflows

A cloud-based web service, the [Document Generation API](api-document-generation-api-3.md) lets you turn out high fidelity PDF and Word documents driven by dynamic data inputs. With it, you can blend your data(e.g. JSON file) into Word templates, producing dynamic documents — contracts and agreements, invoices, proposals, reports, forms, branded marketing documents and more.

Bring Document Generation API into any application by way of the [PDFServices SDK](api-pdf-services-api.md) for Node.js, .Net, Python and Java. [Start with a Free Tier which includes 500 free Document Transactions per month.](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=document-generation-api)

### Introduction — PDF Extract API for extracting PDF structure and information

Powered by Adobe's Sensei AI technology, the [PDF Extract API (included with the PDF Services API)](api-pdf-extract-api.md) is a cloud-based web service that automatically pulls content and structural information out of PDF documents — whether native or scanned — and emits it as structured JSON. Here is how it handles text, complex tables, and figures:

- Text comes out in contextual blocks — paragraphs, headings, lists, footnotes, etc. — carrying font, styling, and other text formatting details.

- For tables, extraction and parsing deliver the contents plus table formatting information for every cell. Cells spanning multiple rows or columns are detected automatically. The resulting JSON holds the table data, which can optionally also be written to CSV and XLSX files. PNG images of the tables are produced too, so the table data can be checked visually.

- Anything flagged as a figure or image is pulled out as a PNG file.

Document structure information rides along in the JSON output as well — for instance, the natural reading order of the extracted elements and how those elements are laid out on each page.

For developers, the PDF Extract API offers a way to extract and structure content destined for many downstream applications, among them content republishing, workflow automation, content analysis, and data aggregation, management, and search.

Embedding the PDF Extract API into any application is done through the [PDFServices SDK](api-pdf-services-api.md) for Node.js, Python, and Java. [Start with a Free Tier which includes 500 free Document Transactions per month.](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-extract-api)

### Introduction — PDF Accessibility Auto-Tag API for improving accessibility in PDFs

A capable tool, the [PDF Accessibility Auto-Tag API](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-accessibility-auto-tag-api/index.md) can serve as one stage in making individual PDFs more accessible, and it scales to clear large backlogs of PDFs. What auto-tagging does is attach document structure tags to the PDF file, and those tags let a document's text be read and presented in a way that makes sense for people relying on assistive technology. It belongs to the Adobe PDF Services API offering, comes as a REST-powered SDK backed by Sensei AI, and is readily invoked from automated workflows.

As a document heads toward full accessibility, automatic tagging makes a solid first step. Compared with untagged PDF files, it yields meaningful quality gains: tables, references, links, complex lists, reading order, and heading levels all come out more accurately. The better heading levels for navigation are a notable win for screen reader users in particular. Since the service overwrites any tags already present in your document, it helps most with PDFs that carry no tags or low-quality ones. The PDF Accessibility Auto-Tag service can also generate an optional Excel report describing how the document was tagged, which makes it easier to spot content you may have to review or fix.

What the API returns is a tagged PDF, yet there is no guarantee of full compliance with accessibility standards like WCAG and PDF/UA — further downstream remediation may be needed, and securing independent review to satisfy those standards remains your responsibility. To push accessibility further after auto-tagging, you might turn to Adobe Acrobat Pro to add alt-text to every figure and to go over the tagging of complex tables. After that, check the first page along with how the title is identified and the reading order, then run the accessibility report and clear any errors.

To dig deeper into PDF Accessibility, see [this overview](https://www.adobe.com/accessibility/pdf/pdf-accessibility-overview.html).

Embedding the PDF Accessibility Auto-Tag API into any application happens via the [PDFServices SDK](api-pdf-services-api.md) for Java, .NET, Node.js and Python. [Start with a Free Tier which includes 500 free Document Transactions per month.](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-accessibility-auto-tag-api)

### Introduction — PDF Services Region Support

For transacting and handling documents, PDF Services now back two regions. By default, documents are processed in the United States region. On top of that, developers may now route API calls through the European region (Ireland). Since this choice is made per call, a single project can draw on both. You'll find the specifics in [our documentation](api-howtos-7.md).

### Introduction — PDF Services External Storage Support

The PDF Services Document Generation API can now reach files straight from the client's own storage solution. That cuts the extra work of pulling the file down and pushing it back up to our storage. You'll find the specifics in [our documentation](api-howtos-5.md).

### Introduction — Community forum and feedback

Hearing from customers carries real weight, since it lets the team confirm use cases, steer development, and sort out problems. We always welcome comments and questions on the [Community Forum](https://community.adobe.com/t5/document-cloud-sdk/bd-p/Document-Cloud-SDK?page=1&sort=latest_replies&filter=all).
