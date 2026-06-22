# Learn About Signatures, Request E Signatures

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: E-sign documents; Digital signatures overview; E-signatures overview; Prepare for certified digital signing; Permissions and limitations of signed PDFs; Send documents for e-signature; Request e-signatures in bulk; Manage agreements; Manage agreements sent in bulk.

## E-sign documents

### Learn about Acrobat signatures

Digital signatures overview

E-signatures overview

Prepare for certified digital signing

Permissions and limitations of signed PDFs

### Request e-signatures

Send documents for e-signature

Request e-signatures in bulk

Manage agreements

Manage agreements sent in bulk

### Manage digital signatures

Certify PDFs

Compare signed document versions

Validate digital signatures

View signed and certified PDF portfolios

Set certificate trust level

Set preferences for validating digital signatures

### Fill and sign documents

E-sign agreements

Add digital signatures

Personalize digital signatures

Modify e-signatures

Sign in preview mode for integrity

Add time stamps

Add verification information

Set up roaming ID accounts

Manage certificates on directory servers

## Digital signatures overview

### See the role Acrobat digital signatures play in confirming a document is genuine, guarding it from tampering, and keeping it compliant.

Built on a certificate-based digital ID, a digital signature gives you an encrypted, secure means of signing PDF files and checking them afterward. It pins down who the signer is, vouches for authenticity, and shields the file against edits nobody approved. Both digital IDs you generate yourself and certificates issued by trusted outside providers work in Acrobat, which keeps documents intact and aligned with the compliance rules an industry expects.

What makes a certificate-based digital signature distinct is that it ties the document to one specific signer and leans on encryption to guard it. Behind it sits a digital ID, pairing a private key used for signing with a certificate used to confirm that signature.

### Key features and capabilities

- Put signatures and certifications on PDFs by way of certificate-based IDs.
- Confirm signatures while keeping tabs on what changed in a document.
- Grant rights for filling forms or leaving comments yet hold editing back.
- Lean on timestamps so validation holds up over the long haul.

Two distinct digital signature paths are available in Acrobat:

- Apply a digital signature to a document as a sign-off of approval.
- Lock down a document through certification, which governs edits and signs off on its content. A certification may show or stay hidden, yet it has to land ahead of any other signatures.

### Security and compliance standards

Among the core strengths of Acrobat's digital signature and security toolkit are these:

- Conformance with the ETSI, PAdES, and CAdES standards that govern data protection.
- Handling of XML data signatures so XFA forms can be signed, aligned with the W3C XML-Signature standard covering integrity, authentication, and non-repudiation. An XML signature sits in one of two states, valid or invalid, and the slightest edit to the content flips it to invalid.
- Connectivity to Adobe LiveCycle Rights Management (ALCRM) servers, which centralize access policies, govern what users may do, and underpin document auditing, with each policy keyed to a recipient or an LDAP user list.
- Keeping password-protected Digital IDs in PKCS #12 files, on smart cards, on tokens, or in the Windows certificate store. The Acrobat signature handler can reach IDs wherever they live, provided each one has been registered first.

Note

For a deeper look at digital IDs, signing preferences, and Adobe LiveCycle Rights Management servers behind secure document signing in Acrobat, head to the Acrobat Desktop Digital Signatures Guide.

### Alternatives for organizations without certificate-based signatures

Register for Adobe Acrobat Sign online and you get a simple way to route, sign, and keep track of PDFs, Word files, and other formats. Because the service runs on Adobe's own securely hosted infrastructure, your IT staff never has to stand up or maintain any e-signature systems of their own.

### Resources

- Adobe Approved Trust List: The Adobe Approved Trust List (AATL) is a program that lets millions of people around the globe produce digital signatures carrying trust the moment a signed file opens in Acrobat or Reader. Check out the current members.
- Adobe Security and Privacy Portal: A solid starting point for everything tied to security and privacy at Adobe.
- Certified Document Services: Certified Document Services (CDS) came before the AATL as its forerunner.
- Content Security Library: Thorough reference material on administering Adobe certificate signatures.
- Managing Digital IDs: Help pages for digital ID management.

## E-signatures overview

### Learn how e-signatures in Acrobat simplify document signing, approval, and verification.

Putting your signature on a document is a way to vouch for what it says or to give it your approval. Acrobat's e-signature capability hands you the tools to route documents, sign them, and keep them organized, all electronically.

### Signing PDF documents or forms

Signing a PDF document or form can happen in these ways:

- Type it out, sketch it, or drop in a scanned image of the signature you write by hand.
- Layer on details like your name, company, title, or the date.
- Commit the file so the signature and that text become part of the PDF.

### Syncing signatures across devices

The signature sync capability opens up the following:

- Snap a photo of your signature through the Adobe Acrobat Reader mobile app.
- Carry that stored signature across your desktop, web, and mobile devices.
- Park your signature in Adobe cloud storage and let it sync on its own.
- Pull your signature down on the spot while signing whenever it isn't already saved on the device.

### Requesting signatures from others

Signature requests go out through the Fill & Sign tool, which runs on Adobe Acrobat Sign cloud services behind the scenes. The people you ask never need an Acrobat subscription, and they can complete agreements from any location with just a web browser or a mobile device.

### Supported file types for signing

Beyond PDFs, the file types you're able to route for signing include:

- Microsoft Office files: DOC, DOCX, RTF, XLSX, PPT, PPTX
- Text files: TXT, CSV
- Web files: HTML, HTM
- Image files: TIFF, TIF, BMP, GIF, JPG, JPEG, PNG

### Signers experience

When a document lands with a signer for signature, this is what they run into:

- An email shows up carrying a link that takes them to sign the agreement.
- Anyone in Acrobat or Acrobat Reader picks up an in-app notification as well.
- Finishing the signing takes no sign-up and no Acrobat subscription whatsoever.

### Signing component PDFs and PDF portfolios

Signing can target one file at a time or the whole portfolio, handled a few different ways:

- To lock component PDFs against edits: Put your signature on a component PDF inside the portfolio. That signed file stays right where it is, saved in the portfolio.
- To sign the portfolio as a whole: Sign the cover sheet. After the cover sheet carries a signature, any further signatures land only on the cover sheet, never on the documents inside.

### Viewing signed and certified PDF portfolios

Open a signed or certified portfolio and the signature details lay out like this:

- One or more signatures live inside any signed or certified PDF portfolio.
- Whichever signature ranks highest is the one shown in the toolbar's signature badge.
- The cover sheet is where the full set of signature details can be found.
- Rest your pointer on the signature badge to surface the signer's name, click it to pull up details on the cover sheet, and watch for a warning icon flagging an invalid signature.

## Prepare for certified digital signing

### Walk through getting certificate-based signatures installed and dialed in within Acrobat, so your document signing stays secure and verifiable.

Making the signing process smoother while staying compliant comes down to three things: getting hold of a digital ID, setting up the environment you'll sign in, and picking the signature type that fits. No matter whether the signing is personal, corporate, or for government work, standing up certificate-based signatures is what backs document authenticity and keeps you compliant.

Track down a digital ID, if one isn't already in hand, by any of these routes:

- Ask your organization to issue you one
- Buy it through an Adobe security partner
- Generate a self-signed digital ID right inside Acrobat

Head to Menu on Windows, or Acrobat on macOS > Preferences > Signatures.

Beneath Creation & Appearance, select More.

Within the Creation and Appearance Preferences dialog box:

- Pick the default signing method you'd rather use.
- Down under Appearances, select New and build a signature appearance.

Select OK.

Back in the Preferences dialog box, select Security (Enhanced).

To turn document preview mode on, tick the Enable Protected Mode at startup checkbox. For background, see: Learn how to sign in preview mode for integrity.

Dismiss the Preferences dialog box with Select OK

Look over every page of the document ahead of signing, since signature fields can turn up across several pages.

Set up the signing application. Configuring those application settings is a job for both the people authoring documents and the people signing them.

Pick the signature type that suits.

Note

Check the Digital signature overview to grasp how approval signatures differ from certification signatures.

## Permissions and limitations of signed PDFs

### Get a handle on what signed PDFs in Acrobat do and don't allow — covering edits, locking, and the case of several signatures at once.

Putting a digital ID on a PDF changes how the document can be edited and reached afterward. Use the topics below to learn at what point PDFs end up locked, how an unsigned copy can be recovered, and what habits keep signing-related restrictions from cropping up down the road.

### Permissions and editing signed PDFs

Get clear on what is and isn't possible once a PDF has been signed:

- When you're the lone signer, you can pull your signature off by right-clicking it and choosing Clear Signature, freeing the document for changes.
- When other people have already signed the PDF, you'll need to ask for the original unsigned copy or have a signer pull their signature.

### Retrieving unsigned PDFs

Editing a signed document sometimes means rolling back to a version without signatures:

- When you're the only one who signed, clear your signature and go ahead and edit.
- When several people signed, ask whoever started it to hand over an unsigned version or the source file.

### Preventing future issues

Heading off trouble with later edits or extra signatures comes down to a few good habits:

- Stash a backup of the unsigned PDF before you ever sign it.
- Hold onto an original, unsigned copy of any document by choosing Menu > Save as.
- Steer clear of ticking the Lock document after signing checkbox option whenever more signatures will be needed.

### Limitations and editing restrictions

What digital signatures mean for editing a document:

- Applying a digital ID or certificate to a PDF seals it, so no more edits can be made afterward.
- Once the file is locked at signing time, both edits and any extra signatures are shut out.

### Handling locked PDFs and multiple signatures

Why the locking behaviour and the order of signing matter:

- As soon as a digital signature lands on a PDF, everyone else sees it as read-only.
- Turn on the Lock document after signing option and the file is sealed for good, the signer included.
- Should a PDF lock itself after that first signature, your only route is to rebuild it or ask the owner for a fresh copy. Out of the box, PDFs stay open to signing right up until the signer picks Lock document after signing.
- That leaves one fix: build the PDF again, or get an unsigned copy from whoever owns the document.

## Send documents for e-signature

### Use the Request e-signatures feature to have other people e-sign your documents.

Whether you're naming recipients or marking the spots that need a signature, the desktop version of Acrobat keeps sending documents out for signature straightforward.

These file types are accepted: DOC, DOCX, RTF, XLS, XLSX, PPT, PPTX, TXT, CSV, HTML, HTM, TIFF, TIF, BMP, GIF, JPG, JPEG, and PNG.

Select E-Sign > Request e-signatures.

When the dialog box appears, type in the name and email of the recipient, then choose Prepare document.

Need more people on it? Hit the plus icon and pick Add recipient, Add yourself, or Add CC.

Want a set signing sequence? Tick the Recipients must sign in order checkbox, then drag the names around to reorder them.

Select Prepare document.

Once you've added everyone, fixed the signing order, and chosen Prepare document, you move on to placing the fields.

Once you've added everyone, fixed the signing order, and chosen Prepare document, you move on to placing the fields.

On the page that comes up, pick a field type, then click the spot on the document where the field should land.

Pull fields such as signature and name onto the page for each recipient; the left panel is where you assign and tailor them before the document goes out.

Once a field is dropped, a context menu lets you tailor it:

- Mark a field as required
- Change the assigned recipient
- Customize the field
- Delete, copy, or clone and link the field

On the Review and send page, look over the agreement details, dial in a reminder frequency if you like, and choose Send.

Go over the agreement name, message, recipients, and reminder settings, and when it all checks out, choose Send to pass the document along for signing.

Go over the agreement name, message, recipients, and reminder settings, and when it all checks out, choose Send to pass the document along for signing.

A confirmation message comes up, offering you the chance to:

- Save the agreement as a template
- Track the agreement
- Send another agreement

## Request e-signatures in bulk

### On desktop Acrobat, build and dispatch several agreements at once for bulk signing.

Push documents out to a whole list of recipients and collect their e-signatures all at once. Every agreement stands on its own with a separate audit report, and none of the signers know the others exist.

Note

You'll only find the Send in bulk feature if you hold an active subscription to Acrobat Pro or Acrobat Pro for teams.

Select E-Sign > Send in bulk.

From here you're handed off to Acrobat Sign to finish the workflow.

Choose Choose files, grab the documents meant for bulk signing, and then choose Confirm.

If you need to, tweak the title over in the Agreement name field and reword whatever sits in the Message field.

Click the icon beside Agreement settings to adjust the completion deadline, reminder frequency, password requirements, and the recipients' language however you need, then choose Continue.

Choose Add recipients and type the recipients' email addresses with commas between them. Press Enter to turn those addresses into a list, and tack on the recipients' names if you want.

Up to 50 recipients can go on the list. After they show up as a list, drop any of them by choosing the Delete icon.

Up to 50 recipients can go on the list. After they show up as a list, drop any of them by choosing the Delete icon.

Open the Email dropdown menu and settle on whichever authentication method you need.

Select Preview & add fields.

For every recipient in the RECIPIENTS section, drag the signature and form fields wherever they belong in the document.

Tick the Save as template checkbox and the agreement gets stored as a template.

Tick the Save as template checkbox and the agreement gets stored as a template.

Select Send.

A confirmation message tells you the agreement went out fine. Built from your template, each recipient receives their own copy. The post-send page lets you:

- Send another in bulk – Start a new bulk send.
- Manage this bulk send – View agreement details, track status, access audit trails, and send reminders from the right pane.

## Manage agreements

### Learn to track and manage agreements at different signing stages.

Keep tabs on pending, signed, or approval-ready agreements right inside Adobe Acrobat. Watch their status, fire off reminders, pull up signed copies, and keep everything moving.

Select Go to Home view , then under Agreements, select:

- Adobe Acrobat Sign for Enterprise users
- All agreements for Individual and Teams users

To sort agreements by their status, pick one of these under Agreements:

- All agreements: Agreements across all statuses
- In progress: Agreements currently being processed
- Waiting for you: Agreements requiring your signature
- Completed: Agreements signed by all parties
- Drafts: Agreements saved as drafts
- Templates: Reusable agreement templates
- Canceled: Canceled agreements
- Expired: Agreements that have passed their signing deadline

Click an agreement and the right pane lays out these details:

- Agreement status
- Expiration date
- Date and time of creation
- Activity status of each recipient
- Activity report of the agreement

Calling off an agreement means choosing Cancel agreement, jotting down a reason if you wish, ticking the Notify participant via email checkbox when appropriate, and then choosing Cancel Agreement.

To nudge recipients along, choose Reminders, add a message if you like, then choose Send.

Passing a draft agreement to someone means opening it, choosing Share, and walking through the sharing workflow.

## Manage agreements sent in bulk

### In Adobe Acrobat, keep an eye on and handle agreements pushed out for bulk e-signature.

Select Go to Home view , then under Agreements, select:

- Adobe Acrobat Sign for Enterprise users
- All agreements for Individual and Teams users

Select Manage from the menu.

Choose Bulk sends, then from the list pick out the agreement you'd like to handle.

Inside Adobe Acrobat you can oversee and follow your Bulk Sends, with the ability to check status, fire reminders, pull down reports, and run further actions.

Inside Adobe Acrobat you can oversee and follow your Bulk Sends, with the ability to check status, fire reminders, pull down reports, and run further actions.

Look over whatever metadata applies:

- Bulk Send title
- Sent date
- Sender’s email
- Bulk Send status
- Initial email message
- CC’d recipients

The Actions menu gives you options for handling the Bulk Send:

- Open Bulk Send: Access the Bulk Send
- Remind: Send a reminder to yourself or pending signers
- Cancel: Cancel the Bulk Send
- Download PDF: Download the complete agreement as a PDF
- Download Form Field Data: Export a CSV of field data from completed child agreements
- Download Error Report: Retrieve a report of errors encountered
- Download Individual Documents: Download each file separately as a PDF if multiple files are used
- Hide/Unhide Bulk Send: Toggle visibility in the Manage page
- Share: Email the Bulk Send to another user with view-only access
- View Activity Report: Track the status of all child agreements
- Add Notes: Add personal notes to the Bulk Send

Under Agreements, choosing a status filters the child agreements:

- All: View all agreements generated from the Bulk Send template
- In Progress: Track agreements awaiting participant signatures
- Canceled: Review agreements canceled by the sender or declined by the participant
- Completed: Access agreements signed by all participants
- Waiting for You: Sign agreements pending for your countersignature

Choose Activity for a time-ordered log of everything done to the parent Bulk Send template, things like its creation and completion.
