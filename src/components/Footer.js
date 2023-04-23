import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()} <span>Shop Jet</span>
      </h5>
      &nbsp;
      <h5>All Rights Reserved.</h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-logo-shop);
  box-shadow: var(--footer-shadow);
  text-align: center;
  span {
    color: var(--clr-logo-jet);
    font-weight: var(--font-weight-bold);
  }
  h5 {
    color: var(--clr-white);

    text-transform: none;
    margin: 0;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
