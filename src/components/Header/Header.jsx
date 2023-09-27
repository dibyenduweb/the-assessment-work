import { NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/donate'>Donation</NavLink></li>
            <li><NavLink to='/statistics'>Statistics</NavLink></li>
           
    </>
    return (
        <div className="navbar lg:px-14">
        <div className="lg:flex-1">
          <img src={"https://i.ibb.co/vDF54NR/Logo.png"} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
      </div>


    );
};

export default Header;