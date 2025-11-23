export default function ItemList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          {item.name} - {item.stock} 個
        </div>
      ))}
    </div>
  );
}
