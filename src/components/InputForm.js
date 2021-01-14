import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Form, InputGroup } from 'react-bootstrap';
const InputForm = ({ handleAddItem }) => {
  const [itemInput, setItemInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem(itemInput);
  };

  return (
    <Form className="my-2" onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          value={itemInput}
          type="text"
          placeholder="Get some eggs..."
          onChange={({ target: { value } }) => setItemInput(value)}
        />
        <InputGroup.Append>
          <Button type="submit">Add</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

InputForm.propTypes = {
  handleAddItem: PropTypes.func,
};

export default InputForm;
