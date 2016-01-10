/**
 * Config for application
 *
 */

'use strict';

var config = {
    core: {
        debug: true,
        port: 4000,
        language: 'default'
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
