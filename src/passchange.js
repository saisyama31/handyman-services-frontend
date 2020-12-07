import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import {Button,Form} from 'react-bootstrap'


const axios = require('axios');

export default class passchange extends Component {

    constructor(props){
        super(props);
        this.state={
            name: "",
            oldp : "",
            newp : "",
            cnewp : "",
            imgurl : ""
        }
    }

    async componentDidMount(){
        const resp = await axios.get('https://handymanserver.herokuapp.com/users/me',{
            headers: {
                'Authorization': localStorage.getItem('token')
              }
        });

        if(resp.status==200){
            this.setState({name : resp.data.name});
        }

        axios.get(`https://handymanserver.herokuapp.com/users/${resp.data._id}/avatar`)
        .then(
            response=>{
                this.setState({imgurl : `https://handymanserver.herokuapp.com/users/${resp.data._id}/avatar`}) ;
            }
        )
        .catch(
            error=>{
                this.setState({imgurl : '/images/prof.png'});
            }
        )
    }

    handleNameChange(event){
        this.setState({name : event.target.value})
    }

    handleOldpChange(event){
        this.setState({oldp : event.target.value})
    }

    handleNewpChange(event){
        this.setState({newp : event.target.value})
    }

    handleCnewpChange(event){
        this.setState({cnewp : event.target.value})
    }

    async handleSubmit(event){
        event.preventDefault();
        const resp = await axios.get('https://handymanserver.herokuapp.com/users/me',{
            headers: {
                'Authorization': localStorage.getItem('token')
              }
        })
        let emailid = resp.data.email;
        let data={
            email: emailid ,
            password: this.state.oldp
        };

        axios.post('https://handymanserver.herokuapp.com/users/login',data)
        .then(
            resp=>{
                if(this.state.newp !== this.state.cnewp){
                    alert("New passwords you entered did not match");
                    return;
                }
                if(this.state.newp.length<7){
                    alert("New password length must be atleast 7");
                    return;
                }
                axios.patch('https://handymanserver.herokuapp.com/users/me',
                    {
                        name : this.state.name,
                        password : this.state.newp
                    },
                    {
                    headers : {
                        'Authorization' : localStorage.getItem('token')
                    }
                    }
                    
                )
                .then(
                    resp=>{
                        alert("Changes saved")
                    }
                )
                .catch(
                    error=>{
                        alert("Check your new password")
                    }
                )
            }
        )
        .catch(
            error=>{
            alert("Current password you entered is wrong");
            }
        )
        
    
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div class = "card-cont">
                <center><img src={this.state.imgurl} className="r-image" width = "100px" height="100px"  /></center>
                    <h5>Change Username/Password</h5>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Group>
                        <Form.Label>Username:</Form.Label>
                        <Form.Control value={this.state.name} type="text" placeholder="Username" onChange={this.handleNameChange.bind(this)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Current Password:</Form.Label>
                        <Form.Control value={this.state.oldp} type="password" placeholder="Old Password" onChange={this.handleOldpChange.bind(this)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>New Password:</Form.Label>
                        <Form.Control value={this.state.newp} type="password" placeholder="New Password" onChange={this.handleNewpChange.bind(this)}/>
                        <p>*Password length must be atleast 7. Password must contain atleast one number,alphabet and special character</p>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm New Password:</Form.Label>
                        <Form.Control value={this.state.cnewp} type="password" placeholder="Confirm New Password" onChange={this.handleCnewpChange.bind(this)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save changes
                    </Button>
                    </Form>
                </div>
                <Footer/>
            </div>
        )
    }
}
