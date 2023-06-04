import Preloader from "../Preloader/Preloader";
import ava from "../../images/avatarka.png";
import ProfileStatus from "./ProfileStatus";
import React from "react";

const Info = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className="person-info">
      <img
        className="ava"
        src={!props.profile.photos.large ? ava : props.profile.photos.large}
        alt=""
      />
      <div>
        <h2>{props.profile.fullName}</h2>
        <p>
          <b>Some contacts: </b>
          <br />
          {props.profile.contacts.github} <br /> {props.profile.contacts.vk}{" "}
          <br /> {props.profile.contacts.facebook} <br />{" "}
          {props.profile.contacts.instagram} <br />{" "}
          {props.profile.contacts.twitter}
          <p>
            <b>Some about {props.profile.fullName}:</b>
          </p>
          {props.profile.aboutMe === null ? (
            <p>Пользователь не хочет про себя что-то рассказывать :с</p>
          ) : (
            props.profile.aboutMe
          )}{" "}
          <p>
            <b>New Status</b><br></br>
            <ProfileStatus
              status={props.status}
              UpdateUserStatus={props.UpdateUserStatus}
            />
          </p>
        </p>
      </div>
    </div>
  );
};

export default Info;
