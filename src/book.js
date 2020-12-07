import React, { Component } from 'react'
import './style3.css';
import Navbar from './navbar'
import Footer from './footer';



const axios=require('axios');


export default class book extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: "",
            time: "",
            address: "",
            city: "",
            stat: "",
            pincode: "",
            serviceType: "",
            phone : "",
            name: "",
            desc: ""
        };
    }
    componentWillMount(){
        this.setState({serviceType : localStorage.getItem('service')});
    }
    handleNameChange(event){
        this.setState({name : event.target.value});
    }
    handleAddressChange(event){
        this.setState({address : event.target.value});
    }
    handleCityChange(event){
        this.setState({city : event.target.value});
    }
    handleStateChange(event){
        this.setState({stat : event.target.value});
    }
    handlePincodeChange(event){
        this.setState({pincode : event.target.value});
    }
    handlePhoneChange(event){
        this.setState({phone : event.target.value});
    }
    handleDateChange(event){
        this.setState({date : event.target.value});
    }
    handleTimeChange(event){
        this.setState({time : event.target.value});
    }
    handleDescChange(event){
        this.setState({desc : event.target.value});
    }

    async handleSubmit(event){
        event.preventDefault();
        try{
        const r1=await axios.get('https://handymanserver.herokuapp.com/users/me',{
            headers: {
                'Authorization': localStorage.getItem('token')
              }
        })
        if(this.state.phone.length != 10){
            alert("Phone no must contain 10 digits");
            return;
        }
        if(this.state.pincode.length !=6){
            alert("Pincode must contain 6 digits");
            return;
        }     
        try{
        const resp = await axios.post('https://handymanserver.herokuapp.com/tasks',  
        {
            "name": this.state.name,
            "description": this.state.desc,
            "date": this.state.date,
            "time": this.state.time,
            "address": this.state.address,
            "city": this.state.city,
            "state": this.state.stat,
            "pincode": this.state.pincode,
            "servicetype": this.state.serviceType,
            "phnumber": this.state.phone 
        },
        {
        headers:{
            "Authorization":localStorage.getItem('token')
        }
        }
        );
        alert("Your booking is successfull");
        this.props.history.push("/");
        }
        catch(e){
            alert("check your entries");
        }
        }
        catch(e){
            alert("Please login to book your service");
        }
        
    }
    render() {
        return (
            <div className="tm-proh">
                <Navbar/>
                <div className="container1 mb-5">
                <div className="book ">
                    <div className="description ">
                    <h1><strong>Book</strong> your Task</h1>
                    <p>
                        <strong>Handyman Services!</strong>
                    </p>
                    <div class="quote">
                        <p>
                            Why should you choose us?
                        </p>
                    </div>
                    <ul>
                        <li>Super reliable service</li>
                        <li>24/7 customer srvice</li>
                        <li>Help and support</li>
                        <li>Wide range services</li>
                    </ul>
                    </div>
                    <div className="form1">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <strong>{this.state.serviceType}</strong>
                        <div className="inpbox p-2">
                        <input type="text" placeholder="Name" onChange={this.handleNameChange.bind(this)}/>
                        </div>
                        <div className="inpbox p-2">
                        <input type="text" placeholder="Phone" onChange={this.handlePhoneChange.bind(this)}/>
                        </div>
                        <div className="inpbox p-2">
                        <input type="date" placeholder="Date" onChange={this.handleDateChange.bind(this)}/>
                        </div>
                        <div className="inpbox p-2">
                        <input type="time" placeholder="Choose time" onChange={this.handleTimeChange.bind(this)}/>
                        </div>        
                        <div className="inpbox p-2"> 
                        <input type="text" placeholder="Address" onChange={this.handleAddressChange.bind(this)}/>
                        </div>
                        <div className="inpbox p-2">
                        <input type="text" placeholder="City" onChange={this.handleCityChange.bind(this)}/>
                        </div>
                        <div className="inpbox p-2">
                            <input type="text" placeholder="State" onChange={this.handleStateChange.bind(this)}/>
                        </div>
                        <div className="inpbox p-2">
                        <input type="text" placeholder="Pin" onChange={this.handlePincodeChange.bind(this)}/>
                        </div>
                        <div className="inpbox full p-2">
                        <input type="text" placeholder="Description" onChange={this.handleDescChange.bind(this)}/>
                        </div>
                        <button type="submit" className="subt">Book</button>
                    </form>
                    </div>
                </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
