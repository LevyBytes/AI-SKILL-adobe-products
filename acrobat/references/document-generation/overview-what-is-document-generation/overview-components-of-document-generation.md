# Overview — Components of Document Generation

**Document Template**

Within Document Generation, what we call a document template is a ready-made, tailored file carrying a set of predefined template tags whose purpose is to produce dynamic content. As the Document Generation run proceeds, those template tags pick up values from the supplied input and are swapped out for the matching real data.

**Template Tags**

Template tags express the rules that mark where dynamic content belongs in a file. Drop these tags into a file (a docx, say) and that file becomes a document template.

To learn more, please visit [Template Tags](../template-tags/reference-index.md)

**Input Data**

At its core, Document Generation runs on data. The input you feed it drives which template tags in the document template get swapped out, and that in turn shapes the dynamic content of the finished file. Feed it a different set of input and the same template can yield a different document each time.

**Document Generation API**

Supply the [Document Generation API](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Document-Generation) with a document template (tags included) plus the input data, and it returns the finished document. It builds that output by substituting every template tag in the template with dynamic content drawn from the real values that correspond to the data you provided.

To learn more, please visit [QuickStarts](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/quickstarts/index.md)
