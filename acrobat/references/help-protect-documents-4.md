# Security Policies, Enhanced Security

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Security policies overview; Server-based security policies overview; Protect PDFs with password security policies; Create certificate security policies; Create file attachment security policies; Apply security policies to Outlook attachments; Copy, edit, or delete security policies; Revoke policy-protected PDFs; Export security settings; Enable enhanced security; Turn on sandbox protection; Specify privileged locations for trusted content; Ways to allow trusted content with enhanced security.

## Security policies overview

Get to know what security policies are in Adobe Acrobat and the way they extend protection across many PDFs at once.

Think of a security policy as a bundle of security settings, saved once and applied again wherever you need it. To gate who can open a document, you can lean on either password-based or certificate-based policies.

Where security policies pay off is consistency across many PDFs. Rather than dialing in the settings on every file, you write them down a single time and call on them repeatedly, which trims the busywork and the chance of slipping up.

### Types of security policies

Two kinds of security policy exist in Acrobat, and which one you have depends on the way it gets created and looked after.

### Organizational policies

Governed through Adobe Experience Manager – Forms Server (Document Security) and kept on a server, organizational policies come into their own when PDF access has to be time-limited or audited from one central place.

Characteristics

- Live on a server, so server access is required
- Draw document recipients from a list the server maintains
- Govern access and auditing per the policy
- On hand only where the service is licensed and switched on

### User policies

Individuals build and look after user policies themselves. They fit the case where you keep reapplying the same password‑based or certificate‑based settings to documents of your own.

Characteristics

- Built and applied by one person on their own
- Handle both password and certificate security
- Saved on the local machine by default
- Held on the Forms Server for your personal use when you have access

## Server-based security policies overview

Get acquainted with server-based security policies in Adobe Acrobat — their authentication methods and how they gate access to protected PDFs.

Often called organizational policies, server-based security policies handle PDF access at the level of the whole organization. They reside on Adobe Experience Manager – Forms Server (Document Security), and every time someone opens a protected document the policy is enforced. Because management is centralized, an organization can expire or revoke documents and follow their usage without ever resending the files.

Grasping the mechanics here makes it easier to settle on the correct policy type and stay on top of protected documents.

### Authentication of organizational policies

So that permissions are forever checked against the rules in force, organizational policies rely on a server-based authentication model.

Within a server-based authentication model:

- A server, not the local computer, is where the policies reside.
- The policy is stamped onto a PDF ahead of distribution.
- Whether a user may open, edit, or print a document is decided by the policy.

The moment a protected PDF is opened, the server confirms who the user is and what they may do before letting them in. Should access be turned down or pulled, the file stays encrypted and out of reach.

### Stages of server-based security policies

From administration through document protection, user access, and continuing upkeep, server-based security policies move through a steady lifecycle.

- Configuring the Forms Server For the organization, an administrator sets up Adobe Experience Manager – Forms Server (Document Security). Part of that setup is handling users and putting organizational policies within reach of the authors who are cleared to use them.
- Publishing protected documents An author stamps an organizational policy onto a PDF. A license spelling out the access permissions is issued by the server, paired with a one-of-a-kind encryption key that Acrobat tucks into the document to enforce the rules. That license is also what an author or administrator uses to track and audit the PDF.
- Accessing protected documents The server checks the recipient's identity the moment they open a protected PDF. Once that check passes, the document opens carrying whatever permissions the policy specifies.
- Managing access and auditing Through the Forms Server, cleared users can follow document activity, audit how it is used, and alter or revoke access. None of those changes call for the document to be sent out again.

## Protect PDFs with password security policies

Walk through building a password security policy so the same protection carries across many PDFs.

With password security policies, you settle the password and permission settings a single time. Bundle those settings into a policy and call on them across many PDFs, and you cut down the manual work while keeping protection uniform.

### Create a password security policy

Choose All tools > Protect a PDF, then under ADVANCED OPTIONS choose Manage security policies.

In the dialog that opens, choose New, choose Use passwords, and then choose Next.

Give the policy a meaningful name and, if you like, a description.

To keep the passwords and restriction settings together with the policy, choose Save passwords with the policy.

Carry on by choosing Next. This brings up the Password Security - Settings dialog box.

Set the document open and permissions passwords, and then decide which printing and editing actions are allowed.

From the Compatibility dropdown menu, pick a compatible Acrobat version, and then choose OK to commit your password configuration.

Double-check the security settings before you save the password policy.

Double-check the security settings before you save the password policy.

Look over the policy summary, then choose Finish.

Once saved, the password policy turns up among the available security policies in the list.

### Apply a password security policy to a PDF

Start by opening the PDF that needs protection.

Select All tools > Protect a PDF > Manage security policies.

Pick whichever password policy you intend to apply.

Select Apply to Document.

Save the file so the policy takes effect.

## Create certificate security policies

This walkthrough covers building a certificate-based security policy in Adobe Acrobat, which guards PDFs by means of public key certificates.

With a certificate security policy, encryption is scoped to named recipients through their digital certificates. That gives you say over who reaches a document and which permissions each person receives.

Before you begin

Confirm that every recipient has a valid, in-date public key certificate that supports encryption.

Open a PDF in Acrobat.

Select All tools > Protect a PDF > Manage security policies.

Select New.

Select Use public key certificates, and then select Next.

Give the policy a name and description, and indicate which parts of the document should be encrypted.

From the dropdown, pick an Encryption Algorithm that matches the recipients' Acrobat version, then select Next.

Decide how the policy gets tied to recipients:

- For a policy bound to individual documents, select Ask for recipients when applying this policy, then select Next.
- For a policy bound to a fixed set of recipients, leave Ask for recipients when applying this policy unchecked, pick the recipients' digital IDs (yours included), then select Next.

Set the general options and decide how the certificate security policy gets applied.

Set the general options and decide how the certificate security policy gets applied.

On the Summary page, look over the policy settings and select Finish. The certificate security policy is now saved by Acrobat.

The finished certificate security policy shows up in the security policies list, available for use. A document-bound policy asks you to pick recipients on each application, whereas a recipient-bound policy relies on the recipient list you defined when you built it.

Tip

Give policies clear, descriptive names so you can spot them again later — for instance "Confidential Reports - View Only" or "Legal Documents - Full Permissions."

## Create file attachment security policies

Here you'll learn to build a file attachment security policy and put it to use when you send files inside a security envelope.

A file attachment security policy shields files — Word, Excel, ZIP, and the like — by mailing them within an encrypted security envelope. The same policy can serve across many envelopes, governing who may open and pull out the attached files, all without encrypting the files themselves.

Before you begin

Verify that you're allowed to create and manage security policies in Acrobat. Where the policy depends on certificates, confirm you can reach valid public key certificates.

Select All tools > Protect a PDF, then select Create Security Envelope under ADVANCED.

The Create Security Envelope dialog box opens.

Select Add File to Send, choose whichever files you want enclosed, and then select Next.

From the list of options pick an envelope template and select Next.

Pick an envelope template to govern how recipients see the security envelope.

Pick an envelope template to govern how recipients see the security envelope.

Choose a delivery method and select Next.

For the enclosed files, choose a security policy to apply, then select Next. The chosen policy is now applied by Acrobat.

Tip

When the policy doesn't show up, select Show all policies.

To build a fresh policy, select New Policy and walk through the prompts to set up a password, certificate, or server-based policy. Acrobat keeps the policy details so you can reuse them.

Check or revise your identity information, then select Next.

Look over the envelope information and select Finish.

The security envelope now exists with your new policy attached. From here you can apply this policy to other file attachments without building it again.

## Apply security policies to Outlook attachments

This topic explains how to put security policies to work on Outlook attachments by way of Adobe Acrobat.

Securing Outlook attachments with a policy locks files down before they leave your outbox, so recipients reach them only within the permissions you set.

Before you begin

You'll see this option only when Adobe Experience Manager – Forms Server (Document Security) has been configured and is reachable inside Acrobat.

Select New Mail Message on the Home ribbon in Outlook.

Select Attach As Secured Adobe PDF on the Adobe PDF ribbon.

Point to the file you want to attach by entering its path or selecting Browse.

From the security choices on offer, state how the document should be secured, and then select OK.

Acrobat turns the file into a PDF and encrypts it with the security method you picked.

Finish writing the message, and then select Send.

## Copy, edit, or delete security policies

This article shows how to duplicate, modify, remove, or favorite a security policy in Adobe Acrobat.

Security policy actions keep your protection settings current and quick to reapply. Copy a policy, revise its settings, delete the ones you no longer need, or flag your go-to policies as favorites.

Before you begin

Check that you're permitted to manage security policies in Acrobat. When a policy is run by an organization, only some actions may be open to you.

### Manage security policies

Head to All tools > Protect a PDF > Manage security policies. The Security Policies dialog box opens.

Pick a policy to see its details along with the management options on offer.

To make a duplicate, select Copy, type a new name, then select OK.

To revise the policy, select Edit, apply your changes, then select OK.

To take a policy out, select Delete, then confirm the removal.

To flag a policy, select Favorite. A star shows up beside it, which makes it quicker to locate.

Select Favorite a second time to drop the policy from favorites. Marking more than one policy as a favorite is allowed.

The Show menu lets you narrow the view to all policies, user policies, or organizational policies.

The Show menu lets you narrow the view to all policies, user policies, or organizational policies.

### Available policy management options

The table below lays out what every policy action does and the conditions under which it can be used.

Note

Changing organizational policies on the server requires administrator access to Adobe Experience Manager – Forms Server (Document Security).

## Revoke policy-protected PDFs

This topic explains how to pull back access to policy-protected PDFs so recipients can no longer open them.

Because policy protection governs how recipients reach a PDF even after it leaves your hands, you can shut off access right away by revoking the policy whenever a document is no longer valid or should stay closed.

Open the policy-protected PDF you intend to revoke. Should the document be a PDF Portfolio, open the portfolio file rather than one of its component PDFs.

Authenticate with whichever rights‑management service is guarding the file:

- A standalone PDF, or a component PDF inside a PDF Portfolio, uses Adobe LiveCycle Rights Management ES.
- A PDF Portfolio itself uses Adobe Experience Manager – Forms Server (Document Security).

Select All tools > Protect a PDF > Document Security > Revoke.

On the web page that opens, pick a revocation reason from the menu or write your own message.

If a replacement document is going out, enter the URL where recipients can reach the new file.

Select OK to record your changes and finish revoking.

After revocation, no user can reach the document any longer. Anyone who tries to open the PDF instead sees your explanation message together with a link to any replacement document.

## Export security settings

This article walks you through exporting security settings out of Adobe Acrobat so they can be reused or shared safely.

When you export security settings, your trusted identities and the related security configuration are saved to a file. That file lets you set up the same security on another machine or keep settings consistent across environments.

Before you begin

Make sure you're permitted to manage security preferences in Acrobat, since an administrator might lock down certain settings.

Select Menu (Windows) or File (macOS), and then select Preferences > Security > Export. The Export Security Settings dialog box opens.

Decide which groups of settings to share and select OK.

Go over the security settings and adjust them where needed. Whatever is shown is exactly what Acrobat exports.

Uncheck any sections you'd rather leave out before the file is exported.

Select Export. At this point Acrobat asks you to secure the exported settings file.

Pick how the exported file should be encrypted, then select OK.

Protection can come from password security, certificate security, or you can skip encryption entirely.

If prompted, set up or choose a Digital ID to carry on. Follow the on‑screen steps to confirm the Digital ID. Acrobat then checks that it can reach the security settings file.

Save the exported security settings file.

Acrobat reports that the security settings export succeeded.

Note

When you're working with certificate-based security and no Digital ID exists, Acrobat asks you to either choose one that's already there or make a new one.

## Enable enhanced security

This topic shows how to switch on enhanced security in Adobe Acrobat to guard your system against potentially harmful PDF actions.

PDFs have grown from static pages into dynamic documents carrying interactive forms, multimedia, and scripts. Those additions boost usability, yet they can also raise the odds of malicious behavior coming from untrusted sources. By blocking restricted actions in untrusted files while letting trusted content run as usual, enhanced security cuts down that risk.

Select Menu (Windows) or File (macOS), and then select Preferences.

Select Security (Enhanced) from the Categories list.

Select Enable Enhanced Security in the Enhanced Security section.

(Optional—Windows only) Select Cross Domain Log File. Cross‑domain access attempts are then logged by Acrobat to aid troubleshooting.

Select OK to apply the changes.

With it switched on, enhanced security holds PDFs back from external content, file system operations, and cross-domain communication until you specifically trust particular files, folders, or host domains.

Note

Enhanced security stops PDFs from talking across different host domains unless a server-based policy file expressly allows the connection. Whenever a PDF reaches for cross-domain access, Acrobat tries on its own to fetch a policy file from the target domain.

For restricted actions originating in untrusted sources, Acrobat shows security warnings so you can decide whether to allow or block them.

Find out more about handling cross-domain access and policy files in the Acrobat Application Security Guide.

## Turn on sandbox protection

This topic covers switching on sandbox protection in Adobe Acrobat to help wall PDFs off from your system.

Sandbox protection runs PDFs inside a restricted environment that curbs their reach into your files, registry, and other system resources. The feature guards against malicious code tucked inside PDF documents. Adobe advises turning it on whenever it isn't already on.

Note

On macOS, the capability is arriving in phases and might not yet be available to everyone.

Select Menu (Windows) or File (macOS), and then select Preferences.

Select Security (Enhanced) from the Categories list.

Select Enable Protected Mode at startup.

Select OK, and then select Yes in the confirmation dialog box.

Restart Acrobat for the changes to take effect.

Caution

Leave sandbox protection on except where a specific workflow demands otherwise, since it supplies essential security.

## Specify privileged locations for trusted content

This topic explains how to set privileged locations in Adobe Acrobat so trusted content runs free of security warnings.

Enhanced security lets you name trusted locations for content — files, folders, or domains — and anything in those locations counts as trusted. For example, although enhanced security keeps PDFs from reaching unknown websites, putting a site's domain on the trusted list lets data load in Acrobat and Acrobat Reader. Find out more about Enhanced Security.

### Configure trusted locations

Select Menu (Windows) or File (macOS), and then select Preferences.

Select Security (Enhanced) from the Categories list.

Confirm that Enable Enhanced Security is selected.

Under Privileged Locations, take one of these actions:

- Select Add File to trust one specific PDF file.
- Select Add Folder Path to trust every file inside a folder.
- Select Add Host to trust content coming from a particular host domain.

Navigate to or type the location you'd like to trust, then select OK. Your entry now appears among the privileged locations.

(Optional, Windows only) To extend trust to sites your operating system already recognizes, select Automatically trust sites from my Win OS security zones. Acrobat then grants trust according to your system settings.

Select OK to keep your changes. The updated privileged location settings are now applied by Acrobat.

## Ways to allow trusted content with enhanced security

This topic describes the ways Adobe Acrobat lets trusted content slip past enhanced security restrictions.

By holding back potentially unsafe actions, enhanced security in Adobe Acrobat keeps your system protected. Some workflows, though, call for trusted content to be granted exceptions so it works as intended. Acrobat offers options that let trusted content through while security stays intact.

### Privileged locations

Use the Privileged Locations feature in the Enhanced Security preferences to extend trust to files, folders, or host domains.

### Trusted URLs

Govern how PDFs are reached over the internet by setting up trusted URLs in the Trust Manager. See how to permit or deny links pointing to other sites.

### Trusted certificates

Let certified PDFs carry out privileged network operations — networking, printing, and file access among them — by trusting the signer's certificate. Learn how to validate digital signatures.

### Server‑based cross‑domain policies

Manage cross‑domain access through a server‑based policy file. Refer to the Cross-Domain Security section of the Acrobat Application Security Guide.
