// src/components/Profile.js
import React from 'react';
import { auth, signOut } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    const idToken = await auth.currentUser.getIdToken();

    try {
      const response = await fetch('https://your_region-your_project_id.cloudfunctions.net/api/delete-account', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${idToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        await auth.signOut();
        navigate('/');
      } else {
        console.error("Error deleting account");
      }
    } catch (error) {
      console.error("Error deleting account", error);
    }
  };

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
      <h1>Profile Management</h1>
      <button onClick={handleSignOut}>Sign out</button>
      <button onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );
};

export default Profile;
