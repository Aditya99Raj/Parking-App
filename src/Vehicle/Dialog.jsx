import React, { useState } from 'react'
import { Button, Modal } from 'antd';

const Dialog = (props) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    console.log({props})

    // const showModal = () => {
    //     setIsModalOpen(true);
    // };

    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };

    // const handleCancel = () => {
    //     setIsModalOpen(false);
    // };

    return (
        <>
            <Modal title={props.title} 
            open={true} 
            // onOk={handleOk} onCancel={handleCancel}
            
            >
                <p>gjehbhjdbsjbsd</p>
               {/* {props.children} */}
            </Modal>
        </>
    );
};

export default Dialog;