import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './GridContainer.css'
import TreeLeaf from '../components/TreeLeaf'

// class GridContainer extends Component {
function GridContainer(props) {

  const spouse = props.relatives.find(relative => relative.relationship === 'Spouse')
  const father = props.relatives.find(relative => relative.relationship === 'Father')
  const mother = props.relatives.find(relative => relative.relationship === 'Mother')



// render() {
return (

<Container>
<div className="grid-container">
<div className="user">{props.user.name}</div>
  {props.relatives.map(relative => <TreeLeaf  relative={relative}/>)}
  {/* <TreeLeaf className="father" relative={father}/> */}
  {/* <div className="father">{father.firstName}</div>
  <div className="mother">{mother.firstName}</div> */}
  <div className="grandFather-m">Test</div>
  <div className="grandMother-m">Test</div>
  {/* <div className="spouse">{spouse.firstName}</div> */}
  
  
  <div className="child2">Test</div>
  <div className="child1">Test</div>
  <div className="child3">Test</div>
  <div className="child4">Test</div>
  <div className="t">
    <div className="tb"></div>
    <div className="tb-lb"></div>
  </div>
  <div className="t2">
    <div className="tb2"></div>
    <div className="tb2-lb2"></div>
  </div>
  <div className="t3">
    <div className="tb3"></div>
    <div className="tb3-lb3"></div>
  </div>
  <div className="c">
    <div className="lb-bb"></div>
  </div>
  <div className="c2">
    <div className="bb5"></div>
    <div className="lb5"></div>
  </div>
  <div className="s">
    <div className="bb"></div>
  </div>
  <div className="s2">
    <div className="bb2"></div>
  </div>
  <div className="c3">
    <div className="rb"></div>
    <div className="bb3"></div>
  </div>
  <div className="c4">
    <div className="lb4"></div>
    <div className="bb4"></div>
  </div>
  <div className="t4">
    <div className="lb4-bb4"></div>
    <div className="bb6"></div>
  </div>
  <div className="t5">
    <div className="bb7"></div>
    <div className="lb7"></div>
  </div>
  <div className="c5">
    <div className="bb8"></div>
    <div className="lb8"></div>
  </div>
  <div className="t6">
    <div className="bb9"></div>
    <div className="rb9"></div>
  </div>
  <div className="c6">
    <div className="bb10"></div>
    <div className="rb10"></div>
  </div>
</div>
</Container>
)
}

// }


export default GridContainer