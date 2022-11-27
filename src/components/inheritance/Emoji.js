import React, { Component } from 'react';

class Emoji extends Component {



    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`


    render(editable) {
        let text = "i am Emoji Component speaking"

        if (editable) {
            text = editable
        }


        return <div>{text}</div>
    }
}

export default Emoji;