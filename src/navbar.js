import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'

const axios=require('axios').default

class navbar extends Component {

    constructor(props){
        super(props);
        this.state={
            uname : null
        }
    }

    async componentDidMount(){
        const resp = await axios.get('https://handymanserver.herokuapp.com/users/me',{
            headers: {
                'Authorization': localStorage.getItem('token')
              }
        })

        if(resp.status==200){
            this.setState({uname : `Hi, ${resp.data.name}`});
        }
    }
    /*Carcare(){
        localStorage.setItem('service','Carcare');
        this.props.history.push("/book");
    }
    Carpenter(){
        localStorage.setItem('service','Carpenter');
        this.props.history.push("/book");
    }
    Cleaning(){
        localStorage.setItem('service','Cleaning');
        this.props.history.push("/book");
    }
    Electrician(){
        localStorage.setItem('service','Electrician');
        this.props.history.push("/book");
    }
    Painting(){
        localStorage.setItem('service','Painting');
        this.props.history.push("/book");
    }
    Plumber(){
        localStorage.setItem('service','Plumber');
        this.props.history.push("/book");
        <img src = "/images/logo.png" width="100px" height="50px" alt="logo"/>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">hii</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/Login">Login</Nav.Link>
                    <Nav.link href="/Signup">Signup</Nav.link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                let resp=await axios.post("http://localhost:9000/users/logout",{
        headers:{
            'Authorization': localStorage.getItem('token')
        }
        })
        alert("hi");
    }*/

    async handleLogout(event){
        const {history}=this.props;
        event.preventDefault();
        this.setState({uname : null})
        localStorage.setItem('token','')
        history.push("/");
    }

    render() {
        if(this.state.uname){
            return(
                <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='p-0 m-0'>
                <Navbar.Brand href="/" className="p-0 m-0"><img src = "/images/logo.png" className="p-0 m-0" width="125px" height="55px" alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="p-0 m-0" />
                <Navbar.Collapse id="responsive-navbar-nav" className="p-0 m-0">
                    <Nav className="mr-auto p-0 m-0">
                    <Nav.Link href="/" className="ml-3">Home</Nav.Link>
                    </Nav>
                    <Nav className="mr-5">
                    <NavDropdown title={this.state.uname} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="ml-3" onClick = {this.handleLogout.bind(this)}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                </div>
            )
        }
        else{
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='p-0 m-0'>
                <Navbar.Brand href="/" className="p-0 m-0"><img src = "/images/logo.png" className="p-0 m-0" width="125px" height="55px" alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="p-0 m-0" />
                <Navbar.Collapse id="responsive-navbar-nav" className="p-0 m-0">
                    <Nav className="mr-auto p-0 m-0">
                    <Nav.Link href="/" className="ml-3">Home</Nav.Link>
                    </Nav>
                    <Nav className="mr-5">
                    <Nav.Link href="/Login" className="ml-3">Login</Nav.Link>
                    <Nav.Link href="/Signup" className="ml-3">Signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>    
        )
    }
 }
}

export default withRouter(navbar);