export default function DietCard({ title,time, meals }) {
  return (

    <div className="bg-gray-250 min-w-full rounded-xl shadow-lg ">
    <div className="bg-gray-100 rounded-xl shadow-lg p-60 " style={{margin:"20px"}}>

      <h2 className="text-2xl font-bold text-green-600 mb-4">
        {title}
      </h2>
      <h2 className="text-2xl font-medium  text-orange-500 mb-4">
        {time}
      </h2>

      <ul className="space-y-3">
        {meals.map((meal, index) => (
          <li
            key={index}
            className="border-b pb-2"
          >
            {meal}
          </li>
        ))}
      </ul>

    </div>
    </div>
  );
}