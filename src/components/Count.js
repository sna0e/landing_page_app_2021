import React from "react";

class Count extends React.Component {
    state = {
        num : 0
    };

    count = () => {
        this.setState(current => ({num : current.num + 1}));
    }

    render() {
        return (
            <div>
                <button onClick={this.count}>응원합니다 💙</button>
                <p> { this.state.num } 명이 응원하고 있습니다!</p>
            </div>
        )
    }
}

export default Count;