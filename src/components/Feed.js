// src/components/Feed.js
import React, { useEffect } from 'react';
import { auth, signOut } from '../firebaseConfig';
import { useNavigate, Link } from 'react-router-dom';

const Feed = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate('/');
    }
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <div>
      <h1>Feed</h1>
      <button onClick={handleSignOut}>Sign out</button>
      <Link to="/profile">
        <button>Profile Management</button>
      </Link>
    </div>
  );
};

export default Feed;
