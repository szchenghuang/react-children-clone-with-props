[![Build Status](https://travis-ci.org/szchenghuang/react-children-clone-with-props.svg?branch=master)](https://travis-ci.org/szchenghuang/react-children-clone-with-props)
[![NPM Package](https://img.shields.io/npm/v/react-children-clone-with-props.svg)](https://www.npmjs.org/package/react-children-clone-with-props)
[![Dependency status](https://david-dm.org/szchenghuang/react-children-clone-with-props/status.svg)](https://david-dm.org/szchenghuang/react-children-clone-with-props/)
[![devDependency status](https://david-dm.org/szchenghuang/react-children-clone-with-props/dev-status.svg)](https://david-dm.org/szchenghuang/react-children-clone-with-props/?type=dev)

# react-children-clone-with-props #

Shorthand to clone React child components with new props added, with the type
of the children intact.

## Preliminaries ##

If you simply `React.Chlidren.map` the children and clone the childs regardlessly
as below, the type of the children may change.

```js
var newChildren = React.Children.map(
    this.props.children,
    child => React.cloneElement( child, {
        propA: valueA,
        propB: valueB
    })
);
```

Namely, when `this.props.children` is a single React element, you will have
`newChildren` as an array since `React.Children.map` turns a single React
element into an array. Sometimes you may need the type remain intact, and you
want to save the job checking against the types and returning respectively.

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
    var newChildren = ReactChildrenCloneWithProps( children, {
        propA: valueA,
        propB: valueB
    });

    return <div>{ newChildren }</div>;
}

```

If `props.children` is a single React element, this utility function returns a
single React element. If `props.children` is an array of React elements, it
returns an array. If there is no children, i.e. with `props.children` being `null`,
it returns `null`. The type remains intact.

## Test ##

```js
npm test

```

## License ##

MIT. See [LICENSE.md](http://github.com/szchenghuang/react-children-clone-with-props/blob/master/LICENSE.md) for details.
