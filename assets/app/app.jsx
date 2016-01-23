/**
 * Application
 *
 */

import 'normalize.css/normalize.css';
import './app.scss';

import { Router, Route } from 'react-router';

// import Header from 'components/header/Header';
// import Menu from 'components/menu/Menu';

import Intro from 'components/intro/Intro';
import Programs from 'components/programs/Programs';
import Library from 'components/library/Library';


module.exports = React.createClass({

    displayName: 'Application',

    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {

    },

    componentWillUnmount: function() {

    },

    _onChange: function() {

    },

    render: function() {
        return (
            <Router>
                <Route
                    component={Intro}
                    path="/"
                    >
                    <Route
                        component={Programs}
                        path="programs"
                        />
                    <Route
                        component={Library}
                        path="library"
                        />
                </Route>
            </Router>
        );
    }
});
