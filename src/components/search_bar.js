import React, { Component } from 'react'
import { connect } from 'react-redux';

import {fetchVideos} from '../actions';
import { withRouter } from 'react-router';

class SearchBar extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.fetchVideos = this.fetchVideos.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        if(window.location.href.includes("search")) {
            let searchTerm = window.location.href.split("search/")[1].split("/")[0].split("/")[0];
            document.getElementById("search_bar").value = searchTerm;
            // this.fetchVideos(searchTerm);
        }
    }

    onInputChange(event) {
        const searchTerm = event.target.value;
        this.setState({ term: searchTerm });
        this.props.history.push("/search/" + searchTerm);
        this.fetchVideos(searchTerm);
    }

    fetchVideos(searchTerm) {
        this.props.fetchVideos(searchTerm);
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit}>
                <div className="input-group">
                <input id="search_bar" onChange={this.onInputChange} type="text" className="form-control fieldInput" placeholder="Search"></input>
                    <span className="input-group-btn">
                        <button className="btn btn-secondary search-button" type="button">Search</button>
                    </span>
                </div>
            </form>
        );
    };
}

export default withRouter(connect(null, {fetchVideos}) (SearchBar));