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
import { usersAPI } from "../../api/api";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.isFecthingLoader(true);
    
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.isFecthingLoader(false);
        this.props.setFriends(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onChangedPage = (page) => {
    this.props.setCurrent(page);
    this.props.isFecthingLoader(true);
      usersAPI.getUsers(page, this.props.pageSize)
      .then((data) => {
        this.props.isFecthingLoader(false);
        this.props.setFriends(data.items);
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


