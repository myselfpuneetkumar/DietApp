import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      <section className="max-w-7xl mx-auto px-8 py-20 flex items-center justify-between">

        <div className="w-1/2">

          <h1 className="text-6xl font-bold text-green-700">
            BMI Diet Planner
          </h1>

          <p className="text-lg mt-6 text-gray-600">
            Calculate your BMI and receive a personalized
            diet plan according to your health.
          </p>

          <Link to="/bmi">
            <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700">
              Calculate BMI
            </button>
          </Link>

        </div>

        <div className="w-1/2 flex justify-center">
          <img
            src="/hero.png"
            alt="Diets "
            className="w-96"
          />
        </div>

      </section>

      <section className="max-w-7xl mx-auto py-20">

        <h2 className="text-4xl font-bold text-center">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-3 gap-8 mt-12">

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold">
              BMI Calculator
            </h3>

            <p className="mt-4">
              Calculate your BMI instantly.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold">
              Diet Plan
            </h3>

            <p className="mt-4">
              Personalized meal recommendations.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold">
              Workout
            </h3>

            <p className="mt-4">
              Daily exercise recommendations.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}