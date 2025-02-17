import * as React from "react"


// IMPORT ANY NEEDED COMPONENTS HERE
import { Header } from "./components/Header/Header"
import { useState } from "react";
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"
import { createDataSet } from "./data/dataset"
import "./App.css"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {

  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState(null);

function handleClick(category){
  setSelectedCategory(category);
}

function handleClickRestaurant(restaurant){
  setSelectedRestaurant(restaurant);
}

function handleClickItem(item){
  setSelectedItem(item);
}

function displayInstructions(){
  if(selectedCategory == null && selectedRestaurant == null){
    return(appInfo.instructions.start);
  }
  else if(selectedCategory != null && selectedRestaurant == null){
    return(appInfo.instructions.onlyCategory);
  }
  else if(selectedCategory == null && selectedRestaurant != null){
    return(appInfo.instructions.onlyRestaurant);
  }
  else if(selectedCategory != null && selectedRestaurant != null && selectedItem == null){
    return(appInfo.instructions.noSelectedItem);
  }
  else{
    return(appInfo.instructions.allSelected);
  }
}

// function checkSelectedItem(part){
//   if(selectedItem == null){
//     return null;
//   }
//   else if(part == ""){
//     return selectedItem;
//   }
//   else{
//     return selectedItem[part];
//   }
// }

var menuItems = data.filter((restaurant) => {
  return (restaurant.food_category == selectedCategory && restaurant.restaurant == selectedRestaurant);
})

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
            {categories.map((category, i) => (
              <Chip key={i} label={category} category={category} isActive={category === selectedCategory} useClick={() => {
                handleClick(category)
              }} />
            ))}
        </div>
        
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
          <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description}/>
        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {restaurants.map((restaurant, i) => (
              <Chip key={i} label={restaurant} category={restaurant} isActive={restaurant === selectedRestaurant} useClick={() => {
                handleClickRestaurant(restaurant)
              }} />
            ))}
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions={displayInstructions()}/>


        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {/* YOUR CODE HERE */}
            {menuItems.map((food, i) => (
              <Chip key={i} chip={i} label={food.item_name} isActive={food === selectedItem} useClick={() => {
                handleClickItem(food);
              }}/>
            ))}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts"> {selectedItem ? <NutritionalLabel item={selectedItem}/> : null} </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
