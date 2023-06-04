import { Navigate } from "react-router-dom";
import {
  addMessageActionCreator,
  onChangeMessageActionCreator,
} from "../../redux/messageReduser";
import Messages from "./Messages";
import { connect } from "react-redux";
import { AuthRedirect } from "../../HOC/AuthRedirect"
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    newPostMessage: (newMessageBody) => {
      dispatch(addMessageActionCreator(newMessageBody));
    },
    onChange: (text) => {
      dispatch(onChangeMessageActionCreator(text));
    },
  };
};

export default compose (connect(
  mapStateToProps,
  mapDispatchToProps),  //AuthRedirect
)(Messages);
