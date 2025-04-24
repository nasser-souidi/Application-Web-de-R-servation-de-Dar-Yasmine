export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: "starters" | "mains" | "desserts" | "drinks";
}

export const menuItems: MenuItem[] = [
  // STARTERS
  {
    id: 1,
    name: "Brik",
    description: "Crispy pastry filled with tuna, parsley, and a whole egg, fried to perfection.",
    price: "6.50",
    image: "/images/brik.jpeg",
    category: "starters"
  },
  {
    id: 2,
    name: "Salade Mechouia",
    description: "Grilled vegetable salad with peppers, tomatoes, and onions, seasoned with olive oil and spices.",
    price: "7.50",
    image: "/images/slademchwia.jpeg",
    category: "starters"
  },
  {
    id: 7,
    name: "Ojja Merguez",
    description: "Spicy tomato and pepper stew with merguez sausage and eggs.",
    price: "8.00",
    image: "/images/Ojja Merguez.jpeg",
    category: "starters"
  },
  {
    id: 8,
    name: "Chorba Frik",
    description: "Traditional soup made with green wheat, lamb, and spices.",
    price: "6.00",
    image: "/images/Chorba Frik.jpeg",
    category: "starters"
  },
  {
    id: 9,
    name: "Tastira",
    description: "Fried peppers, eggs, and tomatoes seasoned with harissa and garlic.",
    price: "5.50",
    image: "/images/Tastira.jpeg",
    category: "starters"
  },
  {
    id: 10,
    name: "Kaftaji",
    description: "Chopped fried vegetables with egg and sometimes liver or sausage.",
    price: "6.80",
    image: "/images/Kaftaji.jpeg",
    category: "starters"
  },

  // MAINS
  {
    id: 3,
    name: "Couscous Royal",
    description: "Traditional semolina topped with lamb, chicken, merguez sausage, and seasonal vegetables.",
    price: "18.90",
    image: "/images/Couscous Royal.jpeg",
    category: "mains"
  },
  {
    id: 4,
    name: "Tajine Zitoune",
    description: "Slow-cooked lamb with olives, preserved lemons, and aromatic spices.",
    price: "16.50",
    image: "/images/Tajine Zitoune.jpeg",
    category: "mains"
  },
  {
    id: 11,
    name: "Sea Bass with Chermoula",
    description: "Tender sea bass fillet marinated in chermoula, served with saffron-infused couscous and seasonal vegetables.",
    price: "24.00",
    image: "/images/Chermoula.jpeg",
    category: "mains"
  },
  {
    id: 12,
    name: "Makloub",
    description: "Grilled meat or chicken sandwich in flatbread with harissa and vegetables.",
    price: "7.50",
    image: "/images/Makloub.jpeg",
    category: "mains"
  },
  {
    id: 13,
    name: "Mloukhia",
    description: "Thick green stew made with dried Jew's mallow and slow-cooked beef.",
    price: "14.00",
    image: "/images/Mloukhia.jpeg",
    category: "mains"
  },
  {
    id: 14,
    name: "Kamounia",
    description: "Beef or liver stew flavored with cumin, garlic, and olive oil.",
    price: "13.00",
    image: "/images/Kamounia.jpeg",
    category: "mains"
  },

  // DESSERTS
  {
    id: 5,
    name: "Baklava",
    description: "Layered pastry filled with chopped nuts and honey syrup.",
    price: "5.90",
    image: "images/Baklava.jpeg",
    category: "desserts"
  },
  {
    id: 15,
    name: "Zriga",
    description: "Tunisian-style sweet custard with almonds and honey.",
    price: "4.50",
    image: "/images/Zriga.jpeg",
    category: "desserts"
  },
  {
    id: 16,
    name: "Mlabes",
    description: "Almond cookies covered in sugar icing.",
    price: "4.20",
    image: "/images/Mlabes.jpeg",
    category: "desserts"
  },
  {
    id: 17,
    name: "Assidat Zgougou",
    description: "Pine nut cream dessert served during celebrations.",
    price: "5.00",
    image: "/images/Assidat Zgougou.jpeg",
    category: "desserts"
  },
  {
    id: 18,
    name: "Makroud",
    description: "Semolina and date pastry soaked in honey syrup.",
    price: "4.80",
    image: "/images/Makroud.jpeg",
    category: "desserts"
  },
  {
    id: 19,
    name: "Yoyo",
    description: "Fried doughnut dipped in sugar or honey.",
    price: "3.90",
    image: "/images/Yoyo.jpeg",
    category: "desserts"
  },

  // DRINKS
  {
    id: 6,
    name: "Mint Tea",
    description: "Traditional sweet mint tea served in a decorative glass.",
    price: "3.50",
    image: "images/Mint Tea.jpeg",
    category: "drinks"
  },
  {
    id: 20,
    name: "Turkish Coffee",
    description: "Strong Turkish-style coffee served in a small cup.",
    price: "2.50",
    image: "/images/Coffee.jpeg",
    category: "drinks"
  },
  {
    id: 21,
    name: "Amlou Drink",
    description: "Smooth almond-based drink blended with honey and olive oil.",
    price: "4.00",
    image: "/images/Amlou.jpeg",
    category: "drinks"
  },
  {
    id: 22,
    name: "Orgeat",
    description: "Sweet almond syrup mixed with cold water, traditional and refreshing.",
    price: "3.80",
    image: "/images/Orgeat.jpeg",
    category: "drinks"
  },

  {
    id: 23,
    name: "Citronnade",
    description: "Fresh homemade lemonade with mint leaves.",
    price: "3.20",
    image: "/images/Citronnade.jpeg",
    category: "drinks"
  }
];
