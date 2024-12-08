import React from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

function TodoList(data) {
  // data.items = array

  const showButton = () => {
    if (data.showNewButton) {
      return (
        <CardFooter>
          <Button
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

    const jsxItems = data.items.map(function (item) {
      return (
        <li className={`${completedClass} list-group-item`}>
          <input
            className={`${checkClass} form-check-input`}
            type='checkbox'
            checked={isChecked}
          />
          <span className='ms-3'>{item}</span>
        </li>
      );
    });

    return jsxItems;
  };

  return (
    <section className='todo-list mt-2'>
      <Card>
        <CardHeader>{data.title}</CardHeader>
        <CardBody>
          <ul className='list-group list-group-flush'>{showItems()}</ul>
        </CardBody>

        {showButton()}
      </Card>
    </section>
  );
}

export default TodoList;
