import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormCheck, ListGroup } from 'react-bootstrap';

const ItemList = ({ list }) => {
  const listItemComponents = list.map((i) => (
    <ListGroup.Item className="d-flex" key={i.id}>
      <FormCheck inline />
      <span className="flex-grow-1 p-2">{i.body}</span>
      <Button variant="danger">🗑️</Button>
    </ListGroup.Item>
  ));
  return list.length && <ListGroup>{listItemComponents}</ListGroup>;
};

ItemList.propTypes = {
  list: PropTypes.array,
};

export default ItemList;
