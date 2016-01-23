/**
 * Intro
 *
 */

import './intro.scss';

import {Link} from 'react-router';

import * as appConfig from '../../../../config/config-app';
const locale = appConfig.locale[appConfig.core.language];

module.exports = React.createClass({

    displayName: 'Intro',

    propTypes: {

    },

    getInitialState: function() {
        return {};
    },

    render: function() {
        return (
            <section>
                <h1>
                    <Link to="/">
                        {locale.title}
                    </Link>
                </h1>

                <ul>
                    <li>
                        <Link to="/programs">{locale.menu.programs}</Link>
                    </li>
                    <li>
                        <Link to="/library">{locale.menu.library}</Link>
                    </li>
                </ul>

                {this.props.children}
            </section>
        );
    }
});
