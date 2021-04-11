import React from 'react'
import Cookies from 'js-cookie'
import { default as Countries } from '../../../../util/jsonFiles/countries.json';
import { ChildSingleInput } from '../Form/SingleInput.jsx';

export class Address extends React.Component {
    constructor(props) {
        super(props)
        
        const details = props.addressData ?
            Object.assign({}, props.addressData)
            : {
                number: "",
                street: "",
                suburb: "",
                country: "",
                city: ""
            }

        this.state={

            showEditSelection: false,
            newAddress: details
        }

        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveAddress = this.saveAddress.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)



    }

    openEdit() {
        const details = Object.assign({}, this.props.addressData)
        this.setState({
            showEditSection: true,
            newAddress: details
        })
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

    handleChange(event) {
        const data = Object.assign({}, this.state.newAddress)
        data[event.target.name] = event.target.value
        this.setState({
            newAddress: data
        })
    }

    saveAddress() {
        
        console.log(this.state.newAddress)
        const data = Object.assign({}, this.state.newAddress)
        this.props.controlFunc(this.props.componentId, data)
        this.closeEdit()
    }

   
    render() {
        return(
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
       
    }

    renderEdit(){
        return(
            <div className = "row">
                <div className = 'ui four wide column'>
                    <ChildSingleInput
                        inputType="text"
                        label="Number"
                        name="number"
                        value={this.state.newAddress.number}
                        controlFunc={this.handleChange}
                        maxLength={10}
                        placeholder="Enter your address number"
                        errorMessage="Please enter a valid address number"
                    />  
                </div>
                <div className = 'ui eight wide column'>
                    <ChildSingleInput
                        floated="center"
                        inputType="text"
                        label="Street"
                        name="street"
                        value={this.state.newAddress.street}
                        controlFunc={this.handleChange}
                        maxLength={120}
                        placeholder="Enter your street name"
                        errorMessage="Please enter a valid street name"
                    />
                </div>
                <div className = 'ui four wide column'>  
                    <ChildSingleInput
                        inputType="text"
                        label="Suburb"
                        name="suburb"
                        value={this.state.newAddress.suburb}
                        controlFunc={this.handleChange}
                        maxLength={120}
                        placeholder="Enter your suburb name"
                        errorMessage="Please enter a valid suburb name"
                    />
                </div>   

                <button type="button" className="ui teal button" onClick={this.saveAddress}>Save</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>


            </div>
        )

    }

    renderDisplay(){
        return(
            <div className='row'>
                <div className="ui sixteen wide column">
                <React.Fragment>
                <p>Address: </p>
                <p>City: </p>
                <p>Country: </p>
                </React.Fragment>
                <button type="button" className="ui right floated teal button" onClick={this.openEdit}>Edit</button>
                </div>
            </div>

        )

    }


}

export class Nationality extends React.Component {
    constructor(props) {
        super(props)
       
    }

    
    render() {
        return(
            <b>nationality</b>
        )
        
    }
}