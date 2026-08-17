import { Link } from "react-router-dom";

export default function BMICard({
  bmi,
  category,
  calories,
  water,
}) {
  if (!bmi) return null;

  return (
    <div className="w-full bg-white shadow-xl rounded-xl p-6 mt-8">

      <h2 className="text-3xl font-bold text-green-600 mb-5">
        Your Result
      </h2>

      <div className="space-y-4 text-lg">

        <p>
          <strong>BMI :</strong> {bmi}
        </p>

        <p>
          <strong>Category :</strong> {category}
        </p>

        <p>
          <strong>Daily Calories :</strong> {calories} kcal
        </p>

        <p>
          <strong>Water Intake :</strong> {water} L
        </p>
              <button className="font-bold text-center justify-center align-middle bg-green-400 rounded-xl"><Link to='/diet'>Click here to Show DietPlan</Link></button>

      </div>
    </div>
  );
}