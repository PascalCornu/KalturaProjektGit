import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router';

class SingleVideo extends Component {
   
    getSearchQuery() {
        return '/video-detail?q=';
    }

    

    render() {
        const { video } = this.props;

        if (!video) {
            return <div>Loading...</div>
        }
        
        let linkTo = "";
        
        if (window.location.href.includes("search")) {
            linkTo = "/search/" + window.location.href.split("search/")[1].split("/")[0];
        }

        if (window.location.href.includes("page")) {
            linkTo += "/page/" + window.location.href.split("page/")[1].split("/")[0];
        }
        
        linkTo += "/video-detail/" + video.id;
        
        return (
            <div className="video">
                <Link to={{
                    pathname: linkTo,
                    search: ""
                }}>
                {/* <a onClick={() => this.props.router.push(linkTo)} > */}
                    <table className="table-sm">
                        <tbody>
                            <tr>
                                <td><img src={ video.thumbnailUrl } alt="thumbnail"></img></td>
                                <td>&nbsp;</td>
                                <td><table>
                                    <tbody>
                                        <tr>
                                            <td>Name:</td>
                                            <td>{ video.name }</td>
                                        </tr>
                                        <tr>
                                            <td>Entry-ID:</td>
                                            <td>{ video.id }</td>
                                        </tr>
                                        </tbody>
                                    </table></td>
                                </tr>
                            </tbody>
                    </table>
                    {/* </a> */}
                </Link>
            </div>
        );
    };
}

export default withRouter(SingleVideo);