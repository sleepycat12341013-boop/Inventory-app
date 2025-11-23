"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [items, setItems] = useState<{ name: string; quantity: number }[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const addItem = () => {
    if (!name) return;

    setItems([...items, { name, quantity }]);

    setName("");
    setQuantity(1);
  };

  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteItem = (indexToDelete: number) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Inventory App</h1>

      <div className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 w-full mt-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="text"
          placeholder="Purcherse Name"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addItem(); // ← Enterで追加
          }}
        />

        <input
          type="number"
          min={1}
          className="border p-2 w-full"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <button
          onClick={addItem}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          追加
        </button>
      </div>

      {/* 商品リスト */}
      <ItemList items={filteredItems} onDelete={deleteItem} />
    </main>
  );
}

// -----------------------------------------
// ItemList コンポーネント（修正済み）
// -----------------------------------------
function ItemList({
  items,
  onDelete,
}: {
  items: { name: string; quantity: number }[];
  onDelete: (index: number) => void; // ← indexを受け取る
}) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="flex justify-between items-center border p-3 rounded"
        >
          <span>{item.name}</span>

          <div className="flex items-center gap-3">
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
              {item.quantity} 個
            </span>

            <button
              className="text-red-500 hover:underline"
              onClick={() => onDelete(index)} // ← indexを渡す
            >
              削除
            </button>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
