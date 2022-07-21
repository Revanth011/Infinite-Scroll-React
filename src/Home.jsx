import { useEffect, useState } from 'react';
import UserCard from "./components/UserCard";
import ScaleLoader from "react-spinners/ScaleLoader";
import "./Home.css"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function Home() {
    const [userData, setUserData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const { dispatch } = useContext(AuthContext);

    const handleScroll = (e) => {
        e.preventDefault();
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
        if ((scrollTop + clientHeight) >= scrollHeight) setPage(p => p + 1);
    }
    const handleLogout = (e) => {
        dispatch({ type: "LOGOUT" });
    }

    useEffect(() => {
        setLoading(true)
        const fetchUserData = async () => {
            const data = await fetch("https://randomuser.me/api/?results=35");
            const newUserData = await data.json();
            setUserData(prev => {
                return [...prev, ...newUserData.results]
            });
            setLoading(false)
        }
        fetchUserData();
    }, [page])

    return (
        <div className="Home" onScroll={handleScroll}>
            <button onClick={handleLogout} className="logout">Logout</button>
            <div className="homeContainer">
                {userData.map((user, i) => {
                    return (
                        <UserCard key={Date.now() + i} userData={user} />
                    )
                })}
            </div>
            {loading ? <div className="loader"><ScaleLoader size={40} /></div> : ""}
        </div>
    );
}

export default Home;
