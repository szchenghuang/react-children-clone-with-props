[![Build Status](https://travis-ci.org/szchenghuang/react-children-clone-with-props.svg?branch=master)](https://travis-ci.org/szchenghuang/react-children-clone-with-props)
[![NPM Package](https://img.shields.io/npm/v/react-children-clone-with-props.svg)](https://www.npmjs.org/package/react-children-clone-with-props)
[![Dependency status](https://david-dm.org/szchenghuang/react-children-clone-with-props/status.svg)](https://david-dm.org/szchenghuang/react-children-clone-with-props/)
[![devDependency status](https://david-dm.org/szchenghuang/react-children-clone-with-props/dev-status.svg)](https://david-dm.org/szchenghuang/react-children-clone-with-props/?type=dev)

# react-children-clone-with-props #

Shorthand to clone React child components with new props added.

## Install ##

```sh
npm install react-children-clone-with-props
```

## Usage ##

```js
// CommonJS
var ReactChildrenCloneWithProps = require( 'react-children-clone-with-props' );
// AMD
import ReactChildrenCloneWithProps from 'react-children-clone-with-props';

render() {
    var childrenWithProps = ReactChildrenCloneWithProps({
        propA: valueA,
        propB: valueB
    });

    return <div>{ childrenWithProps }</div>;
}

```

## Test ##

```js
npm test

```

## License ##

MIT. See [LICENSE.md](http://github.com/szchenghuang/react-children-clone-with-props/blob/master/LICENSE.md) for details.
