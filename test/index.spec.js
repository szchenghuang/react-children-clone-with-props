var chai = require( 'chai' );
var should = chai.should();
var chaiThings = require( 'chai-things' );
var React = require( 'react' );
var ReactChildrenCloneWithProps = require( '../src/index' );

chai.use( chaiThings );

describe( 'react-children-clone-with-props', function() {
    describe( 'Single prop', function() {
        const testComp = (
            <div>
                <h1>Header1</h1>
                <h2>Header2</h2>
            </div>
        );

        let count = 0;
        const props = {
            propA: 'valueA',
            propB: 'valueB',
            propC: function() { count++; }
        };

        const childrenWithProps = ReactChildrenCloneWithProps( testComp.props.children, props );

        it( 'should length', function() {
            childrenWithProps.should.have.length( testComp.props.children.length );
        });

        it( 'should all', function() {
            childrenWithProps.should.all.have.deep.property( 'props.propA', props.propA );
            childrenWithProps.should.all.have.deep.property( 'props.propB', props.propB );
            childrenWithProps.should.all.have.deep.property( 'props.propC', props.propC );
        });

        it( 'should function property', function() {
            childrenWithProps[0].props.propC();
            count.should.equal( 1 );
        });

    });
});
