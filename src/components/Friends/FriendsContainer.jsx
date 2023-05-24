import React from "react";
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageAC,
  setTotalFriendsAC,
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
        this.props.setTotalFriends(response.data.totalCount)
      });
  }

  onChangedPage(page) {
    try {
      this.props.setCurrent(page);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.setFriends(response.data.items);
        });
    } catch (e) {
      console.log(e);
    }
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
    setCurrent: (users) => {
      dispatch(setCurrentPageAC(users));
    },
    setTotalFriends: (totalFriends) => {
      dispatch(setTotalFriendsAC(totalFriends));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
