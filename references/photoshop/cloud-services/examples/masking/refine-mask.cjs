const { submitMaskingJob } = require("./masking-job-service.cjs");
async function refineMask(sourceImageUrl, maskUrl, options) {
    if (!sourceImageUrl || !maskUrl) throw new Error("Provide source image and mask URLs");
    const payload = {
        image: {source: {url: sourceImageUrl}},
        mask: {source: {url: maskUrl}},
        colorDecontamination: false
    };
    return submitMaskingJob("/v1/refine-mask", payload, options);
}
module.exports = { refineMask };
