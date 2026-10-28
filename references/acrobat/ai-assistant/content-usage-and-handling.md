# Content usage and handling

## Does Acrobat train language models on customer content?

Adobe does not use customer content to train the generative AI models that deliver Acrobat features. Prompts do not change the underlying model. See the [Acrobat PDF Spaces FAQ](https://helpx.adobe.com/acrobat/desktop/explore-pdf-spaces/pdf-spaces-faq.html) and Adobe's [enterprise security guidance](https://blog.adobe.com/en/publish/2024/05/08/adobe-acrobat-ai-assistant-enterprise-our-commitment-data-governance-security).

## When does document content leave the device?

AI Assistant uses cloud processing for document questions and summaries requested through its generative AI service. Adobe's enterprise security guidance identifies Microsoft Azure OpenAI Service together with Adobe technology. The [Adobe staff explanation of document processing](https://community.adobe.com/questions-9/how-acrobat-processes-pdf-documents-and-when-adobe-cloud-services-are-used-1248168) distinguishes this from simply opening a locally stored PDF and describes local processing of the desktop overview shown when a PDF opens.

To prevent use of generative AI processing, follow [Turn off generative AI features](turn-off-generative-ai-features.md).

## How long are session data and reports kept?

The enterprise service caches extracted document content, prompts and responses for 12 hours. Retained chat history and reported content have separate handling. Adobe's [enterprise security factsheet](https://www.adobe.com/dc-shared/assets/pdf/acrobat/business/gen-ai/adobe-acrobat-aiassistant-security-fact-sheet.pdf) describes the following retention rules:

- Reported harmful, illegal or offensive content is kept for 30 days, with exceptions for other legal retention grounds.
- When an enterprise explicitly consents to session-data access for product improvement, the related file, prompts and responses are retained for 30 days in secured, encrypted storage.
- A small group of trained Adobe employees can review reported issues and consented feedback through algorithmic and manual processes.
- Early deletion can be requested through the [Adobe Privacy Policy](https://www.adobe.com/privacy/policy.html).

These retention rules do not determine how long a user's own chat history remains available. See [chat history storage](ai-assistant-chat-history/understand-chat-history-storage.md) and [clearing history](ai-assistant-chat-history/clear-chat-history.md).

## What controls apply to product-improvement analysis?

The [Content Analysis FAQ](https://helpx.adobe.com/account/individual/terms-policies-and-regulations/content-analysis-faq.html) covers analysis of content processed or stored on Adobe servers. Locally processed or stored content is excluded from that product-improvement analysis.

- Personal accounts can sign in to [account privacy settings](https://account.adobe.com/privacy) and turn off Content analysis for product improvement. Minors without this setting are automatically opted out.
- Business, team, company and school accounts or profiles are automatically opted out and have no account toggle.
- The opt-out does not disable app features. It does not cover analysis while signed out or content proactively submitted through feedback, beta, prerelease, user-study or other improvement programs.
- Limited human review can apply to public content, submitted feedback, program participation or content stripped of user material and identifying features. Nonpublic review uses personnel subject to confidentiality and privacy training.

This product-improvement policy is distinct from Acrobat's no-training commitment. Review the submission options before sending feedback, documents, prompts or generated responses.

## Where can enterprise data be processed?

[Document Cloud hosting locations](https://www.adobe.com/trust/document-cloud-hosting-locations.html) describes regional pinning for EU and US enterprise customers. Their AI Assistant data is processed and temporarily cached for up to 12 hours within the designated region. The EU configuration uses Ireland for caching and currently Sweden for LLM processing; US enterprise data is handled in the US. Reported feedback is handled separately. Other service and identity-data locations have their own rules.

## What account and language requirements apply?

Use the [account and login requirements](generative-ai-technical-requirements/account-and-login-requirements.md) before starting: a supported Adobe ID, an online connection and enabled generative AI features are required. Check [supported file languages](generative-ai-technical-requirements/supported-file-languages.md), [feature availability by language](generative-ai-technical-requirements/supported-languages-for-gen-ai-features.md) and [application language settings](generative-ai-technical-requirements/app-settings.md) separately.

## How can I control chat history?

Chat history contains prompts and responses for a document or PDF Space and may be used as context for later answers. Removing a document from a PDF Space can leave its content in history. Open the relevant file or PDF Space from recent files to access it.

Use the [history controls](ai-assistant-chat-history/review-chat-history-controls.md) for enterprise administration and [clear history](ai-assistant-chat-history/clear-chat-history.md) to remove associated prompts, responses and overviews. [Export and sharing limits](ai-assistant-chat-history/review-export-and-sharing-limits.md) explain manual copying. Disconnecting third-party storage makes its related files and history unavailable in Acrobat; see [disconnecting cloud storage](ai-assistant-chat-history/disconnect-third-party-cloud-storage.md).
