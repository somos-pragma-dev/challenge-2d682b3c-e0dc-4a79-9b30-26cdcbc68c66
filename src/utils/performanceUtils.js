export const loadImage = (src) => {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    document.body.appendChild(img);
  };
};