import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import img1 from "../images/logo.jpg";
import { Avatar, Badge, Button, Image} from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Header() {
  const {cartItems} = useContext(CartContext);
  console.log("cartItems=>", cartItems);
  const navigate = useNavigate();
  const isLogin = true;
    return(
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <svg
      
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /> */}
      {/* </svg> */}
        <img src={img1} height={50} width={50} alt="" />
      <span className="ml-3 text-xl font-semibold">Furniro</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to={'/'}>
        <a className="mr-5 hover:text-gray-900">Home</a>
      </Link>
      <Link to={'/Product'}>
      <a className="mr-5 hover:text-gray-900">Product</a>
      </Link>
      <Link to={'/about'}>
      <a className="mr-5 hover:text-gray-900">About</a>
      </Link>
      <Link to={'/contact'}>
      <a className="mr-5 hover:text-gray-900">Contact</a>
      </Link>

    </nav>

<div className="flex items-center gap-3">
  {isLogin ? (
    <Avatar size={50} icon={<UserOutlined/>}/>
  ) : (
    <Button onClick={() => navigate("/auth")}>Login</Button>
  )}
  <Link to={"/cart"}>
  <Badge count={cartItems.length}>    
    <ShoppingCartOutlined
      style={{
        fontSize: 30,
        color: "blue",
      }}
    />
    </Badge> 
  </Link>

</div>

  </div>
</header>
    )
}
export default Header