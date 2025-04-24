
import React from 'react';
import { MenuItem as MenuItemType } from '@/data/menuData';
import { Card, CardContent } from '@/components/ui/card';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <Card className="menu-card h-full">
      <div className="overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="menu-image"
        />
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-playfair text-xl font-semibold text-tunisia-navy">{item.name}</h3>
          <span className="font-playfair font-bold text-tunisia-terracotta">${item.price}</span>
        </div>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
