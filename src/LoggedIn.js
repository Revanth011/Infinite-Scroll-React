import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Outlet } from "react-router-dom";
import Login from "./Login"

export default function LoggedIn() {
    const { user } = useContext(AuthContext);
    return user ? <Outlet /> : <Login />
}