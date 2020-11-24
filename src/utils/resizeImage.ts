import loadImage from 'blueimp-load-image';

export const resizeImage = (file) => {
    return new Promise((resolve) => {
        loadImage(file, (canvas: HTMLCanvasElement) => {
            resolve(canvas.toDataURL('image/jpg'));
        }, { maxWidth: 1920, canvas: true });
    });
};
