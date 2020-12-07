import React, { Component } from 'react';
import './style.css';
import Navbar from './navbar';
import Footer from './footer';

const axios=require('axios');

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            EmailId: "",
            Passsword: ""
        };
    }
    

    handleSuccessfullLogin(data){
        this.props.handleLogin(data);
        this.props.history.push("/");
    }
    
    handleEmailIdChange(event){
        this.setState({EmailId : event.target.value});
    }

    handlePassChange(event){
        this.setState({Password : event.target.value});
    }


    async handleSubmit(event){
        event.preventDefault();
       // alert("hi");
        let data={
            email: this.state.EmailId ,
            password: this.state.Password
        };
        
        axios.post('https://handymanserver.herokuapp.com/users/login',data)
        .then(
            resp=>{
                
                localStorage.setItem('token' , 'Bearer ' + resp.data.token);
                this.props.history.push("/");
            }
        )
        .catch(
            error=>{
            alert("Check your credentials!!");}
        )
            
    }
    

    render() {
            return (
            
            <div className="tm-proh">
                <Navbar/>
                <div className="container-fluid bg mb-0">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12"></div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <form className="form-container" onSubmit={this.handleSubmit.bind(this)}>
                            <h1 className="d-flex justify-content-center">Login</h1>
                            <div className="form-group m-0 p-0">
                                <label for="exampleInputEmail1"><h5 className="m-0 p-0">Enter Email :</h5></label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.EmailId} placeholder="Enter Email ID" onChange={this.handleEmailIdChange.bind(this)}/>
                                <h6>We'll never share your email with anyone else.</h6>
                            </div>
                            <div className="form-group m-0 p-0 mb-3">
                                <label for="exampleInputPassword1"><h5 className="m-0 p-0">Enter Password :</h5></label>
                                <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.Password} placeholder="Enter Password" onChange={this.handlePassChange.bind(this)}/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12"></div>
                    </div>
                    
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Login;