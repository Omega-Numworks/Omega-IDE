import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GithubConnector from "../GithubConnector";

export default class IDEMain extends Component {
    constructor(props) {
        super(props);
        document.title = "Omega - IDE";
        
        this.state = {
            connector: GithubConnector.getInstance()
        };
        
        this.onAuthStateChanged = this.onAuthStateChanged.bind(this);
        this.login = this.login.bind(this);
        
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }
    
    componentDidMount() {
        this.state.connector.onAuthStateChanged(this.onAuthStateChanged);
    }
    
    componentWillUnmount() {
        this.state.connector.removeAuthStateChanged(this.onAuthStateChanged);
    }
    
    login() {
        this.state.connector.login();
    }

    onAuthStateChanged() {
        this.forceUpdate();
    }

    render() {
        
        var accessButton = null;
        
        if (this.state.connector.isLogged()) {
            accessButton = (
                <Link to="/editor" className="button button-outline button-big project-description__button">
                    <div className="project-description__button__text">
                        LAUNCH <i className="project-description__button__icon material-icons md-16">play_arrow</i>
                    </div>
                </Link>
            );
        } else {
            accessButton = (
                <div onClick={this.login} className="button button-outline button-big project-description__button">
                    <div className="project-description__button__text">
                        LOGIN WITH GITHUB <i className="project-description__button__icon material-icons md-16">play_arrow</i>
                    </div>
                </div>
            );
        }
        
        return (
            <div className="content">
                <div className="project-description">
                    <h1 className="project-description__title">
                        Python IDE
                    </h1>
                    <h2 className="project-description__subtitle">
                        An online Python IDE.
                    </h2>
                    {accessButton}
                    <p className="project-description__description">
                        DESCRIPTION HERE
                    </p>
                    
                    {/* <h2 className="mb-3">A whole new set of features</h2> */}
                </div>
            </div>
        )
    }
}
