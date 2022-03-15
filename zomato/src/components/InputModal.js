import React, { useState } from 'react'

function InputModal() {
    let data={
        company:"",
        name:"",
        break_system:"",
        engine_capacity:"",
        fuel_type:"",
        gear_type:"",
        image_url:"",
        mileage:"",
        onroad_price:"",
        power_steering:"",
        seating_capacity:"",
        showroom_price:"",
    }
    const [add, SetAdd] = useState(data)
    const [err, Seterr] = useState(data)

    let handleInput = (e) => {
        const { name, value } = e.target
        SetAdd({ ...add, [name]: value })
    }
    let handleSelect = (e) => {
        const { name, value } = e.target
        SetAdd({ ...add, [name]: value })
    }
    console.log(add);

    let handleSubmit=()=>{
        let myErr=validate(add)
        Seterr(myErr)
        apiCall()
    }

    const validate=(add)=>{
        let error={}
        console.log(error);
        if (!add.company)  error.company="Enter The Car Company"
        if (!add.name) error.name="Enter The Car Name"
        if(!add.break_system && add.break_system!=="select") error.break_system="Enter The Car break System"
        if(!add.engine_capacity) error.engine_capacity="Enter The Car Engine capacity"
        if(!add.fuel_type && add.fuel_type!=="select") error.fuel_type="Enter The Car break System"
        if(!add.gear_type && add.gear_type!=="select") error.gear_type="Enter The Car break System"
        if(!add.image_url) error.image_url="Enter The Car break System"
        if(!add.mileage) error.mileage="Enter The Car mileage"
        if(!add.onroad_price) error.onroad_price="Enter The Car onroad price"
        if(!add.power_steering && add.power_steering!=="select") error.power_steering="Enter The Car power steering"
        if(!add.seating_capacity && add.seating_capacity!=="select") error.seating_capacity="Enter The Car seating capacity"
        if(!add.showroom_price) error.showroom_price="Enter The Car showroom price"
        return error
    }

    let apiCall= async ()=>{
            if(err.length===0)
            {
                try{
                    let axiosCall= await axios.post("/http/localhost")
                    let response= await axiosCall.data
                    console.log(response);
                }
                catch(err)
                {
                    alert(err.message)
                }
            }
    }

    return (
        <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Edit
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className='d-flex justify-content-around'>
                                    <div>
                                        <div class="form-group text-left text-left">
                                            <label  className='mb-0'>Car Company</label>
                                            <input type="text" class="form-control" name="company" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" onChange={handleInput} value={add.company} />
                                                <span style={{color:"red",fontSize:"12px"}}>{err.company}</span>
                                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                        <div class="form-group text-left">
                                            <label  className='mb-0'>Car Name</label>
                                            <input type="text" class="form-control" name="name" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" onChange={handleInput} value={add.name} />
                                                <span style={{color:"red",fontSize:"12px"}}>{err.name}</span>
                                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                        <div class="form-group text-left">
                                            <label  className='mb-0'>Fuel Type</label>
                                            <select class="form-control" name="fuel_type" onClick={handleSelect} >
                                                <option value="select">--select--</option>
                                                <option value="diesel">Diesel</option>
                                                <option value="petrol">Petrol</option>
                                                <option value="electric">Electric</option>
                                                <option value="cng">CNG</option>
                                            </select>
                                            <span style={{color:"red",fontSize:"12px"}}>{err.fuel_type}</span>
                                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                        <div class="form-group text-left">
                                            <label  className='mb-0'>Gear Type</label>
                                            <select class="form-control" name="gear_type" onClick={handleSelect}>
                                                <option value="select">--select--</option>
                                                <option value="automatic">Automatic</option>
                                                <option value="manual">Manual</option>
                                            </select>
                                            <span style={{color:"red",fontSize:"12px"}}>{err.gear_type}</span>
                                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                        <div class="form-group text-left">
                                            <label  className='mb-0'>Break System</label>
                                            <select class="form-control" name="break_system" onClick={handleSelect}>
                                                <option value="select" >--select--</option>
                                                <option value="disc break">Disc Break</option>
                                                <option value="drum break">Drum Break</option>
                                            </select>
                                            <span style={{color:"red",fontSize:"12px"}}>{err.break_system}</span>

                                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                        <div class="form-group text-left">
                                            <label  className='mb-0'>Mileage</label>
                                            <input type="number" class="form-control" id="exampleInputEmail1" name="mileage"
                                                aria-describedby="emailHelp" onChange={handleInput} value={add.mileage} />
                                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                            <span style={{color:"red",fontSize:"12px"}}>{err.mileage}</span>

                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-group text-left">
                                            <label  className='mb-0'>Image Url</label>
                                            <input type="url" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                name="image_url" onChange={handleInput} value={add.image_url} />
                                            <span style={{color:"red",fontSize:"12px"}}>{err.image_url}</span>

                                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div> <div class="form-group text-left">
                                            <label  className='mb-0'>On Road Price</label>
                                            <input type="number" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" name="onroad_price" onChange={handleInput} value={add.onroad_price} />
                                            <span style={{color:"red",fontSize:"12px"}}>{err.onroad_price}</span>

                                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                        <div class="form-group text-left">
                                            <label  className='mb-0'>Engine Capacity</label>
                                            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                name="engine_capacity" onChange={handleInput} value={add.engine_capacity} />
                                            <span style={{color:"red",fontSize:"12px"}}>{err.engine_capacity}</span>

                                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                        <div class="form-group text-left">
                                            <label  className='mb-0'>Showroom Price</label>
                                            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                name="showroom_price" onChange={handleInput} value={add.showroom_price} />
                                            <span style={{color:"red",fontSize:"12px"}}>{err.showroom_price}</span>

                                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}

                                        </div>

                                        <div class="form-group text-left">
                                            <label  className='mb-0'>Steering Type</label>
                                            <select class="form-control" name="power_steering" onChange={handleSelect}>
                                                <option value="select">--select--</option>
                                                <option value="Power steering">Power steering</option>
                                                <option value="Normal Steering">Normal Steering</option>
                                            </select>
                                            <span style={{color:"red",fontSize:"12px"}}>{err.power_steering}</span>

                                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                        <div class="form-group text-left">
                                            <label  className='mb-0'>Seating Capacity</label>
                                            <select class="form-control" name="seating_capacity" onChange={handleSelect}>
                                                <option value="select">--select--</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                            </select>
                                            <span style={{color:"red",fontSize:"12px"}}>{err.seating_capacity}</span>
                                            
                                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputModal