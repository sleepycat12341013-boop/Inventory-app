// English comments only

"use client";
import { useState, useEffect } from "react";

export default function Page() {
  // items state
  const [items, setItems] = useState<{ name: string; quantity: number }[]>([]);

  // load items
  useEffect(() => {
    const saved = localStorage.getItem("items");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">在庫一覧</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-neutral-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Quantity</th>
          </tr>
        </thead>

        <tbody>
          {items.length === 0 && (
            <tr>
              <td colSpan={2} className="p-3 text-center">
                No items found
              </td>
            </tr>
          )}

          {items.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/*"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
*/

/*export default function Page() {
  return (
    <div>
      <h1 className="text-xl font-bold">在庫管理アプリ</h1>
    </div>
  );
}

function Title({ text }: { text: string }) {
  return <h1>{text}</h1>;
}
*/

/*export default function Home() {
  const [items, setItems] = useState<{ name: string; quantity: number }[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [search, setSearch] = useState("");

  // load saved items on mount
  useEffect(() => {
    const saved = localStorage.getItem("items");
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  // save items whenever they change
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (!name) return;

    const updatedItems = [...items, { name, quantity }];
    setItems(updatedItems);

    // save to localStorage
    localStorage.setItem("items", JSON.stringify(updatedItems));

    setName("");
    setQuantity(1);
  };

  const deleteItem = (indexToDelete: number) => {
    const updatedItems = items.filter((_, index) => index !== indexToDelete);
    setItems(updatedItems);

    // save after deletion
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalItemTypes = items.length;
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

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
            if (e.key === "Enter") addItem();
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

      <section className="my-6 border p-4 rounded">
        <h2 className="font-bold text-lg mb-2">Inventory Summary</h2>

        <p>Total Item Types: {totalItemTypes}</p>
        <p>Total Quantity: {totalQuantity}</p>

        <h3 className="mt-4 font-bold">Item Breakdown</h3>
        {items.map((item, index) => (
          <div key={index}>
            {item.name} + {item.quantity}
          </div>
        ))}
      </section>

      <ItemList items={filteredItems} onDelete={deleteItem} />

      <Link
        href="/summary"
        className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        View Summary
      </Link>
    </main>
  );
}

// item list component
function ItemList({
  items,
  onDelete,
}: {
  items: { name: string; quantity: number }[];
  onDelete: (index: number) => void;
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
              onClick={() => onDelete(index)}
            >
              削除
            </button>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
}
*/
