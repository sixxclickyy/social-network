import React from "react";
import {
  follow,
  unfollow,
  setFriends,
  setCurrent,
  setTotalUsersCount,
  isFecthingLoader,
} from "../../redux/friendsReduser";
import { connect } from "react-redux";
import axios from "axios";
import Friends from "./Friends.jsx";
import Preloader from "../Preloader/Preloader";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.isFecthingLoader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.isFecthingLoader(false);
        this.props.setFriends(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onChangedPage = (page) => {
    this.props.setCurrent(page);
    this.props.isFecthingLoader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.isFecthingLoader(false);
        this.props.setFriends(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Friends
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onChangedPage={this.onChangedPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.friendsPage.users,
    pageSize: state.friendsPage.pageSize,
    totalUsersCount: state.friendsPage.totalUsersCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (usersId) => {
//       dispatch(followActionCreator(usersId));
//     },
//     unfollow: (usersId) => {
//       dispatch(unfollowActionCreator(usersId));
//     },
//     setFriends: (users) => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setCurrent: (users) => {
//       dispatch(setCurrentPageAC(users));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount));
//     },
//     isFecthingLoader: (isFetching) => {
//       dispatch(isFecthingLoaderAC(isFetching));
//     },
//   };
// };

export default connect(
  mapStateToProps,
  {
  follow,
  unfollow,
  setFriends,
  setCurrent,
  setTotalUsersCount,
  isFecthingLoader}
)(FriendsContainer);


