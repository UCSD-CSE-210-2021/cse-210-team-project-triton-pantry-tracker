import { Gallery } from 'devextreme-react/gallery';
import React from 'react'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import "../App.css";
import Navbar from './Navbar';
import ImageGallery from 'react-image-gallery';

const dataSource = [
    'https://basicneeds.ucsd.edu/_images/calfresh/cup-of-noodles.jpg',
    'https://basicneeds.ucsd.edu/_images/tfp/tfp-opening.jpg',
    'https://returntolearn.ucsd.edu/_images/info-for/students/triton-food-pantry.jpg',
    'https://gradlife.ucsd.edu/_images/health-wellbeing-images/triton-food-pantry.jpg',
    'http://blogs.umsl.edu/news/files/2020/11/Triton-Pantry-818.jpg'

];

const images = [
  {
    original: 'https://basicneeds.ucsd.edu/_images/calfresh/cup-of-noodles.jpg',
    // thumbnail: 'https://basicneeds.ucsd.edu/_images/tfp/tfp-opening.jpg',
  },
  {
    original: 'https://returntolearn.ucsd.edu/_images/info-for/students/triton-food-pantry.jpg',
    // thumbnail: 'https://gradlife.ucsd.edu/_images/health-wellbeing-images/triton-food-pantry.jpg',
  },
  {
    original: 'http://blogs.umsl.edu/news/files/2020/11/Triton-Pantry-818.jpg',
    // thumbnail: 'https://basicneeds.ucsd.edu/_images/tfp/Triton-Food-Pantry-logo.jpg',
  },
];

function MyGallery(params) {

  return (
      <Gallery className="background-image"
          dataSource={dataSource}
          height={500}
          width={1500}
          slideshowDelay={1500}
      />
  );
}


export default MyGallery;
