import Content from './Content';
import React from "react";
import './Content.css';
import axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/contentReduser'
import { useParams } from 'react-router-dom'

export function withRouter(Children){

  return(props)=>{
     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>

 }
}

class ContentContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
        userId = 5;
    }
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/` + userId
      )
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <Content {...this.props} profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ContentContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);
