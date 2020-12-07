import React, { Component } from 'react'
import Navbar from './navbar';
import Footer from './footer';

const axios=require('axios').default
class Signup extends Component {
    constructor(props){
        super(props);

        this.state={
            Name : "",
            EmailId : "",
            Password : "",
            ConfirmPassword : "",
            Response : ""
        };
    }

    
    handleNameChange(event){
        this.setState({Name : event.target.value});
    }
   
    handleEmailChange(event){
        this.setState({EmailId : event.target.value});
    }
    handlePassChange(event){
        this.setState({Password : event.target.value});
    }
    handleCpassChange(event){
        this.setState({ConfirmPassword : event.target.value});
    }
    
    handleRedirect(){
        alert('hi')
        this.props.history.push('/login')
    }

    async handleSubmit(event){
        event.preventDefault();
        if(this.state.Password!=this.state.ConfirmPassword)
        {
            alert("Your passwords did not match");
        }
        else if(this.state.Password.length<7)
        {
            alert("Password length must be atleast 7");
        }
        else{
        // axios.post('https://handymanserver.herokuapp.com/users',{
        //     name: this.state.Name,
        //     email: this.state.EmailId ,
        //     password: this.state.Password
        // })
        // .then(
        //     function(response){
        //         alert("successfully created account");
        //         // this.handleRedirect().bind(this)
        //     }
        // )
        // .catch(
        //     function(error){
        //         alert("Please check your entries");
        //     }
        // )
        // }

        try{    
            const resp=await axios.post('https://handymanserver.herokuapp.com/users',{
                name: this.state.Name,
                email: this.state.EmailId ,
                password: this.state.Password
            })
            alert("Account created successfully")
            this.props.history.push("/Login");
            }
            catch(e){
                alert("check your entries");
            }
    }
        
    }

    render() {
        return (
            <div className="tm-proh">
                <Navbar/>
                <div className="container-fluid bg">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12"></div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <form className="form-container1" onSubmit={this.handleSubmit.bind(this)}>
                            <h1 className="d-flex justify-content-center">Sign Up</h1>
                            <div className="form-group">
                                <label for="exampleInputEmail1"><h5 className="m-0 p-0">Name :</h5></label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.Name} placeholder="Name" onChange={this.handleNameChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1"><h5 className="m-0 p-0">Email :</h5></label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.EmailId} placeholder="Email" onChange={this.handleEmailChange.bind(this)}/>
                                <h6 className="wfont">We'll never share your email with anyone else.</h6>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1"><h5 className="m-0 p-0">Password :</h5></label>
                                <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.Password} placeholder="Password" onChange={this.handlePassChange.bind(this)}/>
                                <h6 className="wfont">*Password length must be atleast 7. Password must contain atleast one number,alphabet and special character</h6>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1"><h5 className="m-0 p-0">Confirm Password :</h5></label>
                                <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.ConfirmPassword} placeholder="Confirm Password" onChange={this.handleCpassChange.bind(this)}/>
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

export default Signup;