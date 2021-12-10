import { Gallery } from 'devextreme-react/gallery';
import React from 'react'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import "../App.css";
import Navbar from './Navbar';

const dataSource = [
    'https://bot.dialogflow.com/a5511691-3522-4684-a86c-f66358232f60'
];

function Chatbot(params) {

        return ( <div className=" spacing text-center " >
            <iframe
            allow="microphone;"
            width="550"
            height="450"
            src="https://console.dialogflow.com/api-client/demo/embedded/1c5c5b2e-0c7e-4cc5-a6dd-8544d2dd8010">
            </iframe>
        </div>

        );
}

export default Chatbot;
