import React from "react";
import {
  follow,
  unfollow,
  setCurrent,
  toggleFollowingProgress,
  getFriendsThunk
} from "../../redux/friendsReduser";
import { connect } from "react-redux";
import Friends from "./Friends.jsx";
import Preloader from "../Preloader/Preloader";

class FriendsContainer extends React.Component {
  componentDidMount() {
   this.props.getFriendsThunk(this.props.currentPage, this.props.pageSize);
  }

  onChangedPage = (page) => {
    this.props.setCurrent(page);
    this.props.getFriendsThunk(page, this.props.pageSize);

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
            followingInProgress={this.props.followingInProgress}
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
    followingInProgress: state.friendsPage.followingInProgress
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrent,
  toggleFollowingProgress,
  getFriendsThunk
})(FriendsContainer);
