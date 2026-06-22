# Understand Usage Policies, Podcasts

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Generative AI usage policy and limitations; Content usage and handling; Adobe generative AI user disclosures; About podcasts in Adobe Acrobat; Create podcasts in Adobe Acrobat.

## Generative AI usage policy and limitations

Here you'll find the usage caps, subscription levels, and policy rules that apply to generative AI throughout the Acrobat apps.

Caps apply to the generative AI capabilities inside Acrobat apps. A plan might bundle a set number of Requests for AI Assistant at no extra cost; once those run out, continuing with the features means buying an Acrobat AI plan. A Request (defined further down) spent on producing text-based summaries or on questioning AI Assistant cannot be pooled with, or applied toward, Creative Cloud generative credits. Introducing generative credit consumption for Acrobat's generative AI features remains an option we may exercise later, and we may revise usage caps whenever we choose — including limiting, throttling, or suspending any usage beyond our limits.

Customers whose plans bundle AI Assistant — for instance AI Assistant for Acrobat or Acrobat Studio — are the ones who can reach the generative AI capabilities in Acrobat. Plans for Acrobat that unlock these generative AI capabilities exist across desktop, web, and mobile apps, in English plus additional languages. Working with Acrobat's generative AI capabilities entails processing documents in the cloud.

### Tiers

### Limited use

To sample the service, users can be granted a capped allotment of complimentary Requests for AI Assistant along with generative summaries.

### Full feature access

Unlocking additional Requests and ongoing use of Acrobat's generative AI capabilities means subscribing to an Acrobat plan that bundles AI Assistant, Acrobat Studio being one example. Further detail on Acrobat plans and pricing is available.

- Individuals (AI Assistant included): Each user is allotted 1,000 Requests monthly, per user. Once that ceiling is hit, usage can be throttled. Requests carry their own count, kept apart from generative credits.
- Teams (AI Assistant included): Each user is allotted 1,000 Requests monthly, per user. Once that ceiling is hit, usage can be throttled.
- Enterprise (AI Assistant included): Organizations are granted full use of AI Assistant, throttling permitting. Requests carry their own count, kept apart from generative credits.

### Beta, Prerelease, and Early Access Programs

In return for offering feedback on the service, users may be granted complimentary Requests or generations. Enterprise customers also have a path to trial the generative AI capabilities by asking to enroll in the Technical Evaluation Program or the Early Adopters Program. These early access programs sit outside Acrobat's paid plans and subscriptions.

### Definitions and limitations

### Request

In AI Assistant or PDF Spaces, a Request is registered the moment a user enters a prompt, picks a suggested prompt, or kicks off an AI task that satisfies the generative AI technical requirements. Toward AI Assistant usage limits, only those Requests that yield a Response are counted. A Request is a distinct thing from a generative credit.

Examples:

- Entering a question in the AI Assistant prompt bar and getting back an answer.
- Choosing Generative summary and receiving a summary.
- Picking a prompt while chatting with AI Assistant in PDF Spaces and getting a Response.

### Response

Coming out of the AI Assistant, a Response is a successful result — a summary or an answer, say. When a Request fails for technical reasons, it isn't counted as a Response.

### Throttling

So that system load stays manageable and usage stays fair, AI Assistant caps how many Requests a single user (keyed to user ID, IP, or agreement ID) can make per minute, per hour, and per day.

Cross those limits and the Requests that follow are turned away with an HTTP 429 error. Resource consumption drives the evaluation of each Request; depending on the parameters at play, some draw more than others.

### Generative credit

Think of generative credits as tokens spent to produce high-quality output in formats spanning image, vector, video, and audio. Most Acrobat and Creative Cloud products accept them for generative AI features — Adobe Photoshop, Adobe Illustrator, and Adobe Firefly among them.

- Purpose: The role of generative credits is to mirror the extra cost and value carried by our generative AI features while handing you a means of monitoring your own usage. Introducing generative credit consumption for Acrobat's generative AI features remains an option we may exercise later, and we may revise usage caps whenever we choose — including limiting, throttling, or suspending any usage beyond our limits.
- Allocation: Monthly grants of generative credits ship with Creative Cloud plans and certain Acrobat subscription plans, and these credits fund generative AI content across an assortment of Adobe apps. How many generative credits each plan carries differs, and the count a feature consumes hinges on which feature it is and which plan you hold.
- Renewal: On paid subscriptions, generative credits refresh each month on the billing date that marks when your plan began. Credits left unused don't carry into the following month. Each month your generative credit balance returns to the amount you were allotted. Your reset date is viewable anytime from your Account menu. That monthly reset falls on the day of the month when you first launched or were assigned your plan.

To dig deeper into generative credits across Creative Cloud products, see the generative credits FAQ.

## Content usage and handling

### Frequently asked questions, answered, covering how Adobe handles and uses content specifically to make generative AI capabilities in Acrobat apps better.

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

## Adobe generative AI user disclosures

### The core guidelines and best practices for putting generative AI features to use responsibly and to good effect.

Your access to and use of the generative AI features in Acrobat apps is governed by the Adobe generative AI User Guidelines, which are worth consulting.

Note

Adobe Acrobat, Acrobat Reader, and Adobe Scan are the apps that make up Document Cloud.

Beyond that, always bring your own judgment to bear when weighing generated output and any source attributions. Underpinning the generative AI features are potent, still-emerging large language model technologies, and their output can come out inaccurate or misleading, or can carry content that doesn't speak for Adobe's views. The risk climbs whenever you push these features to produce output that has nothing to do with your source document.

Steer clear of leaning on generative AI features for legal, medical, financial, or any other professional guidance, or for opinions, judgments, or recommendations, unless you've done your own independent consultation or research first. No qualified professional's advice can be replaced by generative AI features, and using them creates no such relationship — an attorney-client relationship being one example.

### Attributions

As the AI Assistant works through a document, it pinpoints the sentences most apt to back up the answer to your question. That attribution might surface as clickable citations or as other helpful signals that point to where the generated information originated. Yet because generative AI models drive the AI Assistant, and the technology keeps evolving and falls short of perfect, not every answer turns out helpful or accurate. The upshot is that the AI Assistant may fail to surface and show answers to your questions, even with the information sitting in your document. On rare occasions, the AI Assistant may hand back wrong attributions. You might, for instance, get a clickable citation or cue that drops you in an unrelated section rather than pointing usefully to where in the document the answer originated. Give every AI-generated response a second look.

Be aware that, in our present version, AI Assistant supplies no attribution at all when the question and response are in a language other than your document's. When that happens, posing your questions in the document's language is worth trying so the response comes back with clickable citations.

Turn to the AI Assistant for questions about using or troubleshooting Acrobat and the answers may draw on Acrobat Help content while leaving out citations. To be sure they're right, verify such responses straight from Acrobat Help.

### Feedback

Built right into the AI Assistant is a feedback mechanism that helps us sharpen accuracy and tackle other performance issues. The work is continuous, and we'll keep partnering with our customers and community to wield the power of this new technology responsibly.

## About podcasts in Adobe Acrobat

See how the Generate podcast feature inside Adobe Acrobat can render documents simpler to grasp and reachable while you're on the move.

What the Generate podcast feature does is convert lengthy, text-dense documents into audio that's easy on the ears, trimming screen time and helping the material sink in. The conversational summaries it builds bend to your needs, be it fast highlights or a fuller exploration of the insights. Inside a PDF Space, the podcast refreshes on its own as files come and go, so the audio is always in step with the newest content. Strategy papers, research files, or detailed reports become listening you can fit around other tasks anytime.

### Learn how to create podcasts: Desktop | Web | Mobile

### Access and availability

The podcast feature calls for signing in. Documents running from 500 characters up to 600 pages are supported, and it reaches Acrobat web, desktop, and mobile (iOS and Android) in the languages and regions that qualify.

The Generate podcast feature is within reach for Individual, Teams, and Enterprise subscribers carrying Acrobat Studio, AI Assistant, or any plan bundling Acrobat AI features. Bringing generative credit consumption to the Generate podcast feature later remains our prerogative, and we may revise usage caps at any point.

### Why it matters

By getting the key points across fast, podcasts can claw back time, ease the strain of staring at a screen, and make knotty subjects simpler to take in. For users facing visual or mobility challenges, they also offer a format that's within reach.

### What you can do

- Produce multi-voice audio so the narration sounds natural.
- Tailor length, expertise level, and playback speed to suit you.
- Keep podcasts and scripts in sync from one device to the next.
- Manage playback by playing, pausing, resuming, and tuning speed and volume.
- Run podcasts in the background, with a mini player along the bottom handling quick controls.
- Offer feedback to make the experience better.

### Who can benefit

A handful of the ways folks put the Podcast feature to work — saving time, holding their focus, and lightening the reading load — are shown here:

## Create podcasts in Adobe Acrobat

Find out how, on desktop, Adobe Acrobat lets you transform your documents into audio podcasts that draw listeners in.

In Acrobat, Generate podcast takes nearly any document or a PDF Space and spins it into a brisk, engaging audio overview — well suited to quick learning, hands-free review, or listening that's within reach. Pick a brief summary or go for a deeper, conversational style, dial in the tone and expertise level, and receive a notification once your audio is ready. Digesting reports, briefs, research, or legal content while on the move becomes that straightforward.

### Turn documents into podcasts

Open the PDF that you want turned into a podcast.

From the top menu, choose Listen to this document, then settle on a format:

- Highlights: For a focused summary
- Deep dive: For detailed exploration

After the podcast is built in the format you chose, an AI podcast control bar shows up along the bottom.

Use the play, pause, and skip controls to listen to your podcast.

For the complete transcript, choose Expand to view Transcript

Tune the settings to taste with the Playback speed and Volume controls.

With Adobe Acrobat you can play the podcast at your chosen settings, look over the transcript, and pass along feedback.

With Adobe Acrobat you can play the podcast at your chosen settings, look over the transcript, and pass along feedback.

To dismiss the podcast control bar, choose More options > Close & hide.

### Turn PDF Spaces into podcasts

Open the PDF Space and, from the left menu, choose Podcasts.

Choose Play to hear the podcast in whichever format you want:

- Highlights: For a focused summary
- Deep dive: For detailed exploration

Hear the podcast in the format you favor. For listening on the move, scan the QR code sitting at the bottom of the Podcasts pane.

Hear the podcast in the format you favor. For listening on the move, scan the QR code sitting at the bottom of the Podcasts pane.

Pick a podcast to bring up the transcript and play it with controls.

Tune the settings to taste with the Playback speed and Volume controls.

A range of controls lets you play podcasts in Adobe Acrobat. A. Playback speed B. Volume C. Transcript D. Provide feedback.

A range of controls lets you play podcasts in Adobe Acrobat. A. Playback speed B. Volume C. Transcript D. Provide feedback.

Choose Hide transcript to take the transcript off the display.

Choose Provide feedback to score the podcast and leave your comments.
