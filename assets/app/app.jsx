/**
 * Application
 *
 */

import 'normalize.css/normalize.css';
import './app.scss';

import { browserHistory, Router, Route, Link } from 'react-router';

import 'components/header/Header';
import 'components/menu/Menu';


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
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="library" component={About}/>
                    <Route path="users" component={Users}>
                        <Route path="/user/:userId" component={User}/>
                    </Route>
                    <Route path="*" component={NoMatch}/>
                </Route>
            </Router>
        );
    }
});
