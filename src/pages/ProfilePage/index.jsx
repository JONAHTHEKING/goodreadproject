import React from "react";
import styles from "./styles.module.css";

const ProfilePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className={styles.wrapper}>
            <h1 className="text-center p-2">Profile Page</h1>
            <p className="lead p-3 text-wrap">
              Here's your profile information:
            </p>
            <div className="d-flex justify-content-between align-items-center m-2 mb-lg-5 p-5 rounded shadow-lg">
              <div>
                <div>
                  <label>Name :</label>
                  <p>krupakar </p>
                </div>
                <div>
                  <label>Email:</label>
                  <p>krupakar123k@gmail.com</p>
                </div>
                <div>
                  <label>Mobile:</label>
                  <p>7093701637</p>
                </div>
              </div>
              <div>
                <input
                  type="image"
                  src="https://placehold.co/150x150/gray/white"
                  width="150"
                  height="150"
                  alt="profile-img"
                  className="rounded-circle"
                />
              </div>
            </div>
            <a
              href="/updateProfile"
              className="btn btn-success btn-block mb-3 shadow-sm"
            >
              Update Profile
            </a>
            <a
              href="/changePassword"
              className="btn btn-dark btn-block mb-3 shadow-sm"
            >
              Change Password
            </a>
            <a
              href="/logout"
              className="btn btn-danger btn-block mb-3 shadow-sm"
            >
              Log Out
            </a>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default ProfilePage;
