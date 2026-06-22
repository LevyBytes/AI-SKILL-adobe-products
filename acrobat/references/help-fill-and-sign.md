# Digital Identity Overview, E Signatures Legal Compliance Overview, Fill Sign Documents, Share Filled Signed Documents ...

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Digital identity overview; E-signatures legal compliance overview; Fill and sign documents; Share filled and signed documents; Fill and sign supported file formats; Types of signatures.

## Digital identity overview

### Learn about the basics of digital identity.

Think of a digital identity (digital ID) as an electronic passport: it lets you prove who you are in a secure way, for instance whenever you e-sign a document. Each digital ID rests on a digital certificate that a trusted third party — a bank or a government, say — hands out only after putting your identity through a rigorous check. That backing is what guarantees the party approving an e-signature really is the person they claim to be.

### Digital certificates

Built on the X509 standard, a digital certificate is an electronic record of data tied to either a person or an organization. Where it lives is usually a password-protected file sitting on a computer or network, a USB token, a smart card, or some comparable piece of security hardware.

### Certificate Authority (CA)

For e-signing and certifying documents, the digital certificates involved come from a Certificate Authority (CA).

### Trust Service Provider (TSP)

Secure identity and transaction services are what a Trust Service Provider (TSP) delivers, and that includes handing out the digital signing certificates used to build and check digital signatures. Organizations working with Acrobat Sign can pick among several TSPs, and the service draws on trust lists such as the Adobe Approved Trust List (AATL) and the European Union Trusted Lists (EUTL).

### Qualified Trust Service Provider (QTSP)

When an accredited auditor certifies a TSP to issue the digital certificates behind top-tier digital signatures — qualified electronic signatures (QES) among them — that provider becomes a QTSP. Take the EU as an example: the digital certificates needed to produce a QES that every EU Member State will honor can come only from a QTSP. Bear in mind that regulations in different countries may label this differently.

### Identity Provider (IDP)

Typically a government body or a private-sector organization, an Identity Provider (IdP) runs a trusted digital identification service. Nobody receives a digital ID for transactions and document signing until their identity has been put through a careful verification. To see the list of IdPs you can use within Adobe Acrobat Sign, consult the Cloud signature identity providers (IdP).

### More like this

- Fill and sign documents
- Types of signatures
- E-signatures legal compliance overview

## E-signatures legal compliance overview

### Learn about the legal compliance related to digital signatures and certificates.

### Adobe trust programs

- AATL (Adobe Approved Trust List): A worldwide network bringing together CAs, TSPs, and timestamp service partners, set up so users can check PDF-standard digital signatures without friction.
- EUTL (European Union Trusted Lists): Public registers of TSPs that have earned accreditation under the EU eIDAS regulation, each one supplying certificate-based digital IDs along with other trust services.

### Open standards

- Portable Document Format (PDF): Adobe created this file format, and it became the ISO 32000 standard back in 2008. Within it sit the signature types and additional particulars that shape how signature workflows behave.
- Cloud Signature Consortium (CSC): A body that writes the standards governing cloud-based digital signatures, with backing for both web and mobile applications.
- OpenID Connect (OIDC): An authentication protocol built on top of OAuth 2.0, it lets users rely on a third-party identity provider (IdP) when they authenticate.
- Public Key Infrastructure (PKI): A framework for generating, holding, and handing out digital certificates, relied on to confirm a user's identity securely and to keep a signed document's integrity intact.

### Compliance

- Legality kit: Worldwide e-signature laws and regulations are spelled out in the Adobe e-signature legality kit.
- E-signature framework: Offered to the public as a tool, the Adobe e-signature framework helps customers map out how e-signature types, document categories, the signer's status (knowledge of signer), and signer identification methods relate across various e-signature use cases (or exceptions). It exists to strengthen the risk analysis already in place, to nudge organizations toward thinking hard about their e-signature policies, and to give internal conversations about those policies a more productive footing.
- Time stamps and Long Term Validity (LTV): Locking down both the signer's identity and the document, time stamps sit at the heart of digital signature compliance. LTV is what keeps a signed agreement valid even after the signer's certificate has expired.

### More like this

- Fill and sign supported file formats
- Digital identity overview
- Share filled and signed documents

## Fill and sign documents

### Learn how to fill and sign documents online via Acrobat on the web.

Want to complete and sign a document in Acrobat on the web? Go to E-Sign > Fill & Sign, then pick Select a file and browse your device to bring the document in.

The document opens with the Fill & Sign tools on display. From here you can populate the form fields and sign using the sign tools, following the topics laid out below.

### Fill text fields

Over in the left panel, pick Fill in form fields, then click the field you'd like to type into.

Filling a text field is a matter of picking the Text tool and typing whatever the field calls for.

Filling a text field is a matter of picking the Text tool and typing whatever the field calls for.

Click the text field once more and key in your text.

Need the text box lined up with the text field? Select it and hover; the moment a plus icon with arrows appears, drag the box to wherever it should sit.

To make an edit, click the text box; once the cursor and keypad show up, change the text and click somewhere else to commit it.

Adjust the text size by picking A or A as the situation requires.

Note

The very first annotation you drop should be sized to match a checkbox or radio button in the document; every annotation you add afterward inherits that size and slots neatly into the remaining box or circle fields.

For a different text color, pick Choose color in the Quick Actions toolbar and click whichever shade you want from the color palette.

Keep signatures free of color formatting by ticking the 'Use original signature color' checkbox.

Keep signatures free of color formatting by ticking the 'Use original signature color' checkbox.

When that field is set, move to the next one and type your text into its box.

Work through the same step until every required field in the form is filled.

### Fill radio option fields

Move your pointer over the field that holds the radio option.

A default checkmark — or the symbol for the selected radio field — appears on its own.

Click the radio option field to drop the symbol in.

Need a different symbol? Click the field again, open More options from the menu, and pick another one.

The field then carries whichever symbol you chose.

### Add signature and initials

If you haven't built your signature and initials yet, do that first. Here's how:

1. For a signature, pick Add signature. When the dialog appears, type or draw the signature, then pick Save.
2. For your initials, pick Add initials. When the dialog appears, type or draw the initials, then pick Save.

Note

An image works as a signature or initials too. To bring an existing image in, pick Image from the top menu.

Drop in a signature or set of initials by selecting it, moving to the target field, and clicking to set it down.

Feel free to drag and drop the signature wherever you want it. The hover menu tools handle resizing or removing the signature or initials.

Feel free to drag and drop the signature wherever you want it. The hover menu tools handle resizing or removing the signature or initials. Caution

After a signature or initial has been added to a form and the form is saved, there's no editing it again.

To shift where a signature or initial sits, hover over it until a plus icon shows, then select it and drag it where you'd like.

To resize a signature, hover over the blue circle in the corner, then hold and drag it as needed.

Once finished and signed, your agreement lands in Adobe cloud storage.

Tip

Options from here include sharing the finished form with others, turning it into a web form, or keeping a certified copy of the PDF.

## Share filled and signed documents

### Learn how to share your filled and signed documents with others.

Passing along filled and signed agreements cuts down the chance of losing a document and makes tracking and storage painless — a win for businesses and clients alike.

### Share via link

Open the main menu and pick Get link.

After a form has been filled and signed, you can route it via link or reach for the direct share option.

After a form has been filled and signed, you can route it via link or reach for the direct share option.

To turn it into a final signed copy that takes no further comments, switch off the Allow comments option.

Pick Get Link.

Drop the link wherever it's needed and pass it along to whoever has to see the document.

### Share via email

Open the main menu and pick Share.

Type in the email addresses of everyone who should receive the file, and add a message so the shared document has some context.

Enter people's email addresses and tick 'Allow comments' if you'd like them to view and comment on the signed document.

Enter people's email addresses and tick 'Allow comments' if you'd like them to view and comment on the signed document.

Pick Invite.

An email carrying your message goes out to the recipients, letting them know the document has been shared with them.

### Send to get signatures from others

In the pane on the left, choose Request e-signatures.

When the Get documents signed page opens, type in the names and email addresses for each person who still has to sign.

Adjust the agreement settings wherever that's needed.

Choose Preview & add fields if you want to place signature blocks and form fields onto the document.

Want it routed right away with no extra fields? Choose Send now instead.

Once that's done, every recipient you listed receives the document to sign.

### More like this

- Fill and sign documents
- Types of signatures
- Digital identity overview

## Fill and sign supported file formats

### See which file formats Acrobat on the web lets you fill out and sign.

## Types of signatures

### Get familiar with the different signature types used when e-signing a document.

### e-signatures

The most basic signature type is an electronic signature, or e-signature, which usually carries little to no identity verification of the signer past an email address. Sometimes it shows up visually too, for instance as a scanned image of someone's handwritten name. Among the simple e-signature methods are those validated through email, a password, SMS-based phone authentication, and one-time passcodes.

### e-signatures with identification

Stronger identity checks back these up — think knowledge-based authentication or verification against a government-issued ID — all aimed at confirming who the signer actually is.

### Digital signatures (certificate-based)

To produce a digital signature, the system relies on a digital certificate handed out by either a Certificate Authority (CA) or a Trusted Service Provider (TSP). Because they're tied directly to one person, such certificates and the signatures they create offer a very high level of security.

### Qualified Electronic Signature (QES)

Under EU law, a QES is a digital signature underpinned by a digital certificate that an accredited Qualified Trust Service Provider (QTSP) has issued. The law treats it as carrying the same weight as signing by hand. Across many jurisdictions, whatever the local statute calls a qualified, reliable, valid, secure, or certified e-signature is typically regarded as the legal equal of a handwritten one.

### Certification signature (Acrobat)

Whoever signs first places a certification signature, and that opening signature dictates the ways later signers are permitted to alter the document.

### Approval signature (Acrobat)

By contrast, an approval signature is a digital signature that neither certifies the document nor restricts what signers coming after can do to it.

### Digital seals

What a digital seal vouches for is the integrity of some digital asset — documents put out by an organization, server software, or source code, for example. The certificate behind it carries a subject-name field that pins down the responsible legal entity.

A digital certificate underlies both digital seals and digital signatures alike. The subject-name field on each one points to whoever it represents: an organization in the case of a digital seal, or a person in the case of a digital signature.

Inside Adobe Acrobat Sign, a blue bar flags the digital seal that guarantees where every signed document or audit report exported to PDF came from and that it hasn't been tampered with. Which certificate builds that seal depends on the shard the account sits on:

- NA1 and other shards use DigiCert
- EU1 uses Intesi Group
- IN1 uses Emudhra

### Cloud signature

With a cloud signature, the signer's digital certificate is kept safely in the cloud, which makes trusted, highly secure digital signing possible straight from a browser or a mobile device. To create the remote e-signature, each cloud signature follows the protocols laid out in ETSI Technical Specification 119 432, drawing on digital certificates delivered as a cloud-based service.

### More like this

- Fill and sign documents
- Digital identity overview
- Share filled and signed documents
