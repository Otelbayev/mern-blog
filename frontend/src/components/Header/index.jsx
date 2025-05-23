import React, { useState } from "react";
import { Root, Container, Wrapper } from "./style";
import logo from "../../assets/favicon.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useScroll } from "../../hooks/useScroll";
import { useScrollContext } from "../../context/ScrollContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { contactRef, insectRef, commentRef, aboutRef, setScroll, serviceRef } =
    useScrollContext();
  const navigate = useNavigate();

  const handleClick = (title, ref) => {
    setOpen(false);
    if (window.location.pathname !== "/") {
      setScroll(title);
      navigate("/");
    } else {
      useScroll(ref);
    }
  };

  return (
    <Root>
      <Wrapper open={open}>
        <div className="root-container">
          <div className="header">
            <div data-aos={"fade-right"} className="logo">
              <NavLink to="/">
                <img src={logo} alt="" />
                <span className="logo-title">Raqamli iqtisodiyot</span>
              </NavLink>
            </div>
            <nav data-aos={"fade-left"}>
              <ul className="nav__list">
                <li
                  onClick={() => handleClick("service", serviceRef)}
                  className="nav__list__item"
                >
                  <a>Reja</a>
                </li>
                <li
                  onClick={() => handleClick("insect", insectRef)}
                  className="nav__list__item"
                >
                  <a>Blog</a>
                </li>
                <li
                  onClick={() => handleClick("comment", commentRef)}
                  className="nav__list__item"
                >
                  <a>Ustozlar</a>
                </li>
                <li
                  onClick={() => {
                    setOpen(false);
                    useScroll(contactRef);
                  }}
                  className="nav__list__item"
                >
                  <a>Aloqa</a>
                </li>
                <li
                  onClick={() => handleClick("about", aboutRef)}
                  className="nav__list__item"
                >
                  <NavLink to="/">Xulosa</NavLink>
                </li>
              </ul>
            </nav>
            <div
              data-aos={"fade-left"}
              className="bars"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <i className="fa-solid fa-xmark"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </Root>
  );
};

export default Header;
