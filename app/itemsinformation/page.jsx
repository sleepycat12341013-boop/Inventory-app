"use client";

import { useState, useEffect } from "react";

export default function Page() {
  // items state
  const [items, setItems] = useState([]);

  // ★追加：archives（アーカイブ）state
  const [archives, setArchives] = useState([]); // ★追加

  useEffect(() => {
    const savedItems = localStorage.getItem("items");
    const savedArchives = localStorage.getItem("archives"); // ★追加

    if (savedItems) setItems(JSON.parse(savedItems));

    // ★追加：アーカイブをlocalStorageから読込
    if (savedArchives) setArchives(JSON.parse(savedArchives)); // ★追加
  }, []);

  // ★追加：削除してアーカイブに追加する処理
  const handleDelete = (index) => {
    // ★追加
    const itemToArchive = items[index]; // ★追加

    const updatedItems = items.filter((_, i) => i !== index); // ★追加
    const updatedArchives = [...archives, itemToArchive]; // ★追加

    setItems(updatedItems); // ★追加
    setArchives(updatedArchives); // ★追加

    localStorage.setItem("items", JSON.stringify(updatedItems)); // ★追加
    localStorage.setItem("archives", JSON.stringify(updatedArchives)); // ★追加
  }; // ★追加ここまで
  // load items
  useEffect(() => {
    const saved = localStorage.getItem("items");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Inventory List</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-neutral-200">
            <th className="border p-2">Tire Size</th>
            <th className="border p-2">Manufacturer</th>
            <th className="border p-2">Condition</th>
            <th className="border p-2">Season</th>
            <th className="border p-2">Floor-Number</th>
            <th className="border p-2">Note</th>
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
              <td className="border p-2">{item.quantity}</td>
              <td className="border p-2">{item.quantity}</td>
              <td className="border p-2">{item.quantity}</td>
              {/* ★追加：Delete ボタン */}
              <td className="border p-2">
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => handleDelete(index)} // ★追加
                >
                  Delete
                </button>
              </td>
              {/* ★追加ここまで */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
