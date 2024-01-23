"use client";
import { useState, useEffect, useContext } from "react";

import TranslationContext from "../../context/TranslationContext";
import "../../styles/scss/userProfile.scss";

import { FaArrowLeft } from "react-icons/fa6";
import ProfileImage from "./ProfileImage.jsx";
import InfoSection from "./InfoSection.jsx";
import InfoItem from "./InfoItem.jsx";

function UserProfile({ userProfile, setUserProfile }) {
  const [user, setUser] = useState(null);
  const { t } = useContext(TranslationContext);

  useEffect(() => {
    if (userProfile) {
      setUser(userProfile);
    }
  }, [userProfile]);

  const handleResettingUser = () => {
    setUser(null);
    setUserProfile(null);
  };

  return (
    <div className="wrapper">
      <button type="button" onClick={handleResettingUser}>
        <FaArrowLeft size={25} />
      </button>
      <div className="container">
        <ProfileImage user={user} />
        <InfoSection className="personal-info" title={t("personal_info")}>
          <InfoItem
            label={t("name")}
            value={`${user?.name.first} ${user?.name.last}`}
          />
          <InfoItem label={t("age")} value={user?.dob.age} />
          <InfoItem label={t("email")} value={user?.email} />
          <InfoItem
            label={t("dob")}
            value={new Date(user?.dob.date).toLocaleDateString()}
          />
          <InfoItem label={t("phone")} value={user?.phone} />
        </InfoSection>
        <InfoSection className="location" title={t("location")}>
          <InfoItem
            label={t("st")}
            value={`${user?.location.street.number} ${user?.location.street.name}`}
          />
          <InfoItem label={t("city")} value={user?.location.city} />
          <InfoItem label={t("state")} value={user?.location.state} />
          <InfoItem label={t("zip")} value={user?.location.postcode} />
          <InfoItem label={t("country")} value={user?.location.country} />
        </InfoSection>
      </div>
    </div>
  );
}

export default UserProfile;
