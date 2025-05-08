
import React from 'react';

interface PizzaItem {
  name: string;
  ingredients: string;
  price: string;
  spicy?: boolean;
  vegetarian?: boolean;
}

interface PizzaCategory {
  title: string;
  description: string;
  pizzas: PizzaItem[];
}

const MenuSection = () => {
  const menuCategories: PizzaCategory[] = [
    {
      title: "Classic Pizzas",
      description: "Our classic pizzas are made with traditional tomato sauce and mozzarella cheese base.",
      pizzas: [
        {
          name: "Margherita",
          ingredients: "San Marzano tomato sauce, fresh mozzarella, basil, olive oil",
          price: "119 kr",
          vegetarian: true
        },
        {
          name: "Pepperoni",
          ingredients: "Pepperoni, mozzarella, tomato sauce",
          price: "129 kr"
        },
        {
          name: "Hawaiian",
          ingredients: "Ham, pineapple, mozzarella, tomato sauce",
          price: "129 kr"
        },
        {
          name: "Meat Lover's",
          ingredients: "Pepperoni, sausage, bacon, ham, mozzarella, tomato sauce",
          price: "149 kr"
        },
        {
          name: "Diavola",
          ingredients: "Spicy salami, chili flakes, bell peppers, mozzarella, tomato sauce",
          price: "139 kr",
          spicy: true
        }
      ]
    },
    {
      title: "White Pizzas",
      description: "Our white pizzas are made with a creamy garlic sauce base instead of tomato sauce.",
      pizzas: [
        {
          name: "Four Cheese",
          ingredients: "Mozzarella, gorgonzola, parmesan, ricotta, garlic cream base",
          price: "139 kr",
          vegetarian: true
        },
        {
          name: "Truffle Mushroom",
          ingredients: "Wild mushrooms, truffle oil, mozzarella, parmesan, garlic cream base",
          price: "149 kr",
          vegetarian: true
        }
      ]
    },
    {
      title: "Gourmet Pizzas",
      description: "Our signature gourmet pizzas feature premium ingredients and unique flavor combinations.",
      pizzas: [
        {
          name: "Prosciutto & Arugula",
          ingredients: "Prosciutto di Parma, arugula, cherry tomatoes, parmesan, balsamic glaze, tomato base",
          price: "159 kr"
        },
        {
          name: "Fig & Goat Cheese",
          ingredients: "Fresh figs, goat cheese, honey, walnuts, arugula, balsamic glaze, olive oil base",
          price: "159 kr",
          vegetarian: true
        },
        {
          name: "Seafood Deluxe",
          ingredients: "Shrimp, calamari, mussels, garlic, parsley, lemon zest, mozzarella, olive oil base",
          price: "169 kr"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="logo-text text-3xl md:text-4xl text-pizza-orange mb-4">
            Our Pizza Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wood-fired, handcrafted pizzas made fresh at your event with premium ingredients
          </p>
        </div>

        <div className="space-y-16">
          {menuCategories.map((category, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-pizza-orange mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.pizzas.map((pizza, pizzaIdx) => (
                  <div 
                    key={pizzaIdx} 
                    className="border border-gray-100 rounded-lg p-4 hover:shadow-lg transition-all event-card"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl font-semibold flex items-center gap-2">
                        {pizza.name}
                        {pizza.vegetarian && (
                          <span className="text-green-600 text-xs font-normal bg-green-100 px-2 py-1 rounded-full">
                            Veg
                          </span>
                        )}
                        {pizza.spicy && (
                          <span className="text-red-600 text-xs font-normal bg-red-100 px-2 py-1 rounded-full">
                            Spicy
                          </span>
                        )}
                      </h4>
                      <span className="text-lg font-bold text-pizza-orange">{pizza.price}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{pizza.ingredients}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
