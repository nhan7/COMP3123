import React, { Component } from 'react'
import './UserStyle.css';
export default class UserForm extends Component {
    constructor(props){
        super(props)
        this.province = [
        'Alberta',
        'British Columbia', 
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Nova Scotia',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan']
        this.state = {
            email: '',
            name: '',
            address: '',
            address2: '',
            city:'',
            province:'',
            postalCode:''
        }
    }
    onValueChanged = (event) =>{
        event.preventDefault()
        this.setState({
            [event.target.name]:event.target.value
        })

    }
    onSubmitForm = (event)=>{
        event.preventDefault()
        console.log(this.state)
    }
  render() {
    return (
        <div className='UserForm'>
            <h1>Data Entry Form</h1>
            <form onSubmit={(e) => this.onSubmitForm(e)}>
                <label className='details'>
                Email
                <input 
                    name='email' 
                    type="text" 
                    onChange={(e) =>this.onValueChanged(e)} 
                    placeholder="Enter Email"/>
                </label>

                <label  className='details'>
                Name
                <input 
                    name='name' 
                    type="text" 
                    onChange={(e) =>this.onValueChanged(e)} 
                    placeholder="Full Name"/>
                
                </label>
                <br/>
                <label  className='details'>
                Address
                <input 
                    name='address' 
                    type="text" 
                    onChange={(e) =>this.onValueChanged(e)} 
                    placeholder="1234 Main St"/>
                
                </label>
                <br/>
                <label className='details'>
                Address 2
                <input 
                    name='address2' 
                    type="text" 
                    onChange={(e) =>this.onValueChanged(e)} 
                    placeholder="Apartment, studio, or floor"/>
                
                </label>
                <br/>

                <label className='details'>
                City
                <input 
                    name='city' 
                    type="text" 
                    onChange={(e) =>this.onValueChanged(e)} 
                   />
                
                </label>
           
                  
                <label>     
                <select className='details' name='province' onChange={(e) => this.onValueChanged(e)}>

                    {

                        this.province.map((province) => (
                            <option key={province} value={province}>{province}</option>
                        ))
                    }
                </select>
                </label>
                <label className='details'>
                Postal Code
                <input 
                    name='postalCode' 
                    type="text" 
                    onChange={(e) =>this.onValueChanged(e)} 
                    />
                
                </label>
               

                <input className='submit'
                    name='btnSubmit'
                    type="submit"
                    value="Submit"/> 



            </form>
        </div>
    )
  }
}
