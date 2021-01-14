import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
const InputForm = () => {
  return (
    <Form>
      <InputGroup>
        <Form.Control type="text" placeholder="Get some eggs..." />

        <InputGroup.Append>
          <Button>Add</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default InputForm;
