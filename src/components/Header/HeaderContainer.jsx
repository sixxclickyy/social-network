import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { SetUserData, authThunk } from "../../redux/authReduser";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authThunk();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { SetUserData, authThunk })(HeaderContainer);
