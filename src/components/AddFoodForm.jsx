import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm(props) {
  // Destructuring State Updater function
  const { setFoodList, setFoodToShow } = props;

  // States for the four inputs (Controlled Component)
  const [nameInput, setNameInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingsInput, setServingsInput] = useState(0);

  // Handles name change
  const handleChangeName = (event) => {
    setNameInput(event.target.value);
  };

  // Handles image change
  const handleChangeImage = (event) => {
    setImageInput(event.target.value);
  };

  // Handles calories change
  const handleChangeCalories = (event) => {
    setCaloriesInput(event.target.value);
  };

  // Handles servings change
  const handleChangeServings = (event) => {
    setServingsInput(event.target.value);
  };

  // Function to manage how to add new food
  const addNewFood = (event) => {
    // Preventing normal flow of the form
    event.preventDefault();

    // Food object to add
    const newFoodToAdd = {
      name: nameInput,
      calories: caloriesInput,
      image: imageInput,
      servings: servingsInput,
    };

    // Using state updater function --> using way 2 (callback function)
    setFoodList(currentState => {
      const foodListClone = structuredClone(currentState); // currentState is foodList --> the current food list displayed
      foodListClone.unshift(newFoodToAdd);
      return foodListClone;
    });

    setFoodToShow(currentState => {
      const foodListClone = structuredClone(currentState);
      foodListClone.unshift(newFoodToAdd)
      return foodListClone
    })
  };

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Name</label>
      <Input value={nameInput} type="text" name="name" onChange={handleChangeName} />

      <label htmlFor="image">Image</label>
      <Input value={imageInput} type="text" name="image" onChange={handleChangeImage} />

      <label htmlFor="calories">Calories</label>
      <Input value={caloriesInput} type="number" name="calories" onChange={handleChangeCalories} />

      <label htmlFor="servings">Servings</label>
      <Input value={servingsInput} type="number" name="servings" onChange={handleChangeServings} />

      <button type="submit" onClick={addNewFood}>Create</button>
    </form>
  );
}

export default AddFoodForm;
