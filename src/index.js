'use strict';

import React from 'react';

/**
 * Clone the children with the props passed.
 *
 * @param {?*} children Children of a react element, typically specified as `props.children`.
 * @param {Object} props Props that will be passed to the children.
 * @return {Object} Clone of the children with the props.
 */
function ReactChildrenCloneWithProps( children, props ) {
    if ( children == null ) {
        return children;
    }

    return React.Children.map( children, function( child ) {
        return React.cloneElement( child, props );
    });
};

//#############################################################################
// Exports.
//#############################################################################
module.exports = ReactChildrenCloneWithProps;
