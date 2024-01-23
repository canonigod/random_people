import React from 'react'

const InfoItem = ({ label, value }) => {
  return (
    <div className="gray-box">
      <small>{label}:</small>
      <p>{value}</p>
    </div>
  );
};


export default InfoItem