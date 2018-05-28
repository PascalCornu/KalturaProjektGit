import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router';

class NavigationButton extends Component {

    render() {
        const { index } = this.props;

        let myClass = "btn btn-default btn-circle";
        if (this.props.active === "yes") {
            myClass += ' activeButton';
        }
        let linkTo = "";
        if (window.location.href.includes("search")) {
            linkTo = "/search/" + window.location.href.split("search/")[1].split("/")[0];
        }

        linkTo += "/page/" + index;


        // if (window.location.href.includes("video-detail")) {
        //     let video_id = window.location.href.split("video-detail/")[1].split("/")[0];
        //     linkTo += "/video-detail/" + video_id;
        // }

        return (
            <div className="shortDiv">
                <Link to={{
                    pathname: linkTo,
                    search: ""
                }}>
                    <button type="button" className={myClass}>{index}</button>
                </Link>
            </div>
        );
    };
}

export default withRouter(NavigationButton);