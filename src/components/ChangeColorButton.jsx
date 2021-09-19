import React from 'react';
import Reg from './reg';


class ChangeColorButton extends React.Component {

    render() {
        return (
            <button className="container" onClick={() => this.props.clickToChangeColor(this.props.color)}>
            {this.props.color}
            <Reg regNumber={this.props.regNumber}></Reg>
            </button>
        );
    }
}

export default ChangeColorButton;