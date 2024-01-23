"use client";

import { useState } from "react";

import { TranslationProvider } from "../context/TranslationContext";
import "../styles/app.css";

import Navbar from "../components/navbar/Navbar.jsx";
import UsersTable from "../components/usersTable/UsersTable.jsx";
import UserProfile from "../components/userProfile/UserProfile.jsx";

function App() {
  const [userProfile, setUserProfile] = useState(null);

  return (
    <TranslationProvider>
      <div className="app-wrapper">
        <Navbar />
        {userProfile ? (
          <UserProfile
            userProfile={userProfile}
            setUserProfile={setUserProfile}
          />
        ) : (
          <UsersTable setUserProfile={setUserProfile} />
        )}
      </div>
    </TranslationProvider>
  );
}

export default App;
