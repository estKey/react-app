import React, { Component } from 'react'

import './Buttons.css'

class TagButton extends Component {
    constructor(props) {
        super(props);
        this.state = { isTagged: false }
    }

    handleClickOnLikeButton () {
        this.setState({
            isTagged: !this.state.isTagged
        });
        if (this.props.onClick) {
            this.props.onClick()
        }
    }

    render () {
        const contexts = this.props.contexts || {
            taggedText: '取消',
            untaggedText: '收藏'
        };
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isTagged ? contexts.taggedText : contexts.untaggedText} 👍
            </button>
        )
    }
}

export default TagButton