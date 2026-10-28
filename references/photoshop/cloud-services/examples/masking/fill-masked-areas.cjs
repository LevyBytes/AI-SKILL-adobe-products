const { submitMaskingJob } = require("./masking-job-service.cjs");
async function fillMaskedArea(sourceImageUrl, maskUrls, options) {
    if (!sourceImageUrl || !Array.isArray(maskUrls) || !maskUrls.length || maskUrls.some(url => !url)) {
        throw new Error("Provide a source image URL and at least one mask URL");
    }
    const payload = {
        image: {source: {url: sourceImageUrl}},
        masks: maskUrls.map(url => ({source: {url}}))
    };
    const result = await submitMaskingJob("/v1/fill-masked-areas", payload, options);
    if (!result.image?.destination?.url) throw new Error("Successful fill response has no image URL");
    return result.image.destination.url;
}
module.exports = { fillMaskedArea };
