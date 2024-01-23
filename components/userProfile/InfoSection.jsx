import React from 'react'

const InfoSection = ({ className, title, children }) => {
  return (
    <div className={className}>
      <h2>{title.toUpperCase()}</h2>
      {children}
    </div>
  );
};


export default InfoSection