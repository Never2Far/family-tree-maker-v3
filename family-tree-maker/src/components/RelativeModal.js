import  React, {Component, useState } from 'react';
// import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import RelativeShow from './RelativeShow';
import Modal from 'react-bootstrap/Modal'



const RelativeModal = () => {
  const [modalShow, setModalShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const modalStyle = {
  //     position: "fixed",
  //     left: 0,
  //     top: 0,
  //     bottom: 0,
  //     right: 0,
  //     backgroundColor: "rgba(0,0,0,.2)",
  //     color: "##FFF",
  //     fontSize: "40px",
  //   };

    let relatives = useSelector(state => state.relatives.relatives)

    let history = useHistory();
    let { relativeId } = useParams();
    let relative = relatives.find(relative => relative.relativeId === relativeId)
    if (!relative) return null;

    let back = e => {
      e.stopPropagation();
      history.goBack();
    }

return (
  <Modal
  show={modalShow} onHide={() => setModalShow(false)}
  >
  
  {/*     onClick={back}
  //     style={{
  //       position: "absolute",
  //       top: 0,
  //       left: 0,
  //       bottom: 0,
  //       right: 0,
  //       background: "rgba(0, 0, 0, 0.15)"
  //     }}
  //   >
  //     <div
  //       className="modal"
  //       style={{
  //         position: "absolute",
  //         background: "#fff",
  //         top: 25,
  //         left: "10%",
  //         right: "10%",
  //         padding: 15,
  //         border: "2px solid #444"
  //       }}
  //     >}*/}
        <h1>{relative.fullName}</h1>
        <RelativeShow relative={relative} />
        <button type="button" onClick={back}>
          Close
</button>
        </Modal>
    //   </div>
    // </div>




)

  // export default class Modal extends Component {
    // render() {
      // return createPortal(
      //   <div style={modalStyle} onClick={this.props.onClick}>
      //     {this.props.children}
      //   </div>,
      //   document.getElementById("modal_root")
      // );
    // }
  // }
}

export default RelativeModal

// onClick={back}