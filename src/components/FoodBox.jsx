import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  const { name, calories, image, servings } = props.food;
  const { id, setFoodList, setFoodToShow } = props;

  let totalCalories = calories * servings;

  // Delete food function (using id = index)
  const handleDeletion = (foodKey) => {

    setFoodList( currentState => {
      const foodListClone = structuredClone(currentState)
      foodListClone.splice(foodKey, 1)
      return foodListClone
    })

    setFoodToShow( currentState => {
      const foodListClone = structuredClone(currentState)
      foodListClone.splice(foodKey, 1)
      return foodListClone
    })
  }

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} alt={name} height={60} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {totalCalories}</b> kcal
        </p>
        <Button type="primary" onClick={() => handleDeletion(id)}>Delete</Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
