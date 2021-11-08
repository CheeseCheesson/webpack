import css from "../style.css";
import img from '../assets/js.jpg';

const imageContainerHtml = document.querySelector('.myImage')

const imgHTML = document.createElement('img')
imgHTML.className = 'img-item'
imgHTML.src = img

imageContainerHtml.append(imgHTML)