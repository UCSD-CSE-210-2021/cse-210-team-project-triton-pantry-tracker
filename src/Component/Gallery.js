import { Gallery } from 'devextreme-react/gallery';
import React from 'react'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import "../App.css";
import Navbar from './Navbar';

const dataSource = [
    'https://basicneeds.ucsd.edu/_images/calfresh/cup-of-noodles.jpg',
    'https://basicneeds.ucsd.edu/_images/tfp/tfp-opening.jpg',
    'https://returntolearn.ucsd.edu/_images/info-for/students/triton-food-pantry.jpg',
    'https://gradlife.ucsd.edu/_images/health-wellbeing-images/triton-food-pantry.jpg',
    'http://blogs.umsl.edu/news/files/2020/11/Triton-Pantry-818.jpg',
    'http://blogs.umsl.edu/news/files/2020/11/Triton-Pantry-818.jpg'

];

function MyGallery(params) {

        return (
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="http://blogs.umsl.edu/news/files/2020/11/Triton-Pantry-818.jpg" alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="http://blogs.umsl.edu/news/files/2020/11/Triton-Pantry-818.jpg" alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="..." alt="Third slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        );
}

export default MyGallery;
