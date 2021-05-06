/* Social media JSX */
import React from 'react';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Popup, Button, Icon } from 'semantic-ui-react';

export default class SocialMediaLinkedAccount extends React.Component {
    constructor(props) {
        super(props)

        const details = props.details ?
            Object.assign({}, props.details)
            : {
                linkedInUrl: "",
                githubUrl: ""
            }

        this.state=  {

            showEditSelection: false,
            newLinkedAccount: details
        }

        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveLinkedAccount = this.saveLinkedAccount.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)


        this.showLink1 = this.showLink1.bind(this)
        this.showLink2 = this.showLink2.bind(this)
    }

    showLink1(){
        let linkedInLink = this.props.details ? this.props.details.linkedInUrl: ""
        console.log("link1: " +linkedInLink)
    }

    showLink2(){
        let githubLink = this.props.details ? this.props.details.githubUrl: ""
        console.log("link2: " + githubLink)
    }

    handleChange(event) {
        const data = Object.assign({}, this.state.newLinkedAccount)
        data[event.target.name] = event.target.value
        
        this.setState({
            newLinkedAccount: data
        })
    }

    openEdit() {
        const details = Object.assign({}, this.props.details)
        this.setState({
            showEditSection: true,
            newLinkedAccount: details
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
        this.props.saveProfileData(data)
        console.log(this.props.details)
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
                    name="linkedInUrl"
                    value={this.state.newLinkedAccount.linkedInUrl}
                    controlFunc={this.handleChange}
                    maxLength={250}
                    placeholder="Enter your LinkedIn URL"
                    errorMessage="Please enter a valid url"
                />
                <ChildSingleInput
                    inputType="text"
                    label="GitHub"
                    name="githubUrl"
                    value={this.state.newLinkedAccount.githubUrl}
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
                    
                    <button type="button" className="ui blue button" onClick={this.showLink1}>
                        <Icon name='linkedin' /> LinkedIn
                    </button>

                    <button type="button" className="ui black button" onClick={this.showLink2}>
                        <Icon name='github' /> Github
                    </button>
                    <Button className="ui right floated teal button" floated="right" onClick={this.openEdit}>
                        Edit
                    </Button>
            
                </div>
            </div>
        )

    }

}