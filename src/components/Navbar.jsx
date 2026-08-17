import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "BMI Calculator", path: "/bmi" },
    { name: "Diet Plan", path: "/diet" },
    { name: "Workout", path: "/workout" },
    { name: "Nutrition", path: "/nutrition" },
    { name: "Progress", path: "/progress" },
  ];

  return (
    <nav className="bg-green-600 shadow-lg ">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            🥗 Diet Planner
          </div>

          {/* Menu */}
          <ul className=" md:flex  items-center gap-8">

            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-white font-medium transition duration-300
                    ${
                      isActive
                        ? "border-b-2 border-yellow-300 text-yellow-300"
                        : "hover:text-yellow-300"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

          </ul>

          {/* Login Button */}

          {/* <button className="hidden md:block bg-white text-green-600 px-5 py-2 rounded-lg hover:bg-green-100">
            Login
          </button> */}

        </div>

      </div>
    </nav>
  );
}



// import { Link, NavLink } from "react-router-dom";


// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <h2>🥗 Diet Planner</h2>
//       </div>

//       <ul className="nav-links">
//         <li>
//           <Link to="/">
//             Home
//           </Link>
//         </li>

//         <li>
//           <Link to="/bmi">BMI Calculator</Link>
//         </li>

//         <li>
//           <Link to="/diet">Diet Plan</Link>
//         </li>

//         <li>
//           <Link to="/workout">Workout</Link>
//         </li>

//         <li>
//           <Link to="/nutrition">Nutrition</Link>
//         </li>

//         <li>
//           <Link to="/progress">Progress</Link>
//         </li>

//         <li>
//           <Link to="/profile">Profile</Link>
//         </li>
//       </ul>

//     </nav>



//   );
// }