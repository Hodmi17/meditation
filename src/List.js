import React, { Component } from 'react'
import axios from 'axios';
import './List.css';
import { MdDelete } from "react-icons/md";


export class List extends Component {
    constructor (props){
        super(props);
        this.state = {
            meditation:[]
        }
        this.retrieveMeditation = this.retrieveMeditation.bind(this);

    }
    componentDidMount(){
        this.retrieveMeditation();
    }
    retrieveMeditation(){
        axios.get('http://localhost:3002/retrieveMeditation')
              .then(res => {
                  console.log(res.data);
                  this.setState({meditation: res.data})
              })
    }
    delete(id){
        console.log(id);
        axios.post('http://localhost:3002/delete', {id})
             .then(res=> {
                 console.log(res);
                 this.retrieveMeditation();
             })   
    }
    render() {
        let meditation = this.state.meditation.map(el =>{
            return(
            <tr>
                <td> {el.meditation_name}</td>
                <td> {el.duration}</td>
                <td> {el.date}</td>
                
                <td>
                    <MdDelete onClick={() =>this.delete(el["_id"])}/>
                    </td>
            </tr>

        )
        })
        return (
            <div className="wrapper">
                <h1 className="header"> List </h1>   
                <table>
                    
                    <tr>
                       <th> Meditation Name :</th> 
                       <th> Duration: </th>
                       <th> Date: </th>
                       <th> Delete: </th>
                       </tr>
                    {meditation}
                    
                    
                    
                    
                    
                </table>
            </div>
        )
    }
}

export default List;
