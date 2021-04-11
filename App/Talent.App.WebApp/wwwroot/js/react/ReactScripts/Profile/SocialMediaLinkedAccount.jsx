/* Social media JSX */
import React from 'react';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Popup, Button, Icon } from 'semantic-ui-react';

export default class SocialMediaLinkedAccount extends React.Component {
    constructor(props) {
        super(props);

        const accountUrl = props.details ?
            Object.assign({}, props.details)
            : {
                linkedInUrl: "",
                githubUrl: ""
            }


        this.state={

            showEditSelection: false,
            newLinkedAccount: accountUrl
        }

        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveLinkedAccount = this.saveLinkedAccount.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
    }

    handleChange(event) {
        const data = Object.assign({}, this.state.newLinkedAccount)
        data[event.target.name] = event.target.value
        this.setState({
            newLinkedAccount: data
        })
    }

    openEdit() {
        const accountUrl = Object.assign({}, this.props.details)
        this.setState({
            showEditSection: true,
            newLinkedAccount: accountUrl
        })
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

    componentDidMount() {
        $('.ui.button.social-media')
            .popup();
    }

    saveLinkedAccount(){
        
        console.log(this.state.newLinkedAccount)
        const data = Object.assign({}, this.state.newLinkedAccount)
        this.props.saveProfileData( data)
        this.closeEdit()
    }

    render(){
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }

    renderEdit(){
        return(
            <div className='ui sixteen wide column'>
                <ChildSingleInput
                    inputType="text"
                    label="LinkedIn"
                    name="linkedin"
                    value={this.state.newLinkedAccount.linkedInUrl}
                    controlFunc={this.handleChange}
                    maxLength={250}
                    placeholder="Enter your LinkedIn URL"
                    errorMessage="Please enter a valid url"
                />
                <ChildSingleInput
                    inputType="text"
                    label="GitHub"
                    name="github"
                    value={this.state.newLinkedAccount.githubInUrl}
                    controlFunc={this.handleChange}
                    maxLength={250}
                    placeholder="Enter your GitHub URL"
                    errorMessage="Please enter a valid url"
                />

                <button type="button" className="ui teal button" onClick={this.saveLinkedAccount}>Save</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
            </div>
        
        
        )
        
    }

    renderDisplay() {
        return(
            <div className = "row">
                <div className = "ui sixteen wide column">
                    <Button color='linkedin'>
                        <Icon name='linkedin' /> LinkedIn
                    </Button>
                    <Button color='black'>
                        <Icon name='github' /> Github
                    </Button>
                    <Button className="ui right floated teal button" floated="right" onClick={this.openEdit}>
                        Edit
                    </Button>
            
                </div>
            </div>
        )

    }

}