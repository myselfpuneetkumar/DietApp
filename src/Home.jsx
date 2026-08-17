import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:flex-row lg:justify-between lg:gap-8 lg:py-24">

        {/* Hero Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">

          <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            🥗 Your Personal Health Companion
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight text-green-700 sm:text-5xl md:text-6xl lg:text-6xl">
            BMI Diet Planner
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
            Understand your body, improve your lifestyle, and get
            personalized diet and workout recommendations based on
            your BMI.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">

            <Link to="/bmi">
              <button className="w-full rounded-lg bg-green-600 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-green-700 hover:shadow-lg sm:w-auto">
                Calculate BMI
              </button>
            </Link>

            <a
              href="#features"
              className="w-full rounded-lg border border-green-600 px-7 py-3 font-semibold text-green-700 transition hover:bg-green-50 sm:w-auto"
            >
              Explore Features
            </a>

          </div>

          {/* Small stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">

            <div>
              <h3 className="text-xl font-bold text-green-700 sm:text-2xl">
                100%
              </h3>
              <p className="text-xs text-gray-500 sm:text-sm">
                Personalized
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-700 sm:text-2xl">
                Easy
              </h3>
              <p className="text-xs text-gray-500 sm:text-sm">
                To Use
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-700 sm:text-2xl">
                Free
              </h3>
              <p className="text-xs text-gray-500 sm:text-sm">
                To Start
              </p>
            </div>

          </div>

        </div>

        {/* Hero Image */}
        <div className="flex w-full justify-center m-20 lg:w-1/2">

          <div className="relative">

            <div className="absolute -inset-5 rounded-full bg-green-100 blur-2xl"></div>

            <img
              src="public/hero.jpg"
              alt="Healthy diet"
              className="relative w-640 max-w-full m-10 object-contain sm:w-80 md:w-96 lg:w-[430px]"
            />

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="bg-white px-5 py-16 sm:px-8 sm:py-20"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
              Our Features
            </span>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Everything You Need for a Healthier Lifestyle
            </h2>

            <p className="mt-4 text-gray-600">
              Simple tools to help you understand your body and
              build better daily habits.
            </p>

          </div>


          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* BMI */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl">
                ⚖️
              </div>

              <h3 className="mt-5 text-xl font-bold">
                BMI Calculator
              </h3>

              <p className="mt-3 leading-6 text-gray-600">
                Calculate your Body Mass Index using your height
                and weight and understand your BMI category.
              </p>

              <Link
                to="/bmi"
                className="mt-5 inline-block font-semibold text-green-600 hover:text-green-700"
              >
                Calculate BMI →
              </Link>

            </div>


            {/* Diet */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl">
                🥗
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Diet Planning
              </h3>

              <p className="mt-3 leading-6 text-gray-600">
                Discover meal suggestions designed around your
                BMI category and health goals.
              </p>

              <Link
                to="/diet"
                className="mt-5 inline-block font-semibold text-green-600 hover:text-green-700"
              >
                View Diet Plans →
              </Link>

            </div>


            {/* Workout */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl">
                🏃
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Workout Plans
              </h3>

              <p className="mt-3 leading-6 text-gray-600">
                Get simple exercise ideas to help you stay active
                and maintain a healthier lifestyle.
              </p>

              <Link
                to="/workout"
                className="mt-5 inline-block font-semibold text-green-600 hover:text-green-700"
              >
                Explore Workouts →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-gray-50 px-5 py-16 sm:px-8 sm:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
              Simple Process
            </span>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Get Started in 3 Simple Steps
            </h2>

          </div>


          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">

            <div className="text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                1
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Enter Your Details
              </h3>

              <p className="mt-3 text-gray-600">
                Enter your height, weight, age and other basic
                information.
              </p>

            </div>


            <div className="text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                2
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Calculate Your BMI
              </h3>

              <p className="mt-3 text-gray-600">
                Our calculator determines your BMI and shows
                your BMI category.
              </p>

            </div>


            <div className="text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                3
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Follow Your Plan
              </h3>

              <p className="mt-3 text-gray-600">
                Explore diet and workout recommendations for
                your health goals.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-green-600 px-6 py-12 text-center text-white shadow-xl sm:px-12">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Start Your Health Journey?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-green-50">
            Calculate your BMI today and take the first step
            towards building healthier habits.
          </p>

          <Link to="/bmi">
            <button className="mt-7 rounded-lg bg-white px-8 py-3 font-semibold text-green-700 shadow-md transition hover:bg-green-50">
              Calculate My BMI
            </button>
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      {/* <footer className="border-t bg-white px-5 py-8 sm:px-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <div>
            <h3 className="font-bold text-green-700">
              BMI Diet Planner
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Simple tools for a healthier lifestyle.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 BMI Diet Planner. All rights reserved.
          </p>

        </div>

      </footer> */}

    </div>
  );
}