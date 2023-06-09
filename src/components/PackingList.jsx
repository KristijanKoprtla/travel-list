import Item from "./Item";

const PackingList = ({ items, onDeleteItems }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onDeleteItems={onDeleteItems} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
