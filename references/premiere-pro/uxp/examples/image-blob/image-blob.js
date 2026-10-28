function getPixel() {
    const imageElement = document.getElementById("image");
    if (!imageElement) throw new Error("The image element is missing.");
    const imageMetaData = {
        width: 8,
        height: 8,
        colorSpace: "RGB",
        colorProfile: "",
        pixelFormat: "RGB",
        components: 3,
        componentSize: 8,
        hasAlpha: false,
        type: "image/uncompressed"
    };
    const pixels = new Uint8Array(
        imageMetaData.width * imageMetaData.height * imageMetaData.components
    );
    for (let i = 0; i < imageMetaData.width * imageMetaData.height; i++) {
        pixels[i * 3] = 255;
        pixels[i * 3 + 1] = 0;
        pixels[i * 3 + 2] = 0;
    }
    const blob = new ImageBlob(pixels, imageMetaData);
    const url = URL.createObjectURL(blob);
    function releaseURL() {
        imageElement.removeEventListener("load", releaseURL);
        imageElement.removeEventListener("error", releaseURL);
        URL.revokeObjectURL(url);
    }
    imageElement.addEventListener("load", releaseURL);
    imageElement.addEventListener("error", releaseURL);
    imageElement.src = url;
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("pixel-btn").addEventListener("click", getPixel);
});
