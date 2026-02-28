import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

function Profile() {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        setUser(auth.currentUser)
    }, []);

    return (
        <div>
            <h1>Profile</h1>

            {user ? <p>Welcome, <strong>{user.displayName}</strong></p> : <p>Not logged in</p>}
        </div>
    );
}

export default Profile;