import React, { useState } from 'react';
import Button from './Button';
import Form from './Form';
import Input from './Input';

const AddAnswer = () => {
  const [data, setData] = useState({});
  const changeHandler = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    fetch('https://quiz-app-server-q68p.onrender.com/api/answers/add-answer', {
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <Form className="form" method="PUT" onSubmit={submitHandler}>
      <Input
        type="text"
        placeholder="Enter Answer title"
        name="title"
        onChange={(e) => changeHandler(e)}
      />
      <Input
        type="text"
        name="option1"
        placeholder="Enter answer option"
        onChange={(e) => changeHandler(e)}
      />
      <Input
        type="text"
        name="option2"
        placeholder="Enter answer option"
        onChange={(e) => changeHandler(e)}
      />
      <Input
        type="text"
        name="option3"
        placeholder="Enter answer option"
        onChange={(e) => changeHandler(e)}
      />
      <Input
        type="text"
        name="option4"
        placeholder="Enter answer option"
        onChange={(e) => changeHandler(e)}
      />
      <Button type="submit" text="Submit" />
    </Form>
  );
};

export default AddAnswer;
