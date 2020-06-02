import React,{Component} from 'react';
import '../style/contact.css';
import { Link } from "react-router-dom";
import axios from 'axios';

class Contact extends Component{
  handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
        method: "POST", 
        url:"http://localhost:5050/send", 
        data: {
            name: name,   
            email: email,  
            messsage: message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
}

resetForm(){
    document.getElementById('contact-form').reset();
}
  render() {

    return( 
        <div className="container">
    <div className="wrapper animated bounceInLeft contact-body">
      <div className="company-info">
        <h3>Contect us</h3>
        <ul className="contact-ul">
          <li><i className="fa fa-road"></i> address</li>
          <li><i className="fa fa-phone"></i> phone</li>
          <li><i className="fa fa-envelope"></i> test@live.test</li>
        </ul>
      </div>
      <div className="contact">
        <h3>Email Us</h3>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <p>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"></input>
          </p>   
          <p>
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input type="email" name="email" id="email"></input>
          </p>
          <p className="full">
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="5" id="message"></textarea>
          </p>
          <p className="full">
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
      <div>

      </div>
    </div>
          <Link className="nav-link" to={"/map"}> <h2>Our Location</h2></Link>
  </div>
    );
}
}


export default Contact;