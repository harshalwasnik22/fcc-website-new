// import './style.css'

const fade = () => {
    const wrapper= 
        document.querySelector('.loader-wrapper');
        wrapper.classList.add('fade');
};
window.addEventListener('load', fade);