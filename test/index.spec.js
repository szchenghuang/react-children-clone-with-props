var chai = require( 'chai' );
var should = chai.should();
var chaiThings = require( 'chai-things' );
var React = require( 'react' );
var ReactChildrenCloneWithProps = require( '../src/index' );

chai.use( chaiThings );

describe( 'react-children-clone-with-props', function() {
    describe( 'Single prop', function() {
        const testCompEmpty = <div></div>;

        const testCompSingle = (
            <div>
                <h1>Header1</h1>
            </div>
        );

        const testCompMultiple = (
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

        const childrenWithPropsEmpty = ReactChildrenCloneWithProps( testCompEmpty.props.children, props );
        const childrenWithPropsSingle = ReactChildrenCloneWithProps( testCompSingle.props.children, props );
        const childrenWithPropsMultiple = ReactChildrenCloneWithProps( testCompMultiple.props.children, props );

        it( 'should length', function() {
            should.equal( childrenWithPropsEmpty, testCompEmpty.props.children );
            React.Children.count( childrenWithPropsSingle ).should.equal(
              React.Children.count( testCompSingle.props.children ) );
            React.Children.count( childrenWithPropsMultiple ).should.equal(
              React.Children.count( testCompMultiple.props.children ) );
        });

        it( 'should have props', function() {
            childrenWithPropsSingle.should.have.deep.property( 'props.propA', props.propA );
            childrenWithPropsSingle.should.have.deep.property( 'props.propB', props.propB );
            childrenWithPropsSingle.should.have.deep.property( 'props.propC', props.propC );

            childrenWithPropsMultiple.should.all.have.deep.property( 'props.propA', props.propA );
            childrenWithPropsMultiple.should.all.have.deep.property( 'props.propB', props.propB );
            childrenWithPropsMultiple.should.all.have.deep.property( 'props.propC', props.propC );
        });

        it( 'should function property', function() {
            count = 0;
            childrenWithPropsSingle.props.propC();
            count.should.equal( 1 );

            count = 0;
            childrenWithPropsMultiple[0].props.propC();
            count.should.equal( 1 );
        });

    });
});
