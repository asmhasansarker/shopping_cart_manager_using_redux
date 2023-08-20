/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector } from "react-redux";

export default function Header({ setIsCartPage }) {
  const carts = useSelector((state) => state.carts);
  const cartItem = carts.reduce(
    (totalItem, item) => item.cartQuantity + totalItem,
    0
  );
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a onClick={() => setIsCartPage(false)} href="#">
            <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
          </a>

          <div className="flex gap-4">
            <a
              onClick={() => setIsCartPage(false)}
              href="#"
              className="navHome"
              id="home"
            >
              {" "}
              Home{" "}
            </a>
            <a
              onClick={() => setIsCartPage(true)}
              href="#"
              className="navCart"
              id="cart"
            >
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="totalCart">{cartItem}</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
