// import { useLocation } from "react-router-dom";
import dietPlans from "../data/dietData";
import DietCard from "../components/DietCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DietPlan({bmi}) {
  const[category,setCategory] = useState(
    localStorage.getItem('category' || '')
  )

  // const location = useLocation();

  // useEffect(()=>{
  //   let categorynew = localStorage.getItem('category')
  //   setCategory(categorynew);
  //   console.log(categorynew);
    
    
  // },[])

  // const category = location.state?.category || "Healthy";
  // const category =  "Underweight";
  // console.log(category);
  

  const plan = dietPlans[category];

  if(!plan){
    return(
      <div className="   bg-green-200 justify-center h-100">
      <h1 className="text-black-500 bg-green-200 text-center h-20">No Diet plan shows</h1>
      <p className="font-bold text-center">You Don't Calculate your BMI Value
        <br />
      <button className="font-bold text-center justify-center align-middle bg-green-400 rounded-xl"><Link to='/bmi'>Click here to Calculate BMI</Link></button>
      </p>
      </div>
    )
  }

  return (

    <div className="min-h-screen bg-gray-100 p-10 justify-center items-center flex">

      <div className="max-w-7xl mx-10 m-40">

        <h1 className="text-5xl font-bold text-center text-green-600 mb-2 ">
         
          {plan.title}
        </h1><br />
        <hr />

        <p className="text-center text-xl mb-0">
          
          Category :  {category}<br />
        </p>
        <p className="text-center text-xl m-20 text-orange-600 font-bold ">
          
          Daily Calories : {plan.calories}
        </p>
      
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-20 ">

          <DietCard
            title="Early Morning"
            time={plan.earlyMorning.time}
            meals={plan.earlyMorning.meal}
          />
          <DietCard
            title="Breakfast"
            time={plan.breakfast.time}
            meals={plan.breakfast.meal}
          />
          

          <DietCard
            title="Mid-Morning Snack"
            time={plan.midMorningSnack.time}
            meals={plan.midMorningSnack.meal}
          />
          <DietCard
            title="Lunch"
            time={plan.lunch.time}
            meals={plan.lunch.meal}
          />

          <DietCard
            title="Snacks"
            time={plan.Snack.time}
            meals={plan.Snack.meal}
          />

          <DietCard
            title="Dinner"
            time={plan.dinner.time}
            meals={plan.dinner.meal}
          />
          <DietCard
            title="Before-Bed"
            time={plan.beforeBed.time}
            meals={plan.beforeBed.meal}
          />
          

        </div>
        


      </div>

    </div>

  );
}