# Content usage and handling

Frequently asked questions, answered, covering how Adobe handles and uses content specifically to make generative AI capabilities in Acrobat apps better.

Throughout the FAQs below, wherever "generative AI capabilities" appears, it points strictly to the AI Assistant and the Generative summary tools.

To understand the ways Adobe might examine metadata drawn from your prompts (the kind of question, for instance) and from your documents (page count, structure, type, and similar statistics) for the sake of bettering the product, see the content analysis FAQ.

For the specifics of how Adobe approaches security, privacy, and AI ethics, head to the Adobe Document Cloud security page, browse what's in our Trust Center, read the Adobe Privacy Policy, and review the Adobe AI Ethics page, in that order.

Outside of the situations listed here, Adobe does not look at your documents, prompts, or generated responses:

- Reported content, bugs, or vulnerabilities: Should you flag content as harmful, illegal, offensive, or otherwise problematic, our investigation involves a hands-on review of the document, the prompts, and the generated responses so the service can be tuned to fix the issue.
- User feedback: If you're an Acrobat or Adobe Scan Individual user\* who supplies feedback, you may choose to hand us your document, prompts, and generated responses from a document session for product-improvement purposes that stop short of training a Large Language Model (LLM). Such improvements include making generative AI in Acrobat apps run better, plus cutting down on hallucination, bias, and toxicity. To keep your content private, leave the product improvement checkbox unchecked the first time you give feedback on a document.

Where your content does undergo manual review, only a small set of trained Adobe staff will look at it, and they do so inside an encrypted repository guarded by access controls.

Whenever you share documents, textual prompts, and generated responses with us as part of feedback, we strip out personal information by running data-masking routines before the content feeds product improvement. Drawing on Named Entity Recognition, we swap personal information for set categories — turning "John Smith" into "PERSON," for example.

For 30 days, content lives in an encrypted, siloed environment that Adobe controls inside the US under tight access controls. Should you want this data erased sooner, or want to opt out of having your content improve generative AI capabilities in Acrobat apps, the form in our Privacy Policy is always open to you.

Retention of flagged content runs to 30 days only, barring other legal grounds for keeping its access as our Privacy Policy spells out. If you'd like the data gone before then, you can always reach us through the form in our Privacy Policy.

Open a PDF and pick AI Assistant in Acrobat or Acrobat Reader, and Generative AI runs an analysis of your document by way of Adobe servers. That processed data sits in a temporary cache for as long as 12 hours. The desktop builds of Acrobat and Acrobat Reader are an exception: the AI-generated overview shown on opening a PDF runs locally on your device rather than on Adobe servers.

Your opening five questions to AI Assistant are available whether or not you sign in. Going past that starting cap requires being signed in and on a paid plan. Adobe Scan differs — there, the generative AI features demand sign-in from the very start.

Note

For Individual or Teams users, the generative AI features ship in English alone. Enterprise users get the generative AI features only once their admin grants them a paid or trial license, or once they're admitted to one of our private beta programs.

Switching off generative AI is available to you, which stops documents from being run through the feature.

Across AI Assistant in Acrobat, Acrobat Reader, and Adobe Scan, Adobe stays LLM-agnostic, picking best-in-class technologies suited to a spread of customer use cases. At present we've paired the Microsoft Azure OpenAI Service with our own proprietary technologies to deliver generative AI capability in the Acrobat apps.

No. While you're interacting with generative AI in Acrobat, Adobe trains no LLMs on your content. The prompts you feed AI Assistant leave the underlying model unchanged. None of your content goes toward training the LLMs behind Acrobat's generative AI capability.

For enterprise customers in the European Union (EU) and United States (US), Acrobat AI Assistant offers Regional Data Center Pinning, which keeps user data processed and temporarily cached (up to 12 hours) inside the region assigned to them. EU Enterprise users have their data cached via Adobe cloud storage in EU (Ireland), while LLM processing happens in the EU (Sweden at present). More on Document Cloud Data Centers is available.

Note

Content tied to an organization or school account stays out of generative AI product improvement at Adobe, unless that organization or school agrees otherwise.

For desktop and mobile apps, chat history data resides on your local device; for Acrobat on the web, it lives in Adobe cloud storage. Bundled inside it are your textual prompts and the generated responses for a given document — or a group of documents you picked, which is also called a Collection. Reaching it means opening the file or Collection in question from your recent files list.

Even after you pull documents out of a Collection, the chat history may hold onto content from them. When the AI Assistant answers your prompts, it may also draw on this chat history for context.

No — exporting or sharing chat history isn't possible. Copying responses by hand is an option if you need them.

From the AI Assistant panel of a document or Collection, choose More > Clear chat history to wipe every prompt, response, and overview.

Disabling chat history is off-limits to end users, though enterprise admins can handle it through the Adobe Admin Console.

Access to the related files, along with the chat history that goes with them, will be lost in Acrobat.
