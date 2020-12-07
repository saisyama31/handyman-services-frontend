import React, { Component } from 'react'
import Navbar from './navbar'
import {Card,Button,Form} from 'react-bootstrap'
import Footer from './footer'

const axios = require('axios');

export default class profile extends Component {
    constructor(props){
        super(props);
        this.state={
            name : "",
            email : "",
            disp : "",
            id : "",
            imgurl : "" 
        }
    }
    async componentDidMount(){
        const resp = await axios.get('https://handymanserver.herokuapp.com/users/me',{
            headers: {
                'Authorization': localStorage.getItem('token')
              }
        })

        if(resp.status==200){
            this.setState({name : resp.data.name});
            this.setState({email : resp.data.email});
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

        axios.get('https://handymanserver.herokuapp.com/tasks',{
            headers:{
                'Authorization' : localStorage.getItem('token')
            }
        })
        .then(
            resp=>{
               // console.log(resp);
                this.setState({tasks : resp.data});
                let i=0;
                let dis=`<div>`;
                for(;i<resp.data.length;i++){
                    let dt="";
                    if(i==resp.data.length-1){
                        this.setState({id : resp.data[i]._id})
                    }
                    dt+=resp.data[i].date.substr(8,2);
                    dt+='-';
                    dt+=resp.data[i].date.substr(5,2);
                    dt+='-';
                    dt+=resp.data[i].date.substr(0,4);
                    dis+=`
                                <div class="tm-col1">
                                ${i+1}) Service :${resp.data[i].servicetype}
                                </div>
                                <div class="tm-col2">
                                Date : ${dt}
                                </div>
                                <div class="tm-col3">
                                Time : ${resp.data[i].time}
                                </div>
                                <div class="tm-containerim">
                                
                                </div>
                                <div class="tm-containerim">
                                
                                </div>
                                <div class="tm-containerim">
                
                                </div>
                            
                    `
                }
                dis+='</div>';
               // console.log(dis)
                this.setState({disp : dis});
               // console.log(this.state.disp)
            }
        )
    }

    async handleDelAccount(event){
        event.preventDefault();
        const resp = await axios.delete('https://handymanserver.herokuapp.com/users/me',{
            headers: {
                'Authorization': localStorage.getItem('token')
              }
        })

        this.props.history.push("/");

    }

    handleFileUpload(event){
        event.preventDefault();
        console.log(event.target.files[0])
        let data = new FormData();
        data.append('avatar',event.target.files[0])    
        axios.post('https://handymanserver.herokuapp.com/users/me/avatar',
            data,
            {
                headers : {
                    'Authorization' : localStorage.getItem('token')
                }
            }
        )
        .then(
            resp=>{
                this.setState({imgurl : ""})
                this.componentDidMount()
            }
        )
        .catch(
            error=>{
                console.log(error)
            }
        )
    }

    handlePassChange(event){
        event.preventDefault();
        this.props.history.push("/passchange");
    }

    handleDelTask(event){
        event.preventDefault()
        if(this.state.id==""){
            alert("Your booking is empty");
            return
        }
        axios.delete(`https://handymanserver.herokuapp.com/tasks/${this.state.id}`,{
            headers:{
                'Authorization' : localStorage.getItem('token')
            }
        })
        .then(
            response=>{console.log(response)
                this.setState({id : ""})
                this.componentDidMount()
            }
           
        )
        .catch(
            error=>{console.log(error)}
        )
    }

 
    render() {
        return (
            <div className="tm-proh">
                <Navbar/>
                <center> <h1 className="tm-proh">MY PROFILE</h1> </center>
                <center><Card style={{ width: '18rem'}} className="mb-5 mt-5 tm-cardcon" >
                    <Card.Img variant="top" src={this.state.imgurl} height = "200px" width = "200px" />
                            <Card.Body>
                            <input type = "file" onChange = {this.handleFileUpload.bind(this)}/>
                            <Card.Title>Name : {this.state.name}</Card.Title>
                            <Card.Title>E-mail : {this.state.email}</Card.Title>
                            <Button variant="warning" onClick={this.handlePassChange.bind(this)}>Change Username/Password</Button>
                            <Button variant="warning" className="mt-2" onClick={this.handleDelAccount.bind(this)}>Delete Account</Button>
                    </Card.Body>
                </Card></center>
                <h2><strong>Your bookings : </strong> </h2>
                <div dangerouslySetInnerHTML={{__html: this.state.disp}} />
                <button type="button" className="btn btn-warning ml-3 mb-3" onClick={this.handleDelTask.bind(this)}>Delete latest task</button> 
                
                <Footer/>
           </div>
        )
    }
}
