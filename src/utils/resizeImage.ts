import imageCompression from "browser-image-compression";

const resizeImage = async (image: File) => {
    return await imageCompression(image, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1500
    });
};

export default resizeImage;
