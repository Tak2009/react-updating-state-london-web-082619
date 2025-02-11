// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
    state = {
        hasBeenClicked: false
    }

    handleClick = () => {
        !this.state.hasBeenClicked?
         this.setState({
            hasBeenClicked: true
        }, () => console.log(this.state.hasBeenClicked)): this.setState({
            hasBeenClicked: false
        }, () => console.log(this.state.hasBeenClicked)
        )
        // console.log(this.state.hasBeenClicked); 

    }

    render () {
        return (
            <div>
               <p>I have {this.state.hasBeenClicked? null:'not'} been clicked!</p>
        <button onClick={this.handleClick}>{!this.state.hasBeenClicked?"Click Me!":"Unclick Me!"}</button>
            </div>
        )
    }
}

export default ClickityClick