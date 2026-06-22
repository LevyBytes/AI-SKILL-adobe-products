# Vip Mp Onboarding Guide

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

Customers on the Value Incentive Program (VIP) Marketplace can use this onboarding guide, which walks through:

- Prerequisites (IT Administrator)
- Creating credentials and using Acrobat Services (Developer)
- Getting support for Acrobat Services
- Developer resources

Confirm that the prerequisites listed below are all satisfied before you begin.

## raw_githubusercontent_com_AdobeDocs_pdfservices_api_documentation_main_src_pages_overview_pdf_services_api_vip_mp_onboar — Prerequisites (IT Administrator)

1. Sign in to your [VIP Admin Console](https://adminconsole.adobe.com/) and verify that the "Acrobat Services API - DOC TRANS PACK" product shows up among your available products, as illustrated below.

   [Figure: VIP Admin Console](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/vip-admin-console.png)

2. Under the Quick links section, choose "Add Developers". As an alternative path, open the "Manage" link within the Users section, pick the "Developers" card, and then press the "Add Developers" button.

   [Figure: Quick_Links](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/quick-links.png)

   [Figure: Add_Developers](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/add-developers.png)

3. As you add the developer, confirm that "Acrobat Services API - DOC TRANS PACK" is the product you have selected.

   [Figure: Select Product](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/select-product.png)

   [Figure: Add Developer_and_Product](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/add-developer-and-product.png)

4. After your selections are made, press save.

With all of that configured, developers are able to generate the credentials themselves (following the steps further down) and run the Adobe Acrobat Services API against a production environment.

## raw_githubusercontent_com_AdobeDocs_pdfservices_api_documentation_main_src_pages_overview_pdf_services_api_vip_mp_onboar — Creating credentials and using Adobe Acrobat Services (Developer)

1. Head to the [Adobe Developer Console](https://developer.adobe.com/console/).

   [Figure: Developer Console Home](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/developer-console-home.png)

2. Sign In or Sign Up using whichever Adobe ID was assigned to the product.

3. Within the Quick Start section, choose "Create new project".

   [Figure: Create_New_Project](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/create-new-project.png)

4. On the page that follows, choose "Add API".

   [Figure: Add_API](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/add-api.png)

5. Pick "Document Cloud", then the "Adobe Acrobat Services API - VIP" product, and press "Next".

   [Figure: Select_API](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/select-api.png)

6. Type a name for your credential and press Next.

   [Figure: Change Crendential Name](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/change-credential-name.png)

7. Choose the Product Profile, then press "Save Configured API".

   [Figure: Select_Product_Profile](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/select-product-profile.png)

8. The credentials are generated at that point, and you can begin calling the APIs with the help of the API Documentation found [here](https://developer.adobe.com/document-services/docs/apis/).

## raw_githubusercontent_com_AdobeDocs_pdfservices_api_documentation_main_src_pages_overview_pdf_services_api_vip_mp_onboar — Getting support for Adobe Acrobat Services

Use the procedure below to raise and track a support ticket by way of our Admin Console:

Someone holding the Administrator or Support Admin role on your Enterprise account must log in to the Admin Console and head to Support. When you need to settle or talk through a case, ring Adobe Customer Care at the phone number shown in the page's top-right corner. Should the country printed beneath that number differ from yours, choose Other Regions to find additional contacts. For details on our support terms and how the process works, consult Enterprise Support Terms.

Expect a first reply within one business day. Although Adobe strives to answer promptly, it makes no promise to resolve every issue or to patch bugs by any set deadline.

### Create a Support Case

Follow these steps to open a case:

1. From the Admin Console, go to **Support > Support Summary**.

2. Press **Create Case**. The **Create Case** window appears.

   [Figure: Create_Case](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/create-case.png)

3. Choose the Product Impacted.

   [Figure: Select_Product_Impacted](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/select-product-impacted.png)

4. For the Specific Product Impacted, pick "Acrobat Services API".

5. Supply additional detail about your problem in the window that opens.

| **Details to be filled** | **Description** |
| --- | --- |
| **Specify the product impacted** | Enter the product's name in the field provided. Typing the opening letters of the name surfaces a list of choices. When you open a case to manage users and licenses, this field is not offered. |
| **Select the specific product impacted** | Select "Acrobat Services API". |
| **Select the issue Reason** | From the dropdown, pick whichever reason best fits the issue. |
| **Select the priority of the issue** | Rate it according to how badly the issue disrupts your operations: o **P4 (Minor)**: Pick this when nothing significant about normal operations is disrupted. Examples include API and integration matters, questions about installation or configuration, requests for enhancements, or documentation queries. o **P3 (Important)**: Pick this when normal operations are interrupted — for instance, software that behaves incorrectly or malfunctions. o **P2 (Urgent)**: Reserve this for grave disruptions to your business's normal operations, such as an issue that harms an enterprise-wide installation, threatens pressing deadlines, or exposes the business to financial risk. |
| **Quantify the impact of the issue** | Judging by how widely the issue spreads across your organization, choose one of these: o **Small:** just a user or two feeling the effect o **Medium:** a single defined cluster of users feeling it o **Large:** nearly your whole user base affected. |
| **Summarize the issue** | Give a clear rundown of the problem, noting exactly what is wrong and what you observe. Examples of descriptive summaries: o Error "Could not process incoming SAML response" with Federated ID o "Account not recognized" in the support panel o Error 400 or other error when attempting to validate a domain claim o Users, groups, or identity panel is blank o Change Domain Claim from Enterprise ID to Federated (or conversely) o Receiving the error "An invitation with this code was not found". |
| **Describe the nature of the issue you're facing** | Lay out your questions or spell out the issue thoroughly, covering the workflow that triggered it and how to reproduce it. Note when you first saw it happen. |
| **Attach screenshots or files that can help describe the issue (optional)** | Files smaller than 20 MB may be attached to the case — a screenshot of the error, for example. Note that executable and DLL files cannot be uploaded. |

**Note:** When the issue triggers outages or grave disruptions to a production system like those listed below, phone Adobe Customer at the number printed in the upper-right corner of the Support Summary page.

o The production system going down entirely, or its core functions being disrupted.

o The integrity of your data being compromised.

o Looming monetary losses from blown critical project deadlines or undelivered work.

8. Press **Next** to supply further detail about the issue. On the screen that comes up, complete the fields below:

| **Details to be filled** | **Description** |
| --- | --- |
| **List people you want to notify** | Supply extra email addresses where Adobe Customer Care should email case updates. As many as ten recipients can be notified. |
| **Phone number** | Give a contact number so an Adobe Customer Care agent can phone you to troubleshoot or seek clarification. |
| **Time zone** | Drawing on your system's information, the time zone fills in automatically. |
| **Working hours** | Slide the time control to tell us which part of the day suits you best for contact. |

9. Press **Submit**. The support case gets created and a notification shows up.
   Submitting a case assigns it a case ID, and the Admin Console lets you follow its progress. Every reply is logged to the case and emailed to you as well.
   To see the specifics or make changes to a support case, click the case's title on either the **Support Summary** or the **Support Cases** page.

## raw_githubusercontent_com_AdobeDocs_pdfservices_api_documentation_main_src_pages_overview_pdf_services_api_vip_mp_onboar — Developer Resources

To begin and to stay connected over time with both the Adobe team and other developers building on the Adobe APIs, the links below are worth keeping handy.

- [Documentation](https://developer.adobe.com/document-services/docs/overview/)
- [Community Forum](https://community.adobe.com/t5/document-services-apis/bd-p/Document-Cloud-SDK?page=1&sort=latest_replies&filter=all)
- [Developer Resources](https://developer.adobe.com/document-services/resources/)
- [Adobe Tech Blog](https://medium.com/adobetech/tagged/adobe-document-cloud)
