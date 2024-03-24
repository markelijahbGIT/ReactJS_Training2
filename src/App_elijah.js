import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';

// Functional-based Component
function DisplayGreetings(props){
  const {name} = props
  // const greetings = (props)=>{
    
  //   return {name}
  // }

  return(<h1>Hello {name||'wala'}</h1>        
);
}

// function Exercise1() {
//   const [inputText, setInputText] = useState("");

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     // 👇 Store the input value to local state
//     setInputText(e.target.value);
//   };

//   return (
//     <div>
//       <input type="text" onChange={handleChange} value={inputText} />
//       <input type="text" onChange={handleChange} value={inputText} />
//       <input type="text" onChange={handleChange} value={inputText} />

//       {/* 👇 Use the input value from state */}
//       <p>FirstName: {inputText}</p>
//     </div>
//   );
// };


// function Exercise11(props){

//   const firstName = useState({props})

//   return(
//     <div>
//       <input type="text" value={FirstName}>FirstName

//     </div>


//   );
// }

//// Class-based Component
class DisplayGreetings_Class extends React.Component {
  render() {
  return ( <div>
    <h1>Hello {this.props.pangalan ||''}!</h1>
    </div>
    );
    }
   }



function App() {

  const elijah = "pangalan ko";
  return (
    <div >
         <div>Hello, YOU!</div>
         <DisplayGreetings name="Mark Elijah"/>
         <DisplayGreetings_Class pangalan="Pangalan"/>
         {/* <MyClockComponent/> */}

         <Exercise1 propOne="props"/>
        
    </div>
  );
}


{/* class MyClockComponent extends Component {
  constructor(props) {
  super(props);
  this.state = { time: new Date() };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
    this.setState({ time: new Date() });
    }, 1000);
    }
    componentWillUnmount() {
    clearInterval(this.timer);
    }
    render() {
    return <div>Current time: {this.state.time.toLocaleTimeString()}</div>;
    }
   } */}


   class Counter extends React.Component {
      constructor(props) { //initialize data/variables(object)
        super(props);
        this.state = {
        count: 0,
        name:'Initial'
        };
      }

      handleClick = () => {
        this.setState({
        count: this.state.count + 1,
        name : 'New'
        });

        //this.setState({name : 'New'}) can also be used to update data
      }


      render() {
        return (
        <div>
        <h1>Count: {this.state.count}</h1>
        <h1>name: {this.state.name}</h1>
        <button onClick={()=>this.handleClick()}>Increment</button>
        <button onClick={this.handleClick}>Increment2</button>
        <input value={this.handleClick}></input>
        </div>
        );
      }
   }


    class Exercise1 extends React.Component {
     constructor(props) { //initialize data/variables(object)
       super(props);
       this.state = {
       firstName: '',
       middleName:'',
      lastName:'',
       age:0,
     company_name:'',
       position:''
      };
   }

     handleSubmit = (e)=>{
      console.log(this.state)
      //this.setState({firstName:event.target.value})
     // this.setState({firstName:event.target.value})
    

    }




  
     render() {
      return (
     <div>
      <form onSubmit={this.handleSubmit()}>
       <h1>name: </h1>
      Firstname<input type='text' value={this.state.firstName} id="fName" onChange={(event)=>this.setState({firstName:event.target.value})} /><br></br>
      Middlename<input type='text' value={this.state.middleName} onChange={(event)=>this.setState({middleName:event.target.value})}/><br></br>
      Lastname<input type='text' value={this.state.lastName} onChange={(event)=>this.setState({lastName:event.target.value})}/><br></br>
      Age<input type='number' value={this.state.age} onChange={(event)=>this.setState({age:event.target.value})}/><br></br>
      Company Name<input type='text' value={this.state.company_name} onChange={(event)=>this.setState({company_name:event.target.value})}/><br></br>
      Position <input type='text' value={this.state.position} onChange={(event)=>this.setState({position:event.target.value})}/><br></br>
      <button type='submit' >Submit</button>
      </form>

       <h4>Fullname: </h4><h2>{this.state.firstName} {this.state.middleName} {this.state.lastName}</h2>
       <h4>Age: </h4><h2>{this.state.age}</h2>
       <h2>Company: I'm currently working at {this.state.company_name} with a {this.state.position} position.</h2>   
      
     </div>
     );
     }
  
   }

  

  
   

export default App;
