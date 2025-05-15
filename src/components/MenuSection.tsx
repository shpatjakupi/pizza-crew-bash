import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface PizzaItem {
  nameKey: string;
  ingredientsKey: string;
  spicy?: boolean;
  vegetarian?: boolean;
}

interface PizzaCategory {
  titleKey: string;
  descriptionKey: string;
  pizzas: PizzaItem[];
}

const MenuSection = () => {
  const { t } = useLanguage();
  
  const menuCategories: PizzaCategory[] = [
    {
      titleKey: 'classicPizzas',
      descriptionKey: 'classicPizzasDesc',
      pizzas: [
        {
          nameKey: 'margherita',
          ingredientsKey: 'margheritaIngredients',
          vegetarian: true
        },
        {
          nameKey: 'pepperoni',
          ingredientsKey: 'pepperoniIngredients'
        },
        {
          nameKey: 'hawaiian',
          ingredientsKey: 'hawaiianIngredients'
        },
        {
          nameKey: 'meatLovers',
          ingredientsKey: 'meatLoversIngredients'
        },
        {
          nameKey: 'diavola',
          ingredientsKey: 'diavolaIngredients',
          spicy: true
        }
      ]
    },
    {
      titleKey: 'whitePizzas',
      descriptionKey: 'whitePizzasDesc',
      pizzas: [
        {
          nameKey: 'fourCheese',
          ingredientsKey: 'fourCheeseIngredients',
          vegetarian: true
        },
        {
          nameKey: 'truffleMushroom',
          ingredientsKey: 'truffleMushroomIngredients',
          vegetarian: true
        }
      ]
    },
    {
      titleKey: 'gourmetPizzas',
      descriptionKey: 'gourmetPizzasDesc',
      pizzas: [
        {
          nameKey: 'prosciuttoArugula',
          ingredientsKey: 'prosciuttoArugulaIngredients'
        },
        {
          nameKey: 'figGoatCheese',
          ingredientsKey: 'figGoatCheeseIngredients'
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="logo-text text-3xl md:text-4xl text-pizza-orange mb-4">
            {t('ourPizzaMenu')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('menuSubtitle')}
          </p>
        </div>
        <div className="space-y-16">
          {menuCategories.map((category, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-pizza-orange mb-2">{t(category.titleKey)}</h3>
              <p className="text-gray-600 mb-6">{t(category.descriptionKey)}</p>
             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.pizzas.map((pizza, pizzaIdx) => (
                  <div
                    key={pizzaIdx}
                    className="border border-gray-100 rounded-lg p-4 hover:shadow-lg transition-all event-card"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl font-semibold flex items-center gap-2">
                        {t(pizza.nameKey)}
                        {pizza.vegetarian && (
                          <span className="text-green-600 text-xs font-normal bg-green-100 px-2 py-1 rounded-full">
                            {t('veg')}
                          </span>
                        )}
                        {pizza.spicy && (
                          <span className="text-red-600 text-xs font-normal bg-red-100 px-2 py-1 rounded-full">
                            {t('spicy')}
                          </span>
                        )}
                      </h4>
                    </div>
                    <p className="text-gray-600 mt-2">{t(pizza.ingredientsKey)}</p>
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