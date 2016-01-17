/**
 * Config for application
 *
 */

'use strict';

var config = {
    dev: {
        debug: true,
        port: 4000
    },

    core: {
        language: 'default'
    },

    duration: {
        countdown: 10,
        exercise: 30,
        relax: 10
    },

    modules: {
        basic: true,
        library: true,
        personal: true
    },

    locale: {
        'default': {
            title: '7 Minutes More',
            loading: 'Loading...',
            menu: {
                'new': 'New Training',
                library: 'Library',
                programs: 'My Programs',
                settings: 'Settings'
            }
        }
    }
};

module.exports = config;
