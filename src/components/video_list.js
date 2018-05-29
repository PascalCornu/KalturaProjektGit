import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import SingleVideo from './single_video';
import { fetchVideos } from '../actions';
import {withRouter} from 'react-router';

// import _ from 'lodash';
let i = 0;

class VideoList extends Component {

    constructor(props, context) {
        super(props, context);

        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }

    componentWillMount() {
        this.props.fetchVideos("" , this.props.match.params.page);
    }
    // shouldComponentUpdate(nextProps) {
    //     debugger;
    //     if (nextProps.match.params.page !== this.props.match.params.page) {
    //         return true;
    //     }
    //     return false;
    // }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.location !== this.props.location) {
        // if(!_.isEqual(nextProps.videos.videos, this.props.videos.videos)) {
        // if (nextProps.match.params.page != window.location.href.split("page/")[1].split("/")[0]) {
        
        if (nextProps.match.params.page !== this.props.match.params.page || i++ < 2) {
            if (window.location.href.includes("page/")) {
                this.props.fetchVideos(document.getElementById("search_bar").value, nextProps.match.params.page);
            } else {
                this.props.fetchVideos(document.getElementById("search_bar").value);
            }
        }
    }

    render() {
        let videos = this.props.videos.videos;
        if (!videos || videos.code) {
            return (
                <div>Loading...</div>
            )
        }

        console.log(videos);
        const videoItems = videos.objects.map(video => {
            return <SingleVideo key={video.id} video={ video } />
        });

        return (
            <div className="video-list">
                { videoItems }
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        videos: state.videos
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         actions: bindActionCreators({
//             fetchVideos
//         }, dispatch)
//       };
// }

export default withRouter(connect(mapStateToProps, {fetchVideos})(VideoList));