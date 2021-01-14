import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormCheck, ListGroup } from 'react-bootstrap';

const ItemList = ({ list, handleToggleItem, handleRemoveItem }) => {
  console.log(list);
  const listItemComponents = list.map((i) => (
    <ListGroup.Item className="d-flex" key={i.id}>
      <FormCheck
        inline
        checked={i.isChecked}
        onChange={({ target: { checked } }) => handleToggleItem(i.id, checked)}
      />
      <span className="flex-grow-1 p-2">{i.body}</span>
      <Button variant="danger" onClick={() => handleRemoveItem(i.id)}>
        🗑️
      </Button>
    </ListGroup.Item>
  ));
  return list.length && <ListGroup>{listItemComponents}</ListGroup>;
};

ItemList.propTypes = {
  list: PropTypes.array,
};

export default ItemList;
