import React from 'react';
import axios from 'axios';
import "../App.css"

class ContactUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  render() {
    return(
      <div>
      {/* //   <div className="jumbotron text-center jumbfoot" style={{marginBottom:"30px"}}>
      //   <div className="row">

      //   <div className="col-md-5">
      //     <figure><img alt className="img-responsive" src="https://basicneeds.ucsd.edu/_images/tfp/triton-food-pantry.jpg" style={{maxHeight:"350px", maxWidth:"350px"}}></img></figure>
      //   </div>
      //   <div className="col-md-6">
      //     <h2>Find Us</h2>
      //     <h4  style={{fontFamily: "Georgia"}}>
      //     Follow us on Instagram (@tritonfoodpantry) to see locations of our pop-up pantry and other related events/ information. We have two locations, one at Student Center A (across from Uncle's Italian restaurant) and one at One Miramar Street, or "OMS" in Graduate/Family Housing (3605 Miramar St.)
      //     </h4>
      //   </div>
      //   </div>
      // </div> */}
      <div className="ContactUs spacing " style={{background:"#f2f2f2", marginTop:"30px"}} >
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
              <label htmlFor="name">
              
                <b>Name:</b>
                </label>
              <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} required/>
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">
                <b>Email Address:</b></label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} required/>
          </div>
          <div className="form-group">
              <label htmlFor="message"> 
                <b>Message:</b></label>
              <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} required/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      </div>
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default ContactUs;