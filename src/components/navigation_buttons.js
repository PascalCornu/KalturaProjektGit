import _ from 'lodash';
import NavigationButton from './navigation_button';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { fetchVideos } from '../actions';

class NavigationButtons extends Component {
    
    componentWillMount() {
        this.props.fetchVideos('');
    }
    
    render() {
        let videos = this.props.videos.videos;
        if (!videos || videos.code) {
            return <span></span>;
        }
        let countPageTotal = Math.ceil(videos.totalCount / 25);
        let i = 1;
        
        let pageNumber = 1;

        if (window.location.href.includes("page")) {
            pageNumber = window.location.href.split("page/")[1].split("/")[0];
        }
        const buttons = _.map(Array(countPageTotal), () => {
            return <NavigationButton key={i} index={i} active={i++ == pageNumber ? 'yes' : 'no'} />
        });


        return (
            <div>
                { buttons }
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        videos: state.videos
    }
}


export default connect (mapStateToProps, {fetchVideos})(NavigationButtons);