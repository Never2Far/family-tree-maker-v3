import React, { Component } from 'react';
import { connect } from 'react-redux';
import RelativeInput from '../components/RelativeInput';
import RelativesList from '../components/RelativesList';
import { withAuth0 } from '@auth0/auth0-react';
import { saveRelative } from '../actions/saveRelative';
import { deleteRelative } from '../actions/deleteRelative';
import { fetchRelatives } from '../actions/fetchRelatives';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import GridContainer from './GridContainer';


// import {saveRelative} from '../actions/saveRelative';

class RelativesContainer extends Component {



// getDerivedStateFromProps() {
  
// }
// componentDidMount() {
//   const { user } = this.props.auth0;
//   this.props.fetchRelatives(user.sub)
// }
// componentDidMount() {

// 


  render() {
    const { user } = this.props.auth0;
    return (
      <Container className="relative-input" >
        
      
        {/* <h1 className={'header'}>{`${user.given_name}'s Family`}</h1> */}
        <RelativeInput addRelative={this.props.addRelative} saveRelative={this.props.saveRelative} userId={user.sub}/>
  
        <RelativesList relatives={this.props.relatives.relatives} deleteRelative={this.props.deleteRelative} fetchRelatives={this.props.fetchRelatives} userId={user.sub}/>
        <GridContainer user={user} relatives={this.props.relatives.relatives}/>
        
       </Container>
    )
  }
}


const mapStateToProps = ({relatives}) => ({relatives})

const mapDispatchToProps = dispatch => ({
  fetchRelatives: payload => dispatch(fetchRelatives(payload)),
  saveRelative: payload => dispatch(saveRelative(payload)),
  addRelative: payload => dispatch({type: 'ADD_RELATIVE', payload}),
  deleteRelative: payload => dispatch(deleteRelative(payload)),
  removeRelative: payload => dispatch({type: 'ADD_RELATIVE', payload})
//   ,deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
})

export default withAuth0(connect(mapStateToProps, mapDispatchToProps)(RelativesContainer))
