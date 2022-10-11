import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'antd';
import "./style.css"

const Vehicle = (props) => {
    const [isOpen, setOpen] = useState(false)
    const [index, setIndex] = useState('')
    const savedData = JSON.parse(localStorage.getItem('info')) || []
    const [data, setData] = useState(savedData)
   const [isVisible,setVisible] = useState(false)
    const [vehicle, setVehicle] = useState({
        name: "",
        brand: "",
        number: "",
        entry: "",
        exit: "",

    });

    const handleSubmit = (e) => {
        const { name, brand, number, entry, exit } = vehicle
        e.preventDefault();
        if(isVisible)
        return false
        const licensePlateRegex = /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/;
        if (name === '' || brand === '' || number === '' || entry === '' || exit === '') {
            alert('All fields must me filled!');
            return false;
        }
        if (exit < entry) {
            // alert('Exit time is lower than Entry time');
            setVisible(true)
        }
        if (!licensePlateRegex.test(number)) {
            alert('License Plate must be like CC NN CC NNNN eg, HP 31 A 6452');
            return false;
        }

        if (data.length > 4) {
            alert("All slots occupied")
            return false

        }
        setData(current => [...current, vehicle]);
        // setData(data)
        setVehicle({
            name: "",
            brand: "",
            number: "",
            entry: "",
            exit: "",
        })

    }

    localStorage.setItem('info', JSON.stringify(data))

    const handleChange = (e) => {

        const { name, value } = e.target
        // console.log("e", e.target)
        // console.log(name, value)

        setVehicle({ ...vehicle, [name]: value })

    }

    const handleCheckout = (elem, i) => () => {
        setIndex(i)
        setOpen(true)
    }

    const confirmCheckout = () => {
        const filteredArray = savedData.filter((item, ind) => index !== ind)
        // savedData.splice(i, 1)
        setData([...filteredArray]);
        localStorage.setItem('info', JSON.stringify(filteredArray))
        setOpen(false)
    }

    console.log("isrender")

    return (
        <>
            <h1>Parking Management System</h1>
            <div id="form-container">
                <h3>Add Details</h3>
                <form onSubmit={handleSubmit}>
                    <div class="">
                        <input type="text" class="inputBox" id="input-name" placeholder="Name"
                            required name="name" value={vehicle.name} onChange={handleChange}
                        />
                        <input type="text" class="inputBox" id="input-vname" placeholder="Vehicle Name"
                            required name="brand" value={vehicle.brand} onChange={handleChange}
                        />
                        <input type="text" class="inputBox" id="input-vnumber" placeholder="Vehicle Number Plate"
                            required name="number" value={vehicle.number} onChange={handleChange}
                        />
                        <input type="time" class="inputBox" id="input-entry" placeholder="Entry"
                            required name="entry" value={vehicle.entry} onChange={handleChange}
                        />
                        <input type="time" class="inputBox" id="input-exit" placeholder="Exit Date"
                            required name="exit" value={vehicle.exit} onChange={handleChange}
                        />
                    </div>
                    <div style={{display:isVisible?'block':'none'}}>less time than entry</div>
                    <input type="submit" id="submit" value="Submit" />
                    <br /><br />
                </form>
            </div>
            <div id="park">
                <p>Number Of Vehicle In Parking</p>
                <div id="img-div">
                    <div id="img">
                        {!savedData.length ? (<>
                            <img style={{ width: '250px' }} id="img" src="https://png.pngtree.com/background/20220722/original/pngtree-an-empty-parking-building-picture-image_1716146.jpg" />
                        </>) : (<>
                            <img id="img" src="https://images.unsplash.com/photo-1586462020787-a647628f4d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwcG5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=200&q=60" />
                        </>)}
                        {/* <img id="img" src="https://images.unsplash.com/photo-1586462020787-a647628f4d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwcG5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=200&q=60"/> */}
                    </div>
                    {savedData.length ? (<>

                        <p id="count">
                            total Vehicle :
                            {data.length}
                        </p>
                    </>) : (<>
                        <p id="count">
                            All Slots Vacant

                        </p></>)}
                </div>
            </div>
            <h3>Vehicle Details</h3>
            <table id="styled-table">
                {/* x */}

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Vehicle Name</th>
                        <th>Vehicle Number Plate</th>
                        <th>Entry Time</th>
                        <th>Exit Time</th>
                        <th>Checkout</th>
                    </tr>
                </thead>
                {savedData.map((el, i) => {
                    // console.log(i, 'e')
                    return (
                        <tbody id="datagohere">

                            <td>{el.name}</td>
                            <td>{el.brand}</td>
                            <td>{el.number}</td>
                            <td>{el.entry}</td>
                            <td>{el.exit}</td>
                            <td onClick={handleCheckout(el, i)}>Checkout</td>
                        </tbody>
                    )
                })}


            </table>


            <Button onClick={() => setOpen(!isOpen)}>HEllo</Button>
            <Modal title="modal" open={isOpen} onOk={confirmCheckout} onCancel={() => setOpen(false)} >
                <p>Are You Sure</p>
            </Modal>

            <div id="footer-container">
                <footer>
                    <a> Designed by Aditya Raj </a>
                </footer>
            </div>


        </>
    )
}

export default Vehicle