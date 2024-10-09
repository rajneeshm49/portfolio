import React from "react";

const SocialProfile = (props) => {
  const { link, image } = props.socialProfile;
  return (
    <span>
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={image}
          alt="social-profile"
          style={{ width: 35, height: 35, margin: 10 }}
        />
      </a>
    </span>
  );
};

export default SocialProfile;
