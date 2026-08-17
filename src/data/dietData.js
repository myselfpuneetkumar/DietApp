const dietPlans = {
  Underweight: {
    title: "Weight Gain Diet",
    calories: "2600-3000 kcal",

    earlyMorning: {
      time: "7:30 AM",
      meal: [
        "🥜 5-6 Soaked Almonds",
        "🌰 2 Walnuts"
      ]
    },

    breakfast: {
      time: "8:30 AM",
      meal: [
        "🥔 2 Stuffed Parathas (Aloo/Paneer) with Butter/Curd",
        "OR",
        "🍳 3 Egg Omelet",
        "🍞 2 Buttered Toasts"
      ]
    },

    midMorningSnack: {
      time: "11:00 AM",
      meal: [
        "🍌 Large Banana Shake",
        "🥛 Full Cream Milk",
        "🥜 1 tsp Peanut Butter"
      ]
    },

    lunch: {
      time: "1:30 PM",
      meal: [
        "🫓 2-3 Rotis with Ghee",
        "🥣 1 Bowl Dal / Chhole / Rajma",
        "🥦 1 Bowl Seasonal Vegetables",
        "🍚 1 Bowl Rice",
        "🥛 1 Bowl Curd"
      ]
    },

    Snack: {
      time: "4:30 PM",
      meal: [
        "☕ Tea / Coffee",
        "🧀 Paneer Sandwich",
        "OR",
        "🥣 Poha with Peanuts & Sprouts"
      ]
    },

    dinner: {
      time: "8:30 PM",
      meal: [
        "🫓 2-3 Rotis",
        "🧀 100g Paneer",
        "🍗 OR Chicken / Fish / Eggs",
        "🥣 1 Bowl Dal / Vegetables",
        "🥗 Salad"
      ]
    },

    beforeBed: {
      time: "10:30 PM",
      meal: [
        "🥛 Warm Milk",
        "🍯 1 tsp Honey",
        "OR",
        "🌿 A Pinch of Turmeric"
      ]
    }
  },



  Healthy: {
  title: "Balanced Diet",
  calories: "2100-2400 kcal",

  earlyMorning: {
    time: "7:00 AM",
    meal: [
      "🥜 5 Soaked Almonds",
      "🍋 1 Glass Warm Lemon Water"
    ]
  },

  breakfast: {
    time: "8:00 AM",
    meal: [
      "🥣 1 Bowl Oats with Milk",
      "🥚 2 Boiled Eggs",
      "🍎 1 Apple",
      "OR",
      "🥪 Brown Bread Sandwich + Milk"
    ]
  },

  midMorningSnack: {
    time: "11:00 AM",
    meal: [
      "🍊 1 Seasonal Fruit",
      "🥜 Handful of Mixed Nuts"
    ]
  },

  lunch: {
    time: "1:30 PM",
    meal: [
      "🫓 2 Rotis",
      "🥣 1 Bowl Dal",
      "🥦 1 Bowl Seasonal Vegetables",
      "🍚 1 Small Bowl Brown Rice",
      "🍗 100g Chicken / Paneer",
      "🥛 1 Bowl Curd"
    ]
  },

 Snack: {
    time: "4:30 PM",
    meal: [
      "☕ Green Tea",
      "🥪 Whole Wheat Sandwich",
      "OR",
      "🌽 Roasted Corn"
    ]
  },

  dinner: {
    time: "8:30 PM",
    meal: [
      "🫓 2 Rotis",
      "🍗 100g Grilled Chicken / Paneer",
      "🥣 1 Bowl Dal",
      "🥗 Fresh Salad"
    ]
  },

  beforeBed: {
    time: "10:30 PM",
    meal: [
      "🥛 1 Glass Warm Milk"
    ]
  }
},

Overweight: {
  title: "Weight Loss Diet",
  calories: "1600-1800 kcal",

  earlyMorning: {
    time: "7:00 AM",
    meal: [
      "🍋 Warm Lemon Water",
      "🌱 1 tsp Chia Seeds"
    ]
  },

  breakfast: {
    time: "8:00 AM",
    meal: [
      "🥣 Oats with Skimmed Milk",
      "🍏 Green Apple",
      "🍵 Green Tea"
    ]
  },

  midMorningSnack: {
    time: "11:00 AM",
    meal: [
      "🥒 Cucumber",
      "🍊 Orange"
    ]
  },

  lunch: {
    time: "1:30 PM",
    meal: [
      "🫓 2 Multigrain Rotis",
      "🍗 100g Grilled Chicken / Paneer",
      "🥣 1 Bowl Dal",
      "🥦 Boiled Vegetables",
      "🥗 Salad"
    ]
  },

  Snack: {
    time: "4:30 PM",
    meal: [
      "☕ Green Tea",
      "🥜 Roasted Chana",
      "OR",
      "🥗 Sprouts Salad"
    ]
  },

  dinner: {
    time: "8:00 PM",
    meal: [
      "🥣 Vegetable Soup",
      "🍗 Grilled Chicken / Paneer",
      "🥗 Mixed Salad"
    ]
  },

  beforeBed: {
    time: "10:00 PM",
    meal: [
      "🥛 1 Glass Low Fat Milk"
    ]
  }
},

Obese: {
  title: "Low Calorie Diet",
  calories: "1200-1500 kcal",

  earlyMorning: {
    time: "7:00 AM",
    meal: [
      "🍋 Warm Lemon Water",
      "🌿 5 Soaked Fenugreek Seeds"
    ]
  },

  breakfast: {
    time: "8:00 AM",
    meal: [
      "🥣 Oats",
      "🍎 Apple",
      "🍵 Green Tea"
    ]
  },

  midMorningSnack: {
    time: "11:00 AM",
    meal: [
      "🥒 Cucumber",
      "🍉 Watermelon"
    ]
  },

  lunch: {
    time: "1:30 PM",
    meal: [
      "🫓 1-2 Rotis",
      "🥣 1 Bowl Dal",
      "🥦 Boiled Vegetables",
      "🥗 Large Salad"
    ]
  },

  Snack: {
    time: "4:30 PM",
    meal: [
      "☕ Herbal Tea",
      "🥜 Roasted Chickpeas"
    ]
  },

  dinner: {
    time: "7:30 PM",
    meal: [
      "🥣 Vegetable Soup",
      "🧀 100g Low Fat Paneer",
      "🥗 Salad"
    ]
  },

  beforeBed: {
    time: "9:30 PM",
    meal: [
      "🥛 1 Glass Skimmed Milk"
    ]
  }
}

//   Healthy: {
//     title: "Balanced Diet",
//     calories: "2200 kcal",

//     breakfast: {
//       time: "8:00 AM",
//       meal: [
//         "🥣 Oats",
//         "🥛 Milk",
//         "🍎 Apple"
//       ]
//     },

//     lunch: {
//       time: "1:00 PM",
//       meal: [
//         "🍚 Brown Rice",
//         "🍗 Grilled Chicken",
//         "🥗 Salad"
//       ]
//     },

//     snacks: {
//       time: "5:00 PM",
//       meal: [
//         "🥜 Mixed Nuts",
//         "🍊 Orange"
//       ]
//     },

//     dinner: {
//       time: "8:00 PM",
//       meal: [
//         "🫓 Roti",
//         "🥦 Vegetables",
//         "🍗 Grilled Chicken"
//       ]
//     }
//   },

//   Overweight: {
//     title: "Weight Loss Diet",
//     calories: "1800 kcal",

//     breakfast: {
//       time: "8:00 AM",
//       meal: [
//         "🥣 Oats",
//         "🍏 Green Apple",
//         "🍵 Green Tea"
//       ]
//     },

//     lunch: {
//       time: "1:00 PM",
//       meal: [
//         "🥗 Salad",
//         "🍗 Grilled Chicken"
//       ]
//     },

//     snacks: {
//       time: "5:00 PM",
//       meal: [
//         "🥒 Cucumber",
//         "🍵 Green Tea"
//       ]
//     },

//     dinner: {
//       time: "8:00 PM",
//       meal: [
//         "🥦 Vegetable Soup",
//         "🥗 Salad"
//       ]
//     }
//   },

//   Obese: {
//     title: "Low Calorie Diet",
//     calories: "1600 kcal",

//     breakfast: {
//       time: "8:00 AM",
//       meal: [
//         "🍎 Apple",
//         "🥣 Oats"
//       ]
//     },

//     lunch: {
//       time: "1:00 PM",
//       meal: [
//         "🥗 Salad",
//         "🥦 Boiled Vegetables"
//       ]
//     },

//     snacks: {
//       time: "5:00 PM",
//       meal: [
//         "🍊 Orange"
//       ]
//     },

//     dinner: {
//       time: "8:00 PM",
//       meal: [
//         "🥣 Vegetable Soup",
//         "🥗 Salad"
//       ]
//     }
//   }
};

export default dietPlans;








// const dietPlans = {
//   Underweight: {
//     title: "Weight Gain Diet",
//     calories: "2600 kcal",
    
//     breakfast: [
//       "🥛 Milk",
//       "🥣 Oats",
//       "🍌 Banana",
//       "🥚 2 Eggs"
//     ],

//     lunch: [
//       "🍚 Rice",
//       "🍗 Chicken",
//       "🥗 Salad"
//     ],
//     snacks: [
//       "🥜 Almonds",
//       "🥛 Protein Shake"
//     ],
//     dinner: [
//       "🫓 Roti",
//       "🧀 Paneer",
//       "🥦 Vegetables"
//     ]
//   },

//   Healthy: {
//     title: "Balanced Diet",
//     calories: "2200 kcal",
//     breakfast: [
//       "🥣 Oats",
//       "🍎 Apple",
//       "🥛 Milk"
//     ],
//     lunch: [
//       "🍚 Brown Rice",
//       "🥗 Salad",
//       "🍗 Chicken"
//     ],
//     snacks: [
//       "🥜 Nuts",
//       "🍊 Orange"
//     ],
//     dinner: [
//       "🥦 Vegetables",
//       "🍗 Grilled Chicken",
//       "🫓 Roti"
//     ]
//   },

//   Overweight: {
//     title: "Weight Loss Diet",
//     calories: "1800 kcal",
//     breakfast: [
//       "🥣 Oats",
//       "🍏 Green Apple",
//       "☕ Green Tea"
//     ],
//     lunch: [
//       "🥗 Salad",
//       "🍗 Grilled Chicken"
//     ],
//     snacks: [
//       "🥒 Cucumber",
//       "🍵 Green Tea"
//     ],
//     dinner: [
//       "🥦 Soup",
//       "🥗 Vegetables"
//     ]
//   },

//   Obese: {
//     title: "Low Calorie Diet",
//     calories: "1600 kcal",
//     breakfast: [
//       "🍎 Apple",
//       "🥣 Oats"
//     ],
//     lunch: [
//       "🥗 Salad",
//       "🥦 Boiled Vegetables"
//     ],
//     snacks: [
//       "🍊 Orange"
//     ],
//     dinner: [
//       "🥣 Soup",
//       "🥗 Salad"
//     ]
//   }
// };

// export default dietPlans;