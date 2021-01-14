import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormCheck, ListGroup } from 'react-bootstrap';

const ItemList = ({ list, handleToggleItem, handleRemoveItem }) => {
  const checkedStyles = {
    container: {
      backgroundColor: '#8b7c81',
    },
    text: {
      textDecoration: 'line-through',
    },
  };

  const nonCheckedStyles = {
    container: {
      backgroundColor: '#a3989c',
    },
    text: {
      textDecoration: 'none',
    },
  };

  const listItemComponents = list.map((i) => (
    <ListGroup.Item
      className="d-flex"
      key={i.id}
      style={
        i.isChecked
          ? { ...checkedStyles.container }
          : nonCheckedStyles.container
      }
    >
      <FormCheck
        inline
        checked={i.isChecked}
        onChange={({ target: { checked } }) => handleToggleItem(i.id, checked)}
      />
      <span
        style={i.isChecked ? { ...checkedStyles.text } : nonCheckedStyles.text}
        className="flex-grow-1 p-2"
      >
        {i.body}
      </span>
      <Button variant="danger" onClick={() => handleRemoveItem(i.id)}>
        X
      </Button>
    </ListGroup.Item>
  ));

  return list.length > 0 && <ListGroup>{listItemComponents}</ListGroup>;
};

ItemList.propTypes = {
  list: PropTypes.array,
};

export default ItemList;
