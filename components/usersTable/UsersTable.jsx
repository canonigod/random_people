'use client';

import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

import { RxAvatar } from "react-icons/rx";

import TranslationContext from '../../context/TranslationContext';
import "../../styles/scss/usersTable.scss";

function UsersTable({ setUserProfile }) {
  const [users, setUsers] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const { t, setLang } = useContext(TranslationContext);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${50}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Server responded with an error!");
        }
      })
      .then((data) => {
        setUsers(data.results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (!users) return <p style={{width: '100%'}}>Loading...</p>;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(users?.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleProfileClick = (user) => {
    setUserProfile(user);
  };

  return (
    <React.Fragment>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>{t('name')}</th>
              <th>{t('age')}</th>
              <th>{t('city')}</th>
              <th>{t('view')}</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              currentItems.map((user, index) => {
                const fullName = `${user?.name.first} ${user?.name.last}`;
                const location = `${user?.location.city}, ${user?.location.country}`;

                return (
                  <tr key={index}>
                    <td className="name-row">
                      <Image
                        src={user?.picture.thumbnail}
                        alt={`${fullName} profile`}
                        width={40}
                        height={40}
                        />
                      <p>{fullName}</p>
                    </td>
                    <td>{user?.dob.age}</td>
                    <td>{location}</td>
                    <td>
                      <button onClick={() => handleProfileClick(user)}>
                        <RxAvatar size={20} />
                        Profile
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  className={currentPage === number ? "active" : ""}
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              )
            )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default UsersTable;
