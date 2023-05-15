import {
  addMessageActionCreator,
  onChangeMessageActionCreator,
} from "../../redux/messageReduser";
import Messages from "./Messages";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    newPostMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onChange: (text) => {
      dispatch(onChangeMessageActionCreator(text));
    },
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
