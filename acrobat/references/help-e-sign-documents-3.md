# Work With Webforms, Collect Online Payments

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Create web forms; Disable web forms; Edit web forms; Manage web forms; Reactivate web forms; Unhide web forms; Hide web forms; Change Braintree account credentials; Delete Braintree account; Turn off Braintree integration; Enable payment collection; Payment field values overview; Prevent duplicate payments; Resolve payment disputes; Set payment form fields; Transaction records overview.

## Create web forms

### Learn how to create a basic sign-up web form with a signature field or a more elaborate one with multiple fields for user data collection and internal counter-signatures.

From the Acrobat on the web homepage, choose E-sign > Create a web form, then pick a file to serve as the template.

Note

Reaching the Create a web form feature calls for an active Adobe Acrobat Pro or Acrobat Pro for teams subscription.

Teams admins on an Acrobat Standard for teams plan are asked to upgrade instead. When the dialog appears, choose Manage Account to keep going. Teams members who want the feature should ask their admins to grant it.

When the Create a web form widget page opens, type a name into the Web Form Name field.

Specify at least one participant who must fill out the form. Open the Participant Role drop-down menu and pick one of these roles:

- Signer: Puts a signature on the form and can fill in data too.
- Approver: Looks over and approves the form, and may add data or sign as well.
- Accepter: Gives the form acceptance and approval.
- Form Filler: Supplies the needed data and submits, though usually without signing.
- Copied (cc): Gets notified as the form moves toward completion.

Note

Because required participants reach the form by way of your website, no email address is collected for them. Adding instructions for those first participants helps spell out their roles.

On an account where Users in Multiple Groups (UMG) is turned on, open the 'Send from' drop-down menu and pick the group you want the agreement sent from.

On an account where Users in Multiple Groups (UMG) is turned on, open the 'Send from' drop-down menu and pick the group you want the agreement sent from.

To set authentication per participant, open the Authentication Factors drop-down menu and pick one of these options:

- Password: A password is required before the participant can open the web form, and it's on you to set that password and pass it along to them.
- Knowledge-Based Authentication (KBA): Here recipients supply their name, address, and optionally the last four SSN digits, then answer questions that confirm who they are. It's offered in the US only. KBA carries a per-use charge; reach out to Sales to enable it on your account.
- Acrobat Sign: Has participants confirm who they are by logging in to Acrobat Sign.
- Phone: A verification code reaches the participant's phone by SMS or voice call, and they have to key it in.

Note

If you like, the Counter-Signers (optional) section lets you bring in counter signers, a CC party, or yourself as a recipient by choosing the matching option.

For password protection, tick the Password Protect checkbox, key a password into the Password field, then type it again in the Confirm password field.

Note

Once that's set, viewing the PDF requires the password.

Choose Next to begin placing signature fields on the form.

Working through each recipient in the Recipients drop-down list, drag form fields from the right pane onto wherever you want them on the document.

At minimum, one signature field has to go down for every participant and counter-signer.

Select Create.

Tip

After the web form exists, you can pass along its URL, drop in its embed code, preview it, browse all your web forms, or start another one.

With the web form ready, the recommended actions tiles give you a fast way to preview or open it.

With the web form ready, the recommended actions tiles give you a fast way to preview or open it.

Your web form now exists and can be viewed or managed from the Documents tab. A confirmation email also arrives carrying the web form URL and embed code.

### More like this

- Manage web forms
- Reactivate web forms
- Hide web forms

## Disable web forms

### Learn how to disable a web form so signers can't access it.

Managing your document workflows stays simple here, since you can switch off web forms once they've served their purpose. Doing so stops any more submissions and keeps your online forms under your control.

A web form that's been disabled still shows in the Home or Documents section. Whenever you want to put it back into service, you can reactivate it.

Head to the Documents tab, then choose Web forms in the left pane.

Pick the web form you intend to disable.

Within the Status section, choose Disable.

When the dialog box opens, pick one of these options:

- Redirect signers to another web page - Route signers toward a different web page or another web form by typing that destination's URL into the field provided.
  - You can add hyperlinks to the message by enclosing them in brackets [ ].
  - You can add labels by using the | (pipe) symbol after the URL.
  - For instance: [https://www.sign.adobe.com/ | Acrobat Sign] displays as Acrobat Sign.

To point signers at another webpage, select the radio option and supply the redirect URL.

To point signers at another webpage, select the radio option and supply the redirect URL.

When you're finished, choose Disable.

A confirmation message shows up, and the web form flips from Active to Disabled.

### More like this

- Create web forms
- Hide web forms
- Edit web forms

## Edit web forms

### Learn how form owners can edit the fields of a web form.

Note

The web form name, the attached agreement, and the participant details are all locked from changes.

From the Acrobat on the web homepage, head to Documents > Web forms.

Pause on the web form you want to change, then choose Edit.

That opens the web form in editing mode.

Editing a web form lets you swap its signature fields, adjust deadlines, set up reminders, attach agreements, and more.

Editing a web form lets you swap its signature fields, adjust deadlines, set up reminders, attach agreements, and more.

To bring more documents into the web form, choose Add Files and pick the file you'd like to attach.

Select Next.

The web form appears with field-editing options.

Insert, reposition, delete, and configure whatever fields need updating.

When you're finished, choose Save.

The web form keeps the new layout. Saving returns your view to the opened form along with the action pane, and a success message appears in the window.

### More like this

- Create web forms
- Disable web forms
- Manage web forms

## Manage web forms

### Learn how to manage the web forms using Acrobat on the web.

With the tools in Acrobat on the web, building, editing, and tracking your web forms is straightforward. That makes gathering signatures and responses smoother while keeping everything tidy.

From the Acrobat on the web homepage, head to Documents.

In the left pane, choose Web forms.

To bring up a web form, hover over its listing and choose Open.

To bring up a web form, hover over its listing and choose Open.

Pick the web form you want to work with.

Picking a web form brings up its Context menu in the right pane. Under Actions, choose See 4 more to reveal every available action.

Picking a web form brings up its Context menu in the right pane. Under Actions, choose See 4 more to reveal every available action.

Check the top portion of the context menu for these metadata details:

- Title of the web form.
- Date when the web form was created.
- Name and email address of the user (owner) who created the web form.
- Status of the web form.
- The role of the first participant and email address of the CC'd user.

The Actions menu lets you carry out any of these:

- Open Web Form — Brings up the web form for viewing only, with no fields available.
- Get Code — Hands you a quick panel for copying the URL/HTML/JavaScript code of the web form.
- Edit Web Form — Opens the web form inside the authoring environment.
- Download PDF — Grabs the entire (blank) PDF.
- Download Form Field Data — Pulls a CSV holding the field-level content for every completed child agreement spawned from this parent web form.
- Download Individual Files — When several files built the web form, this lets users download each PDF separately.
- Share — Passes the web form to whatever user email you supply. A recipient can view shared web forms on the Manage page but cannot edit them, and a PDF copy of the web form is emailed to them.
- Hide/Unhide Web Form – Drops the web form from your usual Manage page view or puts it back.
- Add Notes - Jot personal notes about the web form.

### More like this

- Hide web forms
- Unhide web forms
- Edit web forms

## Reactivate web forms

### Learn how to reactivate a disabled web form anytime to resume normal function.

Open the Documents tab, then choose Web forms in the left pane.

Pick the disabled web form you'd like to bring back online.

From the right pane, choose Enable.

For the web form's details and status, look at the information shown beneath the form's name in the right pane.

For the web form's details and status, look at the information shown beneath the form's name in the right pane.

When the dialog box opens, choose Enable.

That switches the disabled web form back on, with its status moving to Enabled, and a success message appears in the window.

## Unhide web forms

### Learn how to unhide a hidden web form.

Open Documents from the Acrobat on the web homepage.

In the left pane, choose Web forms.

From the top menu, choose Filters.

In the Filters dialog box that opens, tick the Display hidden content checkbox and then choose Apply.

The page reloads with the filtered documents shown.

Alternatively, you can narrow the documents by modified date or by content found inside a document.

Alternatively, you can narrow the documents by modified date or by content found inside a document.

Pick the web form to bring up its context menu.

From the Actions menu, choose Unhide Web Form.

You might need to choose 'See more' before the 'Unhide Web Form' option appears.

You might need to choose 'See more' before the 'Unhide Web Form' option appears.

The form becomes visible and shifts out of the filtered list into the main View list, while a success message shows in the window.

## Hide web forms

### Learn how to remove a web form from the Home or Documents tab by hiding it.

Note

Hiding a web form changes only your own view, leaving everyone else's untouched. Anyone with shared access can still see it.

Open Documents from the Acrobat on the web home page.

In the left pane, choose Web forms.

Pick the web form you want to hide.

From the Actions menu, choose Hide Web Form.

To surface the Hide web forms option, choose See more under the Actions menu.

To surface the Hide web forms option, choose See more under the Actions menu.

When the dialog box opens, choose Hide.

Trying to hide an active web form brings up a caution message. Pick one of these:

- To switch off the web form before hiding it, choose Cancel and then work through the steps to Disable web forms.
- To carry on, choose Hide.

A confirmation message appears in the window, and the web form drops out of view.

### More like this

- Disable web forms
- Unhide web forms
- Edit web forms

## Change Braintree account credentials

### Learn how to update your Braintree account details.

Starting from the Acrobat on the web homepage, pick E-Sign > Collect payments.

Once the Acrobat Sign Account settings > Payments Integration page loads, work your way down to where it says Link a Braintree account.

Type the fresh values into Merchant ID, Public key, and Private key.

The Payments integration page lets you re-enter the merchant ID and key details to refresh your payment information.

The Payments integration page lets you re-enter the merchant ID and key details to refresh your payment information.

Select Save.

Once those credentials check out and the Braintree connection is rebuilt, every payment attempt that follows uses the new payment credentials.

### More like this

- Set payment form fields
- Delete Braintree account
- Disable Braintree integration

## Delete Braintree account

### Learn how to delete your Braintree account and disable payment collection.

Beginning at the Acrobat on the web homepage, head into E-Sign > Collect payments.

When the Acrobat Sign Account settings > Payments Integration page comes up, move down to its Link a Braintree account section.

Select Clear credentials.

Select Save.

That switches off the integration between Acrobat and Braintree.

### More like this

- Enable payment collection
- Transaction records overview
- Change Braintree account credentials
- Prevent duplicate payments

## Turn off Braintree integration

### Learn how to turn off the integration between Acrobat and Braintree.

Severing the tie between Acrobat and Braintree is straightforward from Acrobat on the web, which stops the payment prompts you no longer need.

Starting at the Acrobat on the web homepage, select E-Sign > Collect payments.

When the Acrobat Sign Account Settings > Payments Integration page opens, scroll down until you reach the Link a Braintree account section.

Clear the Enable payments with Braintree checkbox.

From this same Payments integration page, two further controls let you swap your Braintree account credentials or halt payment collection altogether.

From this same Payments integration page, two further controls let you swap your Braintree account credentials or halt payment collection altogether.

Select Save.

That action suspends the link between Acrobat and Braintree for the time being.

Note

Disconnecting Acrobat from Braintree leaves your stored credentials intact, so re-enabling the integration later is painless.

## Enable payment collection

### Switching on payment collection so a document sent for e-signing can also request an online payment.

Starting at the Acrobat on the web homepage, select E-Sign > Collect payments.

Note

Reaching the Collect payments feature requires an active subscription to either Adobe Acrobat Pro or Acrobat Pro for teams.

Should you administer a Teams plan tied to Acrobat Standard for teams, a prompt will invite you to upgrade. Select Manage Account in the dialog that appears to proceed. Team members lacking access have to ask their administrators to grant it.

When the Account Settings > Collect Payments page opens, scroll down to the Link a Braintree account section.

Fill in the Merchant ID, Public key, and Private key values.

Supplying the merchant Id together with the key details on the Payments integration page is what switches on payment collection.

Supplying the merchant Id together with the key details on the Payments integration page is what switches on payment collection.

Select Enable payments with Braintree checkbox.

Select Save.

An Account Linked banner appears as soon as the credentials check out and the Braintree connection goes live. With the integration switched on, your authoring environment gains the Payment field.

## Payment field values overview

### A look at the kinds of payment field values, with setup guidance for each across web forms and e-sign agreements.

Grasping the different kinds of value entries matters when you set up payment fields on forms, since each one shapes how the form behaves and how it feels to the person filling it out.

Three value kinds are available for payment fields in Acrobat e-sign: static, dynamic, and recipient-defined. Every kind fills a particular role and is shaped around a specific form requirement, keeping the experience both straightforward and safe for users.

### Static value (quotes)

A static value means the amount has to be locked in while the form is being authored.

### Field configuration

- Mark the field as Read Only.
- Put a value other than zero into the Default Value field.
- Choose a currency suited to the recipient you are targeting.

### User experience

Although both the field and the amount stay on screen, the payer has no way to change what it shows.

### Dynamic value (order form)

For a dynamic value, set up the payment field so its amount is calculated.

### Field configuration

- Because calculated values are forced to Read Only automatically, that choice disappears from the Properties menu.
- Inputs from other interactive fields feed the calculation, among them Quantities, Shipping methods, and Insurance options.
- While authoring, what shows in the field is a formula rather than a plain number.
- The user selects an appropriate Currency.

### User experience

On screen the field stays visible and its amount recalculates the moment a choice is made, yet the recipient has no direct control over it.

### Recipient defined values (donations)

With a signer-defined payment field, the person filling the form types in the amount themselves.

### Field configuration

- Choose Entered value in the Value Type field.
- Leave the Read Only option unchecked.
- Keep the Default Value open for editing.
- Apply a Value Range so the minimum is constrained.

### User experience

Fully editable, the field may arrive with a default already in place. Entering an amount beyond the allowed range raises an error, and only after correcting it can the recipient sign.

- Entering zero or leaving the field blank swaps the Pay and Sign option for Click to Sign, signaling that nothing is owed.
- Negative values are not permitted.

## Prevent duplicate payments

### Stopping the same transaction from being paid twice.

A single setting tweak inside your Braintree account stops duplicate charges from arising during e-signature workflows in Acrobat on the web. The result is clean, reliable transaction handling without the risk of charging twice.

Sign in to the Braintree account you use.

Head to Settings > Processing.

Switch on the toggle labeled Duplicate Transaction Checking.

With it active, Braintree blocks repeated transactions that carry the same transaction ID inside a defined window, so extra button clicks no longer trigger a second charge.

### More like this

- Enable payment collection
- Transaction records overview
- Change Braintree account credentials

## Resolve payment disputes

### Working through payment disputes once you know what Acrobat and Braintree each contribute to payment handling.

To support transactions within the document signing process, Adobe Acrobat ties into payment processing services. During signing, the sender configures a payment portal that Acrobat links to and Braintree runs to handle the payments. Knowing who does what makes it easier to resolve disputes and direct your concerns to the right party.

Track down the first email that the document sender sent you.

Send your reply straight back to that email to raise your payment dispute.

Doing so routes your message to the individual or company behind the transaction, who will then look into the matter and work toward a resolution.

Where the problem is something other than a payment dispute, these steps apply:

- For technical trouble or questions about e-signature, reach out to Adobe.
- For anything to do with payment processing, reach out to Braintree.

Note

Adobe Acrobat keeps document signing secure and simple yet neither processes nor retains any payment data. The financial side, meanwhile, sits with Braintree, which gathers payment details, runs the charges, and looks after the related financial particulars.

## Set payment form fields

### Adding the Payment form field to an agreement and setting it up.

From the homepage of Acrobat on the web, choose E-Sign > Request e-signatures.

Use Choose files to browse your device and upload whichever document you intend to send out for signature.

Adjust the Agreement details and Agreement settings to suit your needs, then enter the names and email addresses for every recipient.

Select Preview & add fields.

From the Add Fields panel, drag and drop the Payment field onto the spot you want on the document.

From the payment field Context menu, select Customize field.

Should you need the Payment field elsewhere, select it and drag it to the new spot.

Should you need the Payment field elsewhere, select it and drag it to the new spot.

Within the Customize field panel, configure these payment field options:

- Field Assigned To – Hand the field to whichever recipient is responsible for paying.
- Field type – Choose Number for this field's type.
- Number format: Under number format, pick Currency.
- Currency – Pick the currency that fits your intended audience; 1000 Yen and 1000 Pounds are worlds apart.
- Value range – Give a minimum and a maximum to box in the acceptable amounts for optional payments or donation figures.
- Prefilled number – Type a number to set a fixed amount, be it a quoted figure or an agreed-upon donation.
- Lock field value – Tick the checkbox to fix the amount for static payments or to offer a suggested figure.
- Mask value – Tick the checkbox to conceal whatever value was entered.

Every setting in the Customize field pane on the left lets you tailor and format the Payment field.

Every setting in the Customize field pane on the left lets you tailor and format the Payment field.

Select anywhere on the document to lock the Payment field settings.

Note

Once an agreement carries a payment field with an entered value, the Click to Sign button turns into Pay and Sign.

Your chosen options now define how the Payment field behaves.

### More like this

- Delete Braintree account
- Disable Braintree integration
- Enable payment collection

## Transaction records overview

### How transaction data moves between Acrobat and Braintree to keep payments auditable and protected.

Keeping data storage secure is vital whenever personal information such as payment details is involved. To complete a transaction and support payment auditing tied to an agreement, Acrobat and Braintree exchange nothing more than the details that are strictly required.

### Braintree records

Agreement documents, recipient records, and interactions all fall under Acrobat's management.

Rather than seeing transaction content or the complete recipient roster, Braintree is given only the payer's information.

Selecting the Pay and Sign button opens an I-frame to Braintree and hands it these four data objects:

- Currency Type: Points Braintree to the right merchant account.
- Payment Field Value: States how much is being collected.
- Payer's Email Address: Pins down who the payer is.
- Participation Code: Ties the payment record back to its agreement record.

### Acrobat records

Payment records stay with Braintree, which keeps the payer's personal details out of Acrobat entirely.

What comes back to Acrobat once a payment clears is just the Braintree transaction number, and that figure gets logged in the agreement's Activity section as well as its Audit Report.
