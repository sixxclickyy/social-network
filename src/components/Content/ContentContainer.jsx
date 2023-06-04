import Content from "./Content";
import React from "react";
import "./Content.css";
import { connect } from "react-redux";
import { setUserProfile, userProfileThunk, getUserStatus, UpdateUserStatus } from "../../redux/contentReduser";
import { useParams } from "react-router-dom";
import { AuthRedirect } from "../../HOC/AuthRedirect";
import { compose } from "redux";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ContentContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 29109;
    }
    this.props.userProfileThunk(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return <Content {...this.props} profile={this.props.profile} status={this.props.status} UpdateUserStatus={this.props.UpdateUserStatus}/>;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, { setUserProfile, userProfileThunk, UpdateUserStatus, getUserStatus }),
  withRouter,
  // AuthRedirect
)(ContentContainer);
