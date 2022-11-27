
import React, { Component } from 'react';

class Emoji extends Component {

    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`
    render() {
        return this.props.children({ addEmoji: this.addEmoji })
    }
}

export default Emoji;

