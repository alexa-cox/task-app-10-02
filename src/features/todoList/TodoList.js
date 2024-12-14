import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Card, CardHeader, CardBody, CardFooter, Input } from 'reactstrap';

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
function TodoList(data) {
  const [ addedItem, setAddedItem ] = useState(false);
  const [ items, setItems ] = useState(data.items);
  const [ newItem, setNewItem ] = useState();
  
  const addNewItem = () => {
    setAddedItem(true); // provide updated value as argument
    console.log('Changing addItem to true', addedItem);
    
  }

  const showButton = () => {
    if (data.showNewButton) {
      return (
        <CardFooter>
          <Button
            onClick={addNewItem}
            color='success'
            size='sm'
          >
            Add New
          </Button>
        </CardFooter>
      );
    }
  };

  const showItems = () => {
    // loop over items, and return an array of JSX
    let completedClass = '';
    let checkClass = '';
    let isChecked = false;
    if (data.completed) {
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
          <Link to={`/todo/${item}`}><span className='ms-3'>{item}</span></Link>
        </li>
      );
    });

    return jsxItems;
  };

  const showAddedItemInput = () => {
    if (addedItem) {
      return (
        <Row>
          <Col><Input onChange={(event) => setNewItem(event.target.value)} /></Col>
          <Col><Button onClick={saveItem} color="primary">Save</Button></Col>
        </Row>
      )
    }
  }

  /*
    Immutablity: Not being to mutate the original value of something
  */
  const saveItem = () => {
    let newItems = items.concat([newItem]); // Ensure we create a brand new array

    // Update the state holding the items array
    setItems(newItems);
  }

  return (
    <section className='todo-list mt-2'>
      <Card>
        <CardHeader>{data.title}</CardHeader>
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