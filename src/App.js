import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      password: "",
      loggedInUser:{}
    }
  }


  async login(){
    let {email, password}= this.state;
    let res= await axios.post ('/auth/login', {email:email, password: password})
    this.setState({loggedInUser: res.data})

  }

  async signup(){
    let{email, password}= this.state;
    // axios.post('/auth/signup', {email: email, password:password})
    // .then(res=> {
    //   console.log('there')
    // })
    // console.log('here')

    //===BELOW IS ASYNC METHOD TO WRITE THE SAME CODE AS ABOVE====
    let res= await axios.post('/auth/signup', {email: email, password:password})
    this.setState({loggedInUser: res.data})
  }


  async logout(){
    await axios.get('/auth/logout')
    this.setState({loggedInUser:{}});
  }


  render() {
    return (
      <div className="App">
      <h2>Auth/w Bycrypt</h2>
      <p>Email: <input onChange={(e)=>this.setState({email: e.target.value})}
       type="text"/></p>

      <p>Password: <input onChange={(e)=>this.setState({password: e.target.value})}
       type="text"/></p>

      <button className="login" onClick={()=>this.login()}>Login</button>
      <button className='signup' onClick={()=>this.signup()}>Sign up</button>
      <button className='logout' onClick={()=>this.logout()}>Logout</button>

      <hr/>
      {JSON.stringify(this.state.loggedInUser)}
      </div>
    );
  }
}

export default App;
