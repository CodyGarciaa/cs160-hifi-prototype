import React from "react";
import ToggleButton from "./ToggleButton";
import { useNavigate } from "react-router-dom";
import Button from './Button.jsx';


const Avatar = ({ src, alt }) => {
    const defaultAvatar = (
      <svg
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="#e0e0e0" />
        <path
          d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
          fill="#757575"
        />
      </svg>
    );


  
    return (
      <div
        style={{
          width: '100px', // Set your desired width
          height: '100px', // Set your desired height
          borderRadius: '50%', // For a circular avatar
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e0e0e0', // Fallback background color
        }}
      >
        {src ? (
          <img
            src={src}
            alt={alt || 'User Avatar'}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          defaultAvatar
        )}
      </div>
    );
  };
  


const WatchListPlaceholder = ({ count }) => {
    const placeholders = Array.from({ length: count });
  
    return (
      <div style={styles.container}>
        {placeholders.map((_, index) => (
          <div key={index} style={styles.square}></div>
        ))}
      </div>
    );
};
  
const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-evenly',
      padding: '10px',
    },
    square: {
      width: '100px', // Set your desired width
      height: '100px', // Set your desired height
      backgroundColor: '#e0e0e0', // Grey color for the placeholder
    },
};
  
  

export default function Account() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/')
    }
    return (
        <>
            {/* <button className="back-button" onClick={goToHome}>&#8592;</button> */}
            <Button className="back-btn" onClick={goToHome}>
              <img src="https://cdn-icons-png.flaticon.com/512/566/566002.png"
              style={{ width: '20px', height: '20px' }}/>
            </Button>

            <Avatar />
            <div>
                Custom Triggers<button>+</button>
            </div>
            <ToggleButton>holes /small patterns</ToggleButton>
            <button>🖊️</button>
            <div>
                Watch list
            </div>
            <WatchListPlaceholder count={5}/>
            <button>log out</button>
        </>
    )
}