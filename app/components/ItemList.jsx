 export default function ItemList({ items
 }) {
   return (
     <div>
      +      {items.map((item, index) => (
+        <div key={index}>
+          {item.name} - {item.quantity} 個
+        </div>
+      ))}
     </div>
   );
 }