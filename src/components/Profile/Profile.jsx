import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
    const {user} = use(AuthContext);
    console.log(user)


    return (
        <div>
            <h1>{user.email}</h1>
        </div>
    );
};

export default Profile;