import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import VideoList from './video_list';
import VideoDetail from './video_detail';

class VideoManager extends Component {

    render() {
        return (
            <div>
            <VideoList /> 
            {/* page={this.props.match.params.page} /> */}
            {this.props.match.params.id?<VideoDetail />:null}
            </div>

            // <Router>
            //     <div>
            //         <Route exact path="/page/:page" component={VideoList} />
            //         <Route exact path="/search/:search/page/:page/video-detail/:id" component={VideoList} />
            //         <Route exact path="/search/:search/page/:page" component={VideoList} />
            //         <Route exact path="/search/:search/video-detail/:id" component={VideoList} />
            //         <Route exact path="/search/:search" component={VideoList} />
            //         <Route exact path="/page/:page/video-detail/:id" component={VideoList} />
            //         <Route exact path="/video-detail/:id" component={VideoList} />
            //         <Route exact path="/" component={VideoList} />

            //         {/* { window.location.href.includes("/video-detail/") ? <VideoDetail /> : '' } */}

            //         <Route exact path="/search/:search/page/:page/video-detail/:id" component={VideoDetail} />
            //         <Route exact path="/search/:search/video-detail/:id" component={VideoDetail} />
            //         <Route exact path="/page/:page/video-detail/:id" component={VideoDetail} />
            //         <Route exact path="/video-detail/:id" component={VideoDetail} />
            //     </div>
            // </Router>
        );
    }
}


export default VideoManager;