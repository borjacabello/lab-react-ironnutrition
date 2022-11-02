import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [foodToShow, setFoodToShow] = useState(foods)
  const [formIsShowing, setFormIsShowing] = useState(false)

  // Function to manage search in Search.jsx
  const filterFood = (filterQuery) => {
    // Filter if any element at the current food list includes search query
    // Use foodList to have all the foods in a list and footToShow to only show the filtered foods in search
    const filteredArr = foodList.filter((eachFood) => eachFood.name.includes(filterQuery));

    // Updates current displayed list
    setFoodToShow(filteredArr);
  };

  // Function to toggle Form
  const toggleForm = () => {
    setFormIsShowing(!formIsShowing)
  }

  
  return (
    <div className="App">
      {formIsShowing === true && <AddFoodForm setFoodList={setFoodList} setFoodToShow={setFoodToShow}/>}

      <Button onClick={toggleForm}>{formIsShowing === false ? "Add New Food" : "Hide Form"}</Button>

      <Search filterFood={filterFood} />

      <Divider>Food List</Divider>

      {foodToShow.length !== 0
      ? <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodToShow.map((eachFood, index) => {
          return (
            <FoodBox
              key = {eachFood.name + index}
              id = {index}  // Create a unique id equal to index to after be able to delete the element (because key can't be passed as a prop)
              food={{
                name: eachFood.name,
                calories: eachFood.calories,
                image: eachFood.image,
                servings: eachFood.servings,
              }}
              setFoodList={setFoodList} 
              setFoodToShow={setFoodToShow}
            />
          );
        })}
      </Row>
      : <p style={{fontSize: "40px"}}>Oops! There is no more content to show.</p>
      }
    </div>
  );
}

export default App;
