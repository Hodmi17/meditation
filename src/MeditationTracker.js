 import axios from 'axios';
import React, { Component } from 'react'
import './meditationTracker.css';


    export class MeditationTracker extends Component {
        constructor(props){
            super(props);
            
            this.handlemeditation_name = this.handlemeditation_name.bind(this)
            this.handleduration = this.handleduration.bind(this)
            this.handledate = this.handledate.bind(this)
            
            this.submitForm = this.submitForm.bind(this);
        
        this.state = {
            meditation_name:'',
            duration:'',
            date: ''
            
        
            
        }
         }
        handlemeditation_name(e){
            
            this.setState({
                meditation_name: e.target.value
            })
        }
        handleduration(e){
            console.log('done', e.target.value)
            this.setState({
                duration: e.target.value
            })
        }
        handledate(e){
            this.setState({
                date: e.target.value
            })
        }
       
        
        
        submitForm(e){
            e.preventDefault();
            console.log("SUBMITTED: ", e);

            let data ={
                meditation_name: this.state.meditation_name,
                duration: this.state.duration,
                date: this.state.date,
            };
            axios.post('http://localhost:3002/meditationTracker', data)
                .then(res => {
                    console.log(res.data);
                })

            this.setState({
                meditation_name:'',
                duration:'',
                date:'',
                
                
            })
            
        }
        render() {
            return(
                <div className= "container1">
                <form onSubmit={this.submitForm}>
                    <label> Meditation Name: </label>
                    <input type="text" value={this.state.meditation_name} onChange={this.handlemeditation_name}/>
                    <label> Duration: </label>
                    <input type="text" value={this.state.duration} onChange={this.handleduration}/>
                    <label> Date: </label>
                    <input type="date" value={this.state.date} onChange={this.handledate}/>
                    <input type="submit"/>
                </form>
             </div>
        )           
    }
            
}

export default MeditationTracker;
   