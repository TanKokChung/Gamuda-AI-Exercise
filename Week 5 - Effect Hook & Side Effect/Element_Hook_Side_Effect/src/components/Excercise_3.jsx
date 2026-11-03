import { useState, useEffect } from "react";


function UserProfile ({ userId }) {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState({
        user: false,
        posts: false
    });
    const [error, setError] = useState({
        user: null,
        posts: null
    });


    //fetch user data when userId changes
    useEffect(() => {
        if (!userId) {
            setUser(null);
            return;
        }
        
        const abortController = new AbortController();

        const fetchUser = async () => {
            setLoading(prev => ({...prev, user: true}));
            setError(prev => ({...prev, user: null}));

            try {
                //simulate API delay
                await new Promise(resolve => setTimeout(resolve, 10000));

                const response = await fetch(`/api/users/${userId}`, {
                    signal: abortController.signal
                });

                if(!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const UserData = await response.json();
                setUser(userData);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    const response = await fetch(`/api/users/${userId}`, {
                        signal: abortController.signal
                    });
                }
            }
        }
    })
}