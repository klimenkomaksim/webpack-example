export const addButton = (element) => {
    const button = document.createElement("button");
    
    button.innerHTML = "Do Something";
    
    element.appendChild(button);
};
