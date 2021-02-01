import Logo from './logo.png';

export const addLogo = (element) => {
    const img = new Image();
    window.qwerty = img;
    
    img.src = Logo;
    
    element.appendChild(img);
};
