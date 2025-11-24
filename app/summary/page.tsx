"use client";

import { useEffect, useState } from "react";

// 🔴 CHANGE: summary page added
export default function SummaryPage() {
  const [items, setItems] = useState<{ name: string; quantity: number }[]>([]);

  // 🔴 CHANGE: load from localStorage (same behavior as main page)
  useEffect(() => {
    const saved = localStorage.getItem("items");
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  // 🔴 CHANGE: calculate totals
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalItems = items.length;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Inventory Summary</h1>

      {/* 🔴 CHANGE: Summary table */}
      <div className="border rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold mb-3">Total Overview</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b bg-gray-100">
              <th className="p-2">Metric</th>
              <th className="p-2">Value</th>
            </tr>
          </thead>
          // ここを変える
          <tbody>
            <tr className="border-b">
              <td className="p-2">アイテムの種類数</td>
              <td className="p-2">{totalItems}</td>
            </tr>
            //ここまで
            <tr>
              <td className="p-2">全アイテムの合計数量</td>
              <td className="p-2">{totalQuantity}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 🔴 CHANGE: Item breakdown table */}
      <div className="border rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold mb-3">Item Breakdown</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b bg-gray-100">
              <th className="p-2">Item Name</th>
              <th className="p-2">Quantity</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
