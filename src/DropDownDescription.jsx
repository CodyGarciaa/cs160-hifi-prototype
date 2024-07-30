import React, { useState } from 'react';

const DropDownDescription = ({ buttonText, popuptime, description }) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={styles.container}>
      <button onClick={toggleDropdown} style={{ ...styles.button, ...styles.commonWidth }}>
        {buttonText}{popuptime} <span style={styles.icon}>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div style={{ ...styles.dropdown, ...styles.commonWidth }}>
          <p style={styles.description}>
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    margin: '20px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdown: {
    marginTop: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
  },
  description: {
    margin: 0,
    fontSize: '14px',
  },
  commonWidth: {
    width: '300px', // Set a common width for both button and dropdown
  },
  icon: {
    marginLeft: '10px',
  },
};

export default DropDownDescription;
