'use client';
import { useContext } from "react";

import Image from "next/image";

import TranslationContext from "../../context/TranslationContext";

const ProfileImage = ({ user }) => {
  const { t } = useContext(TranslationContext);

  return (
    <div className="profile">
      <h2>{t("profile_image")}</h2>
      {user?.picture.large && (
        <Image
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          width={300}
          height={300}
        />
      )}
    </div>
  );
};

export default ProfileImage;
