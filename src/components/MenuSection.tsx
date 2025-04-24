
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { menuItems, MenuItem as MenuItemType } from '@/data/menuData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Category = MenuItemType['category'];

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('starters');
  
  const categories: { value: Category; label: string }[] = [
    { value: 'starters', label: 'Starters' },
    { value: 'mains', label: 'Main Dishes' },
    { value: 'desserts', label: 'Desserts' },
    { value: 'drinks', label: 'Drinks' }
  ];

  return (
    <section id="menu" className="py-20 pattern-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover our selection of authentic Tunisian dishes, prepared with traditional recipes and the finest ingredients.
          </p>
        </div>
        
        <Tabs defaultValue="starters" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.value} 
                value={category.value}
                className="data-[state=active]:bg-tunisia-terracotta data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems
                  .filter(item => item.category === category.value)
                  .map(item => (
                    <MenuItem key={item.id} item={item} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;
