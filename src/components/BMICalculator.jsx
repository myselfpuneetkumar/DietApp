import { useEffect, useState } from "react";

import InputField from "../components/InputField";
import BMICard from "../components/BMICard";
import { Link } from "react-router-dom";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState("");
  const [calories, setCalories] = useState("");
  const [water, setWater] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Please enter height and weight");
      return;
    }

    const h = Number(height) / 100;
    const w = Number(weight);

    const result = (w / (h * h)).toFixed(1);

    setBMI(result);
    localStorage.setItem('result',result);
    console.log(result);
    

    if (result < 18.5) {
      setCategory("Underweight");
      setCalories(2600);
    } else if (result < 25) {
      setCategory("Healthy");
      setCalories(2200);
    } else if (result < 30) {
      setCategory("Overweight");
      setCalories(1800);
    } else {
      setCategory("Obese");
      setCalories(1600);
    }

    setWater((w * 0.035).toFixed(3));
  };

  useEffect(()=>{
    localStorage.setItem('category',category)
  },[category]);

  return (
    <div className="min-h-screen  bg-gray-100 py-1 mx-60 flex justify-center items-center align-middle">
   



      <div className="max-w-2xl mx-auto w-full p-0 h-60  rounded-xl shadow-lg">

        <h1 className="text-4xl font-bold text-center text-green-600 mb-8 mt-8 ">
          BMI Calculator
        </h1>

        <InputField
          label="Height (cm)"
          type="number"
          value={height}
          placeholder="170"
          onChange={(e) => setHeight(e.target.value)}
        />

        <InputField
          label="Weight (kg)"
          type="number"
          value={weight}
          placeholder="65"
          onChange={(e) => setWeight(e.target.value)}
        />

        <button
          onClick={calculateBMI}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Calculate BMI
        </button>

        <BMICard
          bmi={bmi}
          category={category}
          calories={calories}
          water={water}
        />


      </div>
      {/* <div className="bg-red-500 p-4 text-center">
        
  Test
</div> */}


{/* <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-xl mx-auto w-full p-1 bg-white rounded-xl shadow-lg">

        <h1 className="text-4xl font-bold text-center text-green-600 mb-8 mt-8 ">
          BMI Calculator
        </h1>

        <InputField
          label="Height (cm)"
          type="number"
          value={height}
          placeholder="170"
          onChange={(e) => setHeight(e.target.value)}
        />

        <InputField
          label="Weight (kg)"
          type="number"
          value={weight}
          placeholder="65"
          onChange={(e) => setWeight(e.target.value)}
        />

        <button
          onClick={calculateBMI}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Calculate BMI
        </button>

        <BMICard
          bmi={bmi}
          category={category}
          calories={calories}
          water={water}
        />


      </div>
</div> */}

    </div>
  );
}