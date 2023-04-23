import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">15</span>
        </span>
      </Link>
      <button type="button" className="auth-btn">
        Login <FaUserPlus/>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    font-size: 1.2rem;
    font-weight: var(--font-weight-bold);
    color: var(--clr-grey-3);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.5rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -15px;
    right: -19px;
    background: var(--clr-green-dark);
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.8rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    color: var(--clr-grey-3);
    font-weight: var(--font-weight-bold);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
