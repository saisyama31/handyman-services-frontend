import React,{Component} from 'react';
import {Carousel} from 'react-bootstrap';
import './main.css';
import Navbar from './navbar';
import Footer from './footer';
const axios=require('axios');





class Home extends Component{
    constructor(props){
        super(props);
    }

    Carcare(){
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
    }
    
    render() {
        return (
        <div className="bgi tm-proh">
            <Navbar/>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/s1.jpg"
                alt="First slide"
                width="1200px"
                height = "450"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/s2.jpg"
                alt="Second Slide"
                width="1200px"
                height = "450"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/s3.jpg"
                alt="Third slide"
                width="1200px"
                height = "450"
                />
            </Carousel.Item>
            </Carousel>
            <section >
            <p className="tm-con2">
                <h1>OUR SERVICES</h1>
            </p>
            <p className="tm-containerim">
                <img src="images/carcare.png" alt="img" onClick = {this.Carcare.bind(this)} className="tm-containerimg"/>
            </p>
            <p className="tm-containerim">
                <img src="images/carpenter.png" alt="img" onClick = {this.Carpenter.bind(this)} className="tm-containerimg"/>
            </p>
            <p className="tm-containerim">
                <img src="images/cleaning.png" alt="img" onClick = {this.Cleaning.bind(this)} className="tm-containerimg"/>
            </p>
            <p className="tm-containerim">
                Car & Bike services
            </p>
            <p className="tm-containerim">
                Carpenter
            </p>
            <p className="tm-containerim">
                Cleaning
            </p>
            <p className="tm-containerim">
                <img src="images/electrician.png" alt="img" onClick = {this.Electrician.bind(this)} className="tm-containerimg"/>
            </p>
            <p className="tm-containerim">
                <img src="images/painting.png" alt="img" onClick = {this.Painting.bind(this)} className="tm-containerimg"/>
            </p>
            <p className="tm-containerim">
                <img src="images/plumber.png" alt="img" onClick = {this.Plumber.bind(this)} className="tm-containerimg"/>
            </p>
            <p className="tm-containerim">
                Electrician
            </p>
            <p className="tm-containerim">
                Painting
            </p>
            <p className="tm-containerim">
                Plumber
            </p>
        </section>

        <p className="tm-con2"></p>
        <div className="thm p-5">
        <div class="row">
        <div class="column">
            <div class="card">
            <p><i class="fa fa-user"></i></p>
            <h3>11+</h3>
            <p>Partners</p>
            </div>
        </div>

        <div class="column">
            <div class="card">
            <p><i class="fa fa-check"></i></p>
            <h3>55+</h3>
            <p>Projects</p>
            </div>
        </div>
        
        <div class="column">
            <div class="card">
            <p><i class="fa fa-smile-o"></i></p>
            <h3>100+</h3>
            <p>Happy Clients</p>
            </div>
        </div>
        <div class="column">
            <div class="card">
            <p><i class="fa fa-coffee"></i></p>
            <h3>100+</h3>
            <p>Meetings</p>
            </div>
        </div>
        </div>
        </div>

        <section>

                <p className = "tm-con2">
                    <h1>ABOUT US</h1>
                </p>
                <p className="tm-conab">
                    Handyman Services is a service provider that helps you Live Smarter; Live Better. With our website get your routine or periodic chores (tasks) done by outsourcing them to our in-house, trained, professional and trusted team of Taskman’s.
                    We provide wide range of doorstep services as per your convenience to your complete satisfaction. Our services include electrician, plumber, carpenter, High Definition Cleaning, Painting,car and bike services etc.
                    We believe in a very simple philosophy - Provide Quality and Trustworthy Service which will help build your trust in Handyman Services and ultimately resulting in a long lasting relationship.
                    Your Trust will inturn motivate us to serve you better every time!
                    Handyman Services is different as we aim to provide our customer’s best –in-class service experience and to organise the unorganised sectors and provide employment opportunities and job security to talented people who share a common vision.
                </p>
        </section>
        
       

        <div class="containergal">

                {/* <h1 class="heading">GALLERY<span></span></h1> */}
                <p className = "tm-con2">
                    <h1>GALLERY</h1>
                </p>

                <div class="gallery">

                    <div class="gallery-item">
                        <img class="gallery-image" src="/images/gal1.png" alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"/>
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src="/images/gal2.jpg" alt="sunset behind San Francisco city skyline"/>
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src="/images/gal3.jpeg" alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"/>
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src="/images/gal4.jpg" alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"/>
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src="/images/gal5.jpg" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"/>
                    </div>

                    <div class="gallery-item">
                        <img class="gallery-image" src="/images/gal6.jpg" alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp"/>
                    </div>

                </div>

                </div>


        {/* <div className="tm-fothd">Contact us</div>
        <footer>
            <div className="tm-footer">
                <ul>
                    <li>Phone : XXXXXXXXXX</li>
                    <li>Email : XXXXX@gmail.com</li>
                    <li>Facebook : XXXXXXXXXXXXXX</li>
                    <li>Instagram : XXXXXXXXXXXXX</li>
                </ul>
            </div>
        </footer>
        <div className="tm-copy">
            &copy; Copyright 2020
        </div> */}
        
        

        <p className = "tm-con2">
                    <h1>OUR TEAM</h1>
        </p>
        <div class="row12">
        <div class="column11">
            <div class="card12">
            <img src="/images/Dhivagar.jpg" alt="Dhivagar" width="200px" height="200px" />
            <div class="container12">
                <h6 ><strong >Dhivagar M</strong></h6>
                <p class="title12">Developer</p>
                <p>Ph : 2342445452</p>
                <p>dhivagar@example.com</p>
                <p><button class="button12">Contact</button></p>
            </div>
            </div>
        </div>
        <center><div class="column12">
            <div class="card12">
            <img src="/images/Piyush.jpeg" alt="Piyush" width="200px" height="200px"/>
            <div class="container12">
                <h6><strong>Piyush Dikshit</strong></h6>
                <p class="title12">Developer</p>
                <p>ph : 2345753421</p>
                <p>piyush@example.com</p>
                <p><button class="button12">Contact</button></p>
            </div>
            </div>
        </div>
        </center>
        <div class="column12">
            <div class="card12">
            <img src="/images/Sai.jpeg" alt="Saisyama" width="200px" height="200px"/>
            <div class="container12">
                <h6><strong>Saisyama Paruchuru</strong></h6>
                
                <p class="title12">Developer</p>
                <p>ph : 1236895432</p>
                <p>sai@example.com</p>
                <p><button class="button12">Contact</button></p>
            </div>
            </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
  }
}

export default Home;