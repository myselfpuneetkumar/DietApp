import { NavLink } from "react-router-dom";

export default function Main(){
    return(
        <>
        <main>
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 bg-blue-700">
        <h1 className="text-2xl font-light  dark:text-green-50 bg-amber-700">🥗 Diet Planner</h1>

        <ul className="flex gap-6 font-medium">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/bmi">BMI</NavLink></li>
          <li><NavLink to="/diet">Diet</NavLink></li>
          <li><NavLink to="/workout">Workout</NavLink></li>
          <li><NavLink to="/progress">Progress</NavLink></li>
        
        </ul>
      </div>
        </main>
        </>
    )
}