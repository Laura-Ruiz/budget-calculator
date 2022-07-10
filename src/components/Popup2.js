
import React from 'react';
import '../styles/style.css'
export default function Popup(props) {
    if (props.trigger) {
        return (
            <div className='popup' onClick={() => props.setTrigger(false)}>
                <div className='popup-inner' >
                    {props.children}
                </div>
            </div>
        )
    } else {
        return (
            ""
        )
    }
    // return (props.trigger) ? (

    //     <div className='popup' onClick={() => props.setTrigger(false)}>
    //         <div >
    //             <div className='popup-inner' >
    //                 {props.children}
    //             </div>
    //         </div>
    //     </div>
    // ) : "";
}