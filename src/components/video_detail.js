import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

class VideoDetail extends Component {

    render() {
        let videos = this.props.videos.videos;
        
        if (!videos || videos.code) {
            return <div />;
        }

        let currentVideo;

        let video_id = this.props.match.params.id;

        videos.objects.map(video => {
            if (video.id === video_id) {
                currentVideo = video;
                return video;
            }
        })

        // const flavors = <div></div>;

        let src = "https://api.video.swisstxt.ch/p/233/sp/23300/embedIframeJs/uiconf_id/23487791/partner_id/233?iframeembed=true&playerId=kaltura_player_1521194019&entry_id=" + video_id + "&flashvars[streamerType]=auto";

        return (
            <div className="video-player">
                <iframe src={src} title={src} width="740" height="416" allowFullScreen webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" frameBorder="0"></iframe>
                <div>
                <table className="table-sm">
                        <tbody>
                            <tr>
                                <td>M3U8 URL:</td>
                                <td>https://api.video.swisstxt.ch/p/233/sp/23300/playManifest/entryId/{ currentVideo.id }/format/applehttp/protocol/https/a.m3u8</td>
                                <td></td>
                            </tr>
                            </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        videos: state.videos
    }
}


export default withRouter(connect (mapStateToProps)(VideoDetail));