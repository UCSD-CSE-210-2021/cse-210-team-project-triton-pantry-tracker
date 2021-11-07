import { Gallery } from 'devextreme-react/gallery';
import React from 'react'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import "../App.css";
import Navbar from './Navbar';

const dataSource = [
    'https://basicneeds.ucsd.edu/_images/tfp/Triton-Food-Pantry-logo.jpg',
    'https://basicneeds.ucsd.edu/_images/calfresh/cup-of-noodles.jpg',
    'https://basicneeds.ucsd.edu/_images/tfp/tfp-opening.jpg'
];

function MyGallery(params) {

        return (
            <Gallery className="background-image"
                dataSource={dataSource}
                height={10}
                width={1500}
                slideshowDelay={1500}
            />
        );
}

export default MyGallery;
