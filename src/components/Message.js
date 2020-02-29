import React, {Component} from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: "This is your message"
        }    
    }
    subscribe = () => {
        this.setState({
            message: "You are now subscribed"
        })
    }
    render () {
        return (
            <div> 
                <div>{this.state.message} </div>
                <button onClick={()=>this.subscribe()} >Subscribe</button>
            </div>
        ) 
    }
}

export default Message