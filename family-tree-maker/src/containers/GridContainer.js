import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './GridContainer.css'

class GridContainer extends Component {



render() {
return (

<Container>
<div className="grid-container">
  <div className="grandfather-f">Test</div>
  <div className="grandmother-f">Test</div>
  <div className="grandfather-m">Test</div>
  <div className="grandmother-m">Test</div>
  <div className="spouse">Test</div>
  <div className="user">Test</div>
  <div className="child2">Test</div>
  <div className="child1">Test</div>
  <div className="child3">Test</div>
  <div className="child4">Test</div>
  <div class="t">
    <div class="tb"></div>
    <div class="tb-lb"></div>
  </div>
  <div class="t2">
    <div class="tb2"></div>
    <div class="tb2-lb2"></div>
  </div>
  <div class="t3">
    <div class="tb3"></div>
    <div class="tb3-lb3"></div>
  </div>
  <div class="c">
    <div class="lb-bb"></div>
  </div>
  <div class="c2">
    <div class="bb5"></div>
    <div class="lb5"></div>
  </div>
  <div class="s">
    <div class="bb"></div>
  </div>
  <div class="s2">
    <div class="bb2"></div>
  </div>
  <div class="c3">
    <div class="rb"></div>
    <div class="bb3"></div>
  </div>
  <div class="c4">
    <div class="lb4"></div>
    <div class="bb4"></div>
  </div>
  <div class="t4">
    <div class="lb4-bb4"></div>
    <div class="bb6"></div>
  </div>
  <div class="t5">
    <div class="bb7"></div>
    <div class="lb7"></div>
  </div>
  <div class="c5">
    <div class="bb8"></div>
    <div class="lb8"></div>
  </div>
  <div class="t6">
    <div class="bb9"></div>
    <div class="rb9"></div>
  </div>
  <div class="c6">
    <div class="bb10"></div>
    <div class="rb10"></div>
  </div>
</div>
</Container>
)
}

}


export default GridContainer