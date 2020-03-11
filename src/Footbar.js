import React, { Component } from 'react';

class Footbar extends Component{
    render(){
        return(
            <div>
                <br/>
                {this.props.footer}
            </div>
        )
    }
}

export default Footbar;