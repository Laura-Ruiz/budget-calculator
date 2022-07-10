import React from 'react';
import { BtnImg } from '../styled';
import infoImg from "../img/info.png";
import '../styles/style.css'
import { useState } from "react"


export default function Popup(props) {

    const [showPopup, setShowPopup] = useState(false);


    function openPopup() {
        setShowPopup(true);
    }

    function hidePopup() {
        setShowPopup(false);
    }

    return (
        <div>
            <div className='container-img'>
                <BtnImg src={infoImg} alt="info icon" onClick={openPopup} />
            </div>
            {showPopup &&
                <div className='popup' onClick={hidePopup}>
                    <div className='popup-inner' onClick={(e) => e.stopPropagation()}>
                        {props.texto}
                    </div>
                </div>
            }

        </div>
    )


}

