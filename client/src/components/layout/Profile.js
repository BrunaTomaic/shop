import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import ProfileImage from '../layout/profileimage.jpg';

const Profile = () => {
  const [profile, setProfile] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProfile() {
      const url = `http://localhost:5050/user/${id}`;
      const res = await Axios.get(url);
      setProfile(res.data);
    }
    fetchProfile();
  }, []);

  console.log(profile);

  return (
    <>
    <img src={ProfileImage} alt="profile"></img>
      {profile ? (
        <div>
          <h3>{profile.name}</h3>
          <p>{profile.email}</p>
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </>
  );
};

export default Profile;
