# Disable Color Management

Disable Color Management in Adobe Premiere when you need to preserve the media's original color properties.

Select the sequence where Disable Color Management should be used.

Select Window > Lumetri Color.

Open Settings in the Lumetri Color panel, then choose Sequence settings.

In the Color Setup drop down menu, choose Disable Color Management.

Turning off color management keeps the media's original color properties from being changed automatically.

This turns off both automatic input-to-working color space conversion and automatic working-to-output color space conversion.

With this setting, Premiere treats all media as Rec.709 so behavior matches the period before color management was added. This is useful in two situations:

- When using Premiere for a full pass-through workflow in which imported and exported media should keep its color space unchanged.
- When using a fully manual workflow with input LUTs to transform clips into the working color space, then applying manual color correction with Lumetri or other effects in a traditional display-referred workflow.
