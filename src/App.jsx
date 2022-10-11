import logo from './logo.svg';
import './App.css';
import Vehicle from './Vehicle/Vehicle'
import {Button,Modal} from 'antd';
import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';

function App() {
  const [isOpen,setOpen ] = useState(false)

  return (
    <div className="App">
     <Vehicle/>
     {/* <Button onClick={()=>setOpen(!isOpen)}>HEllo</Button>
                <Modal title="modal" open={isOpen}>
                    <p>testing..</p>
                </Modal> */}
    </div>
  );
}

export default App;
