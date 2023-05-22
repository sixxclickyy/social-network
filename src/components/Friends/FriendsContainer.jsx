import React from "react";
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  currentPageActionCreator,
  setFriendsTotalCountAC,
} from "../../redux/friendsReduser";
import { connect } from "react-redux";
import axios from "axios";
import Friends from "./Friends";

class FriendsContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setFriends(response.data.items);
        this.props.setFriendsTotalCountAC(response.data.totalCount);
      });
  }

  onChangedPage(pageNumber) {
    debugger;
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setFriends(response.data.items);
      });
  }

  render() {
    return (
      <Friends
        totalFriendsCount={this.props.totalFriendsCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onChangedPage={this.onChangedPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.friendsPage.users,
    pageSize: state.friendsPage.pageSize,
    totalFriendsCount: state.friendsPage.totalFriendsCount,
    currentPage: state.friendsPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (usersId) => {
      dispatch(followActionCreator(usersId));
    },
    unfollow: (usersId) => {
      dispatch(unfollowActionCreator(usersId));
    },
    setFriends: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(currentPageActionCreator(pageNumber));
    },
    setTotalFriendsCount: (totalCount) => {
      dispatch(setFriendsTotalCountAC(totalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
