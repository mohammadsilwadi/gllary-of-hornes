import React, { Component } from 'react';
import Header from './components/ Header';
import Main from './components/ Main';
import Footer from './components/ Footer';
import data from "./data/data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import FormSelect from './components/FormSelect';
import SelectedBeast from './components/SelectedBeast ';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hornedList: data,
      show: false,
      horns: 0,
      animal: {}
    }
  }
handlerForm=(data)=>{
  this.setState({

  })
}
  handlerShow = (data) => {
    this.setState({
      show: true,
      animal: data

    })
  }
 ;
  handlerClose = () => {
    this.setState({
      show: false
      

    })
  }
  submitHandler=(e)=>{
    e.preventDefault();
   
  }
  render() {
    return (

      <div>
        <Header />
        <Main showDataList={this.handlerShow} data={this.state.hornedList} />
        <SelectedBeast animal={this.state.animal} showModal={this.state.show} closeData={this.handlerClose} />
        <FormSelect horn={this.state.handlerForm}/>
        <Footer />

      </div>
    )
  }
}

export default App;
