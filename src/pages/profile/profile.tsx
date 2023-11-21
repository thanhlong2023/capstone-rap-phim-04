import React, { useEffect, useState } from "react";
import { getProfile } from "src/services";
import { Avatar } from "antd";
function Profile() {
  const [profile, setProfile] = useState({ avatar: "", name: "" });
  useEffect(() => {
    getProfile().then((resp) => {
      console.log(resp);
      setProfile(resp);
    });
  }, []);

  return (
    <div>
      <Avatar src={profile.avatar} />
      <h2>{profile.name}</h2>
    </div>
  );
}

export default Profile;
