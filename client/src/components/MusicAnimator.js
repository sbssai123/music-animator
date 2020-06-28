import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentSongInfo } from './../actions/currentSongAction'

class MusicAnimator extends Component {

    componentDidMount() {
        this.props.getCurrentSongInfo(this.props.token)
    }
    
    render() {
        console.log(this.props.currentSong)
        return (
            <div>
                <canvas>

                </canvas>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.authReducer.token,
        currentSong: state.currentSongReducer.currentSong
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getCurrentSongInfo
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicAnimator);
