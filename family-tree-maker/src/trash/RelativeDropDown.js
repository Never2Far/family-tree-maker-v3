import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class RelativeDropDown extends Component {

render() {

return(


          this.props.relatives && this.props.relatives.map( relative => 
          <option>
          {`${relative.firstName} ${relative.lastName}`}
          </option>)

)







}



}

export default RelativeDropDown

// const RelativeDropDown = (props) => {

//     return (
//         props.relatives && props.relatives.map( relative => 
//         <option>{`${relative.firstName} ${relative.lastName}`}</option>)
//     )

// } 

// export default RelativeDropDown