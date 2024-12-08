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
    let strikeThroughClass = '';
    if (data.completed) {
      strikeThroughClass = 'text-decoration-line-through';
    }

    const jsxItems = data.items.map(function (item) {
      return <li className={strikeThroughClass}>{item}</li>;
    });

    return jsxItems;
  };

  return (
    <section className='todo-list mt-2'>
      <Card>
        <CardHeader>{data.title}</CardHeader>
        <CardBody>
          <ul>{showItems()}</ul>
        </CardBody>

        {showButton()}
      </Card>
    </section>
  );
}

export default TodoList;
