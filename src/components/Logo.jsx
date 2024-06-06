import React from 'react'
import { Container, Logo, LogoutBtn } from "./index";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Logo({width='100px'}) {

  const authStatus=useSelector((state)=>state.auth.status)
  const navigate=useNavigate()
  const naItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
  ];

  return (
    <div>Logo</div>
  )
}

export default Logo