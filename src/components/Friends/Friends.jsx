import React from "react";
import style from "./Friends.module.css";
import userPhoto from "../../images/avatarka.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Friends = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let curP = props.currentPage;
  let curPF = curP - 5 < 0 ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);

  return (
    <div className={style.friendsContainer}>
      <div className={style.selects}>
        {slicedPages.map((p) => {
          return (
            <span
              className={props.currentPage === p ? style.selectedPage : ""}
              onClick={() => {
                props.onChangedPage(p);
              }}
            >
              {p} <span></span>
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div className={style.users} key={u.id}>
          <div className={style.users}>
            <NavLink to={"/profile/" + u.id}>
              <div className={style.users}>
                <img
                  className={style.userPhoto}
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                />
              </div>
            </NavLink>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </div>
          {u.followed ? (
            <a
              className={style.blubtn}
              onClick={() => {
                axios
                  .delete(
                    `https://social-network.samuraijs.com/api/1.0/follow/` + u.id,
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "5ee15a04-4613-4dba-beda-ecea20fa17af"
                      }
                    }
                  )
                  .then((response) => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(u.id);
                    }
                  });
              }}
            >
              Unfollow
            </a>
          ) : (
            <a
              className={style.blubtn}
              onClick={() => {
                axios
                  .post(
                    `https://social-network.samuraijs.com/api/1.0/follow/` + u.id, {},
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "5ee15a04-4613-4dba-beda-ecea20fa17af"
                      }
                    }
                  )
                  .then((response) => {
                    if (response.data.resultCode === 0) {
                      props.follow(u.id);
                    }
                  });
              }}
            >
              Follow
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Friends;
