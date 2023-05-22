import React from "react";
import style from "./Friends.module.css";
import userPhoto from "../../images/avatar.png";

const Friends = (props) => {
  let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={style.friendsContainer}>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && style.selectedPage}
              onClick={(e) => {
                props.onChangedPage(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt=""
              />
            </div>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </div>
          {u.followed ? (
            <button
              onClick={() => {
                props.unfollow(u.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => {
                props.follow(u.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Friends;
