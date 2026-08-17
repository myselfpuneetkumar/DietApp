import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-10 justify-center flex">
      <div className="max-w-7xl mx-auto py-6 text-center">
        <h2 className="text-xl font-bold">
          BMI Diet Planner
        </h2>


        <p className="mt-2 text-center">
        Made With &hearts; by <Link to="https://puneetkumar.netlify.app/" target="_blank">Puneet Kumar</Link>
        </p>
         {/* <p className="mt-1 text-sm text-gray-100">
              Simple tools for a healthier lifestyle.
            </p> */}
       <p className="text-sm text-white">
            © 2026 BMI Diet Planner. All rights reserved.
          </p>
        
      </div>

     

          

        
    </footer>
  );
}