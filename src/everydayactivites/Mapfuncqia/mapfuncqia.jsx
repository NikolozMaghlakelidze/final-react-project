import { useState } from "react";
import PropTypes from "prop-types";
import './mapfuncqia.css'

const Mapfunqcia = ({ items, washla }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => washla(index)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

const EmatebaItemi = () => {
  const [items, setItems] = useState(['item 1', 'item 2', 'item 3']);

  const damateba = () => {
    const damatebuliItem = `item ${items.length + 1}`;
    setItems([...items, damatebuliItem]);
  };

  const washla = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <button className="item_btn" onClick={damateba}>add item</button>
      <Mapfunqcia items={items} washla={washla} />
    </div>
  );
};

Mapfunqcia.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  washla: PropTypes.func.isRequired,
};

export default EmatebaItemi;