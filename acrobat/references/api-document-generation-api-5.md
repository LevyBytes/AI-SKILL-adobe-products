# Templatetags, Wordaddin

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Template Tags; Word Add-in.

## Template Tags

**Every template tag available for authoring a document template is described in this section.** Across the [Document Generation Process](api-document-generation-api-3.md), the Document Generation API swaps the document template's template tags for the supplied input data to produce the output document.

Each tag is [JSONata compliant](https://docs.jsonata.org/overview.html).

Keep every tag within a 1000-character limit.

### Placeholder Variables

The real input data takes the place of a placeholder (text tags).

**How to insert Placeholder Variables**

[Video](https://images-tv.adobe.com/mpcv3/5158/aa393134-7cf7-4ebb-bfd0-1ced95237d20_1615916599.854x480at800_h264.mp4#t=3)

Only an input field of type string, number or boolean can take a placeholder variable.
See the **Arrays** section if you want to use an array as a placeholder variable.
Any formatting put on the placeholder variable in the document template carries through to the output document.

For a more streamlined way to style and format the placeholder tag straight from the input json data, consult the [styling and formatting](api-document-generation-api-4.md) section.

JSON representation of the input data:

```json
{
  "accountName": "Kane Miller",
  "accountNumber": "8324e015-6400",
  "address": {
    "street": "123 ABC Street",
    "state": "LA",
    "zip": "9XXXX"
  },
  "doctor": "John Doe"
}
```

**Usage**

The actual input data is substituted in for placeholder variables.

[Figure: Placeholder tags being replaced by values](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/placeholder-basic.png)

**Default Value**

You can hand a placeholder variable a default value. Should the named tag be absent from the input json data, the default value fills the placeholder instead.

[Figure: Placeholder tags with default value set](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/placeholder-default.png)

**Optional**

Marking a placeholder variable as optional swaps in an empty string whenever the named variable is missing from the input data.

[Figure: Placeholder tags with optional image set](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/placeholder-optional.png)

**Prefix**

A prefix value may be attached to the placeholder variable; when set, that value is prepended to the tag's result.

[Figure: Placeholder tags with prefix image set](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/placeholder-prefix.png)

**Arrays**

For array handling, head to the [JSONata Functions](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/templatetags.md#jsonata-functions) section.

JSON representation of the input data:

```json
{
  "companyName": "Tech Corp",
  "discountCoupons": ["SummerSale", "BlackFriday", "NewYearSpecial"]
}
```

[Figure: working_with_arrays](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/working-with-array.png)

### Images

Place any image as a placeholder and rewrite its alt text in the prescribed format to drop an image into the document on the fly:

**How to insert Images**

[Video](https://images-tv.adobe.com/mpcv3/5158/43cb78ad-e98d-4deb-bdca-cf32edd0df95_1615916490.854x480at800_h264.mp4#t=3)

```json
{
  "location-path": "logo",
  "image-props": {
    "alt-text": "This is an alt-text for the image placeholder"
  }
}
```

Within that format, the properties name the _location-path_ and the _alt-text_.

Where the image sits in the input data is given by the _location-path_.

The _alt-text_ property, as laid out in the format, lets you supply alternative text for the image.

An image placeholder keeps its height and width in the output document.
JPEG, PNG, GIF, BMP, TIFF and SVG are the supported image formats.

JSON representation of the input data:

Image data may be passed either as a base64-encoded string or as publicly reachable URLs.

```json
{
  "logo": "data:image/png;base64,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"
}
```

**OR**

```json
{
  "logo": "https://documentcloud.adobe.com/dc-docgen-app/assets/dc_icon.png"
}
```

Permitted image URLs must be https and under 20 MB in size.

Add the image placeholder.

[Figure: Initial rendering of the image tag](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/image-tag-initial.png)

Apply the alt text to the image following the prescribed format.

[Figure: Adding alternative text for the image](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/image-alt-text.png)

In the output document, the image data takes the place of the image placeholder.

[Figure: Image placeholder replaced by the image data](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/image-tag-final.png)

Images can be inserted with the html `<img/>` tag as well. For details, see [Inline Images](api-document-generation-api-3.md).

### Conditionals

Conditions let you reveal or conceal document content.

**How to insert Conditional Tags**

[Video](https://images-tv.adobe.com/mpcv3/5158/671b4819-2e8c-44a1-8667-e9dfd2556133_1615916356.854x480at800_h264.mp4#t=3)

Wrap the condition inside _expr()_.
The conditional operators on offer are =, !=, >=, >, <=, <.

JSON representation of the input data:

```json
{
  "state": "CA"
}
```

**Conditional Sections**

Reveal or conceal whole paragraphs depending on conditions.

[Figure: Showing an paragraph based on a condition](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/conditional-section.png)

**Conditional Phrases**

Reveal or conceal text within a paragraph depending on conditions.

[Figure: Showing a text inside a paragraph based on a condition](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/conditional-phrase.png)

### Footnote Phrases

Use input JSON data to place footnotes in the document.

JSON representation of the input data:

```json
{
  "vitaminSources": "Fruits, whole grains, and leafy vegetables."
}
```

**Usage**

Drop in superscript annotations and have their matching footnotes appear at the foot of the page.

[Figure: Showing an phrase having footnote](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/footnote-phrase.png)

### Tables

### Insert Table using `<table>` HTML Element

Use the `<table>` tag to add tables to the document via json data.

JSON representation of the input data:

```json
{
  "Table_Data": "<table border='1' cellpadding='0' cellspacing='0' style='width:30%'><tr><th>Name</th><th>Age</th><th>Gender</th></tr><tr><td>Sheldon</td><td>29</td><td>Male</td></tr><tr><td>Leonard</td><td>30</td><td>Male</td></tr><tr><td>Howard</td><td>28</td><td>Male</td></tr><tr><td>Raj</td><td>29</td><td>Male</td></tr></table>"
}
```

**Usage**

A table built from the html string given in the input json takes the place of the placeholder tag.
[Figure: Sample for HTML Table insertion](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/html-table-output.png)

- In the input json data, any Placeholder Tag whose value carries a `<table>` HTML element belongs in its own separate paragraph within the input document template.

- Table elements can only be styled inline, i.e. through the `style` attribute of `<table>`. Internal and external styling are off-limits.

### Insert Table using table markers

Tables can likewise be added to a document through table markers. For more on how table markers work, see [Table Tag with Markers](api-document-generation-api-4.md).

For advanced constructs within tables, visit [Complex Table Constructs with Table Markers](api-document-generation-api-4.md).

### Insert Table using Placeholder Table Tag

**DEPRECATED.** Rather than the placeholder table tag approach shown below, please use [Table Tag with Markers](api-document-generation-api-4.md).

By repeating across an array of objects from the input data, a table's rows can be filled in dynamically.

**How to insert Tables**

[Video](https://images-tv.adobe.com/mpcv3/5158/d58772af-7a62-49fa-a098-12b11a27fb71_1615917048.854x480at800_h264.mp4#t=3)

Whatever formatting the table carries in the document template is preserved in the output document.

JSON representation of the input data:

```json
{
  "subscriptions": [
    {
      "name": "Adobe Document API",
      "price": "99",
      "quantity": "1",
      "amount": "99"
    },
    {
      "name": "Adobe Marketing API",
      "price": "199",
      "quantity": "2",
      "amount": "398"
    }
  ]
}
```

**Usage**

Build a table with the column headers you need. Add one row to it and, beneath the appropriate column headings, drop in template tags that reference the properties of the array's objects.

A template tag should name the array first, then the property name of that array's objects. _\{\{subscriptions.name\}\}_ is one such template tag, where _subscriptions_ points to the array of objects while name points to a property of one of those objects.

[Figure: Table created with column headers and template tags for each subsequent rows](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/table.png)

By repeating across the named array of objects, the table's rows are filled in dynamically in the output document.

[Figure: Table with template tags replaced with actual values in the rows](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/table-result.png)

### Lists

### Insert List using `<ul>` and `<ol>` HTML Elements

Use the `<ul>` (unordered list) and `<ol>` (ordered list) tags to add lists to the document via JSON data.

**Simple Lists**

JSON representation of the input data:

```json
{
  "List_Data": "<ul><li>Coffee</li><li>Tea</li><li>Milk</li></ul>"
}
```

A list built from the html string given in the input json takes the place of the placeholder tag.

[Figure: Sample for HTML Table insertion](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/list-example-1.png)

**Nested Lists**

JSON representation of the input data:

```json
{
  "List_Data": "<ol><li>Level 1</li><li>Level 1<ol><li>Level 2</li><li>Level 2<ol><li>Level 3</li><li>Level 3</li></ol></li></ol></li></ol>"
}
```

A list built from the html string given in the input json takes the place of the placeholder tag.

[Figure: Sample for HTML Table insertion](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/nested-numbered-lists-example.png)

- Within the input JSON data, any Placeholder Tag whose value holds a `<ul>` or `<ol>` HTML element belongs in its own separate paragraph in the input document template.

- List elements can only be styled inline, i.e. through the style attribute of `<ol>` & `<ul>`.

- Customizing how list markers look is handled by the `list-style-type` property, which accepts a range of options: disc, circle, square, decimal, decimal-leading-zero, lower-roman, upper-roman, lower-alpha, and upper-alpha.

**Example of list marker customization**

JSON representation of the input data:

```json
{
  "List_Data": "<ol style = \" list-style-type : upper-roman; \"><li>Coffee</li><li>Tea</li><li>Milk</li></ol>"
}
```

A list built from the html string given in the input json takes the place of the placeholder tag.

[Figure: Sample for HTML Table insertion](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/upper-roman-list-example.png)

### Insert Lists using Repeating Sections

By repeating across a list, generate numbered or bullet lists on the fly.

**How to insert Lists**

[Video](https://images-tv.adobe.com/mpcv3/5158/d58772af-7a62-49fa-a098-12b11a27fb71_1615917048.854x480at800_h264.mp4#t=3)

JSON representation of the input data:

```json
{
  "products": [
    {
      "productName": "Adobe Photoshop"
    },
    {
      "productName": "Adobe Premiere Pro"
    },
    {
      "productName": "Adobe InDesign"
    }
  ]
}
```

**Numbered Lists**

Produce a numbered list dynamically by dropping it inside a repeating section.

[Figure: Template tag items are replaced by numbered list](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/numbered-list.png)

**Bullet Lists**

Produce a bullet list dynamically by dropping it inside a repeating section.

[Figure: Template tag items are replaced by bullet list](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/bullet-list.png)

**Simple Lists**

JSON representation of the input data in case of simple lists:

```json
{
  "products": ["Adobe Photoshop", "Adobe Premiere Pro", "Adobe InDesign"]
}
```

Produce a numbered or bullet list dynamically by dropping it inside a repeating section.

[Figure: Template tag items are replaced by numbered or bullet list](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/simple-lists.png)

### Numerical Calculations

Running numerical calculations against the input data.

**How to insert Numerical Calculations**

[Video](https://images-tv.adobe.com/mpcv3/5158/e5e5e7c6-a63c-45cf-8a17-b60291068626_1615916868.854x480at800_h264.mp4#t=3)

Every supported calculation is [JSONata compliant](https://docs.jsonata.org/overview.html).

Wrap all calculations inside _expr()_.

JSON representation of the input data:

```json
{
  "revenue": "1000",
  "expenditure": "650",
  "subscriptions": [
    {
      "description": "Adobe Photoshop",
      "licenses": "1"
    },
    {
      "description": "Adobe Premiere Pro",
      "licenses": "2"
    },
    {
      "description": "Adobe InDesign",
      "licenses": "1"
    }
  ]
}
```

**Arithmetic**

Carries out basic arithmetic operations.

[Figure: Performing simple arithmetic to show revenue-expenditure](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/arithmetic.png)

The arithmetic operations supported are +, -, \*, /, % .
An arithmetic numerical calculation applies only to input fields that map to a number.

**Aggregation**

Carries out aggregations across a list of elements.

[Figure: Performing simple arithmetic to show aggregation](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/aggregation.png)

The [supported aggregation functions](https://docs.jsonata.org/aggregation-functions) are listed here
An aggregate numerical calculation applies only to a list of numbers.

### JSONata Functions

A range of JSONata functions are supported by the Document Generation API, among them:

- [String Functions](https://docs.jsonata.org/string-functions)
- [Numeric Functions](https://docs.jsonata.org/numeric-functions)
- [Aggregation Functions](https://docs.jsonata.org/aggregation-functions)
- [Boolean Functions](https://docs.jsonata.org/boolean-functions)
- [Array Functions](https://docs.jsonata.org/array-functions)
- [Date/Time Functions](https://docs.jsonata.org/date-time-functions)
- [Higher Order Functions](https://docs.jsonata.org/higher-order-functions)

Before you build these functions into your template, testing them first is advised.

### Adobe Sign

Anywhere inside the document template's contents, Adobe Sign text tags may be placed.

When the finished document goes out for signing through Adobe Sign, these tags turn into Adobe Sign form fields.

To learn about the various Adobe Sign text tags, visit the [Adobe Sign Text Tag Guide](https://helpx.adobe.com/in/sign/using/text-tag.html).

## Word Add-in

With the Document Generation Word Add-in you can author templates that generate data-driven Word and PDF documents. It lets you add assorted tags and gives users a smooth way to author templates. For a walkthrough of using the add-in, see the [Add-in Demo](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/wordaddin.md#add-in-demo).

You can get the Adobe Document Generation Word Add-in [here](https://appsource.microsoft.com/en-us/product/office/WA200002654).

### Add-In Demo

No coding knowledge is required to work with the Document Generation add-in. Everything is handled on your behalf by the system, as the clip below demonstrates:

[Video](https://images-tv.adobe.com/mpcv3/5158/38713027-f9e6-4020-ac97-7de5d873476f_1615914905.854x480at800_h264.mp4#t=1)

### How to install

The Document Generation [Word Add-in](https://appsource.microsoft.com/en-us/product/office/WA200002654) is available through the Microsoft Office store. Either the browser-based or the desktop edition of MS Word can host this add-in. How you reach the store varies a little depending on which environment you run. Step-by-step guidance for each is laid out further down.

Enterprise Users whose organizational Office 365 Admins (or anyone holding admin rights) can roll the add-in out from a single point by [installing the add-in at the tenant level](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/wordaddin.md#installing-at-the-tenant-level), with optional per-user access control.

**Installing the add-in for the web-based client**

- Sign in to your 365 Office account and launch Word.
- Open the **Insert** tab and choose the **Add-ins** icon located in the insert section. This brings up the Office Add-ins pop-up page.

[Figure: Insert tab in Microsoft Word Web](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/browser-insert-tab.png)

[Figure: Select Add-Ins under the Insert tab in Microsoft Word Web](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/browser-addin-tab.png)

- Look for the **Adobe Document Generation** add-in under the **MY ADDINS** tab on the Add-ins pop-up page.
- When the add-in has not yet been enabled or installed, switch to the **STORE** tab inside the Office Add-ins pop-up.

Should you hit a problem like the one shown below while trying to reach your Office Add-ins store, reach out to your organizational Office 365 Admins so they can [Add-in installed at the tenant level](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/wordaddin.md#installing-at-the-tenant-level).

[Figure: Error message for enterprises when their organization has disabled access to Office Store in Microsoft Word Web](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/enterprise-error.png)

- If not, type **Adobe Document Generation** into the search box at the top left and press the add button.

[Figure: Office Add-Ins search result for Adobe Document Generation in Microsoft Word Web](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/document-generation-search-browser.png)

- Once the add-in is enabled or installed, a fresh Adobe Document Generation add-in shows up on the Home tab.

[Figure: Adding Document Generation in you home tab in Microsoft Word Web](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/browser-final2.png)

**Installing the add-in for the desktop client**

- Start your desktop Office application.
- Open the **Insert** tab and pick the **Get Add-ins** option.

[Figure: Insert tab in Microsoft Word](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/desktop-insert-tab.png)

[Figure: Select Add-Ins under the Insert tab in Microsoft Word](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/desktop-addin-tab.png)

- Look for the **Adobe Document Generation** add-in under the **MY ADDINS** tab on the Add-ins pop-up page.
- If the add-in has not been enabled or installed yet, move to the **STORE** tab in the Office Add-ins popup.

Should you hit a problem like the one shown below while trying to reach your Office Add-ins store, reach out to your organizational Office 365 Admins so they can [Add-in installed at the tenant level](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/wordaddin.md#installing-at-the-tenant-level).

[Figure: Error message for enterprises when their organization has disabled access to Office Store in Microsoft Word](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/enterprise-error.png)

- If not, type **Adobe Document Generation** into the search box at the top left and press the **add** button to install.

  [Figure: Office Add-Ins search result for Adobe Document Generation in Microsoft Word](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/document-generation-search-desktop.png)

* Once the add-in is enabled or installed, a fresh Adobe Document Generation add-in shows up on the Home tab.

[Figure: Adding Document Generation in you home tab in Microsoft Word](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/browser-final2.png)

For thorough Add-In installation steps, consult Microsoft's official [Microsoft Add-In Installation Guide](https://support.microsoft.com/en-us/office/view-manage-and-install-add-ins-in-office-programs-16278816-1948-4028-91e5-76dca5380f8d).

### Installing at the Tenant level

Deploying at the tenant level lets the admin surface the add-in automatically, which spares users from doing the install themselves and guarantees trouble-free access for everyone.

For the entire user base, the procedure below switches the add-in on at the tenant level. [Check here if you would like more granular control over the deployment.](https://docs.microsoft.com/en-gb/microsoft-365/admin/manage/manage-deployment-of-add-ins?redirectSourcePath=%252fen-us%252farticle%252fdeploy-office-add-ins-in-the-office-365-admin-center-737e8c86-be63-44d7-bf02-492fa7cd9c3f&view=o365-worldwide)

[Determine if Centralized Deployment of add-ins works for your organization.](https://docs.microsoft.com/en-gb/microsoft-365/admin/manage/centralized-deployment-of-add-ins?view=o365-worldwide)

**The enablement is quick and easy, taking only about 5 minutes**:

- Sign in with the Tenant admin account and reach the admin center via the app launcher.
- Inside the admin center, head to the Settings > Add-ins page. Can't find the Add-in Page? Then go to Settings > Integrated apps instead.
- Near the top of the Integrated apps page, click the Add-ins link.

[Figure: Microsoft 365 Admin Center Add-In tab](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/admincenter-addin-tab.png)

- Choose Deploy Add-in at the top of the page, then click Next.
- Pick the option to add an add-in from the Office Store. Into the search box at the top left, type **Adobe Document Generation** and press the add button.

[Figure: Microsoft 365 Admin Center tenant search results for Adobe Document Generation](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/tenant-search.png)

- Assign Users
  - Everyone - Rolls the deployment out to every user across the Tenant.
  - Specific users/groups - Limits the rollout to whichever users or groups you pick.
  - Just me - Confines the rollout to the admin alone who is setting things up

[Figure: Microsoft 365 Admin Center assigning Add-In to the user](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/admincenter-assign-user.png)

- Once users are assigned, click Deploy.

A relaunch of Office may be required before the add-in icon appears on the app ribbon.
