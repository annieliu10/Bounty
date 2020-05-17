
import React from "react"
import './App.css';
import {Button, ButtonToolbar} from "react-bootstrap"
import {AddModal} from "./AddModal";



class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state={deps:[], addModalShow: false}
    }




render(){
     var id = localStorage.getItem(this.identity);
     let addModalClose=() => this.setState({addModalShow: false})


return    <div>
    <header class="banner">Bounty</header>
    <div className="crowd"></div>
    <div className="volunteer"></div>

    <ButtonToolbar>
        <Button
        className="button1"
        variant="primary"
        onClick={()=> this.setState({addModalShow: true})}>
        Existing User
        </Button>


        <AddModal
        show={this.state.addModalShow}
        onHide={addModalClose}
        identity={id}
    />
        </ButtonToolbar>

     </div>

}
}

export default Registration