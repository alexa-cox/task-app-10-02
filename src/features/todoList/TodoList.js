import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  InputGroup,
} from 'reactstrap';
import { ACTIVE_ITEMS_KEY, COMPLETED_ITEMS_KEY } from './todoSplice';

/*
  React State Management:

  - Special mechanism to communicate to React Framework when we need our component
    to re-render with updates
  
    Hooks:
      - useState(): Update the state of a React Component
        - Returns an array of two elements
          - 1st: Pointer to the data you're tracking
          - 2nd: A function to update the data
      
          Example:
          let results = useState();
          let addedItem = results[0];
          let setAddedItem = results[1];
*/

// <TodoList items={[]} /> = TodoList();
function TodoList({ title, showNewButton, completed }) {
  const [addedItem, setAddedItem] = useState(false);
  const [newItem, setNewItem] = useState();

  // Get items based on active or completed
  const [items, setItems] = useState(() => {
    const key = completed ? COMPLETED_ITEMS_KEY : ACTIVE_ITEMS_KEY;
    const savedItems = localStorage.getItem(key);
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const addNewItem = () => {
    setAddedItem(true); // provide updated value as argument
    // console.log('Changing addItem to true', addedItem);
  };

  const saveItem = () => {
    const updatedItems = items.concat(newItem);
    setItems(updatedItems);

    // Update local storage
    const key = completed ? COMPLETED_ITEMS_KEY : ACTIVE_ITEMS_KEY;
    localStorage.setItem(key, JSON.stringify(updatedItems));
    setNewItem('');
  };

  // Render a list of items within a card
  const showItems = () => {
    // loop over items, and return an array of JSX
    let completedClass = '';
    let checkClass = '';
    let isChecked = false;
    if (completed) {
      completedClass = 'text-muted';
      isChecked = true;
      checkClass = 'bg-secondary border-secondary';
    }

    const jsxItems = items.map(function (item) {
      return (
        <li className={`${completedClass} list-group-item`}>
          <input
            className={`${checkClass} form-check-input`}
            type='checkbox'
            checked={isChecked}
          />
          <Link to={`/todo/${item}`}>
            <span className='ms-3'>{item}</span>
          </Link>
        </li>
      );
    });

    return jsxItems;
  };

  // Display input for adding a new item
  const showAddedItemInput = () => {
    if (addedItem) {
      return (
        <Row>
          <Col>
            <InputGroup className='shadow-sm bg-white rounded mt-3'>
              <Input
                className='input'
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}
              />
              <Button
                onClick={saveItem}
                className='btn-custom2'
              >
                Save
              </Button>
            </InputGroup>
          </Col>
        </Row>
      );
    }
  };

  const showButton = () => {
    if (showNewButton) {
      return (
        <CardFooter>
          <Button
            onClick={addNewItem}
            className='btn-custom1'
            size='sm'
          >
            Add New
          </Button>
        </CardFooter>
      );
    }
  };

  return (
    <section className='todo-list mt-2'>
      <Card className='mt-3'>
        <CardHeader>{title}</CardHeader>
        <CardBody>
          <ul className='list-group list-group-flush'>{showItems()}</ul>
          {showAddedItemInput()}
        </CardBody>
        {showButton()}
      </Card>
    </section>
  );
}

export default TodoList;

/*
function sayName() {
  console.log('My name is Jolie');
};

sayName(); // My name is Nas
sayName(); // My name is Mary
sayName(); // My name is Bob
sayName(); // My name is Jolie
*/
