import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "BMI Calculator", path: "/bmi" },
    { name: "Diet Plan", path: "/diet" },
    { name: "Workout", path: "/workout" },
    { name: "Nutrition", path: "/nutrition" },
    { name: "Progress", path: "/progress" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-green-600 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* ================= NAVBAR ================= */}
        <div className="flex h-16 items-center justify-between sm:h-20">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-white sm:text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-2xl sm:text-3xl">🥗</span>
            <span>Diet Planner</span>
          </NavLink>


          {/* ================= DESKTOP MENU ================= */}
          <ul className="hidden items-center gap-5 lg:flex xl:gap-8">

            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative inline-block py-2 text-sm font-medium transition duration-300 xl:text-base ${
                      isActive
                        ? "text-yellow-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-yellow-300"
                        : "text-white hover:text-yellow-300"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

          </ul>


          {/* Login - Desktop */}
          {/* <button
            className="hidden rounded-lg bg-white px-5 py-2 font-semibold text-green-600 transition hover:bg-green-100 lg:block"
          >
            Login
          </button> */}


          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-white hover:bg-green-700 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              /* Close icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </div>


        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="border-t border-green-500 py-4 lg:hidden">

            <ul className="flex flex-col gap-1">

              {navLinks.map((item) => (
                <li key={item.path}>

                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 font-medium transition ${
                        isActive
                          ? "bg-white text-green-600"
                          : "text-white hover:bg-green-700"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>

                </li>
              ))}

            </ul>


            {/* Mobile Login */}
            <button
              className="mt-3 w-full rounded-lg bg-white px-5 py-3 font-semibold text-green-600 hover:bg-green-100"
            >
              Login
            </button>

          </div>
        )}

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