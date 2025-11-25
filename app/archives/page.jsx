"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [archives, setArchives] = useState([]); // ★アーカイブ用state

  useEffect(() => {
    const saved = localStorage.getItem("archives"); // ★アーカイブ読込
    if (saved) setArchives(JSON.parse(saved)); // ★追加
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Archives</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-neutral-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Quantity</th>
          </tr>
        </thead>

        <tbody>
          {archives.length === 0 && (
            <tr>
              <td colSpan={2} className="p-3 text-center">
                No archived items
              </td>
            </tr>
          )}

          {archives.map((item, index) => (
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
