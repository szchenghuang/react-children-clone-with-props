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
