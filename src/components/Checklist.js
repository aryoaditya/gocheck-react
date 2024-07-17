import { useState } from "react";

function Checklist({listItems, onDeleteItem, onToggleItem, onClearItems}) {
    const [sortBy, setSortBy] = useState("input");

    function sortItems() {
        switch (sortBy) {
        case "title":
            return listItems.slice().sort((a, b) => a.title.localeCompare(b.title));
        case "status":
            return listItems.slice().sort((a, b) => Number(a.done) - Number(b.done));
        case "input":
        default:
            return listItems;
        }
    }

    const sortedItems = sortItems();

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        item={item}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                        key={item.id}
                    />
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Urutkan berdasarkan input</option>
                    <option value="title">Urutkan berdasarkan judul</option>
                    <option value="status">Urutkan berdasarkan status</option>
                </select>
                <button onClick={onClearItems}>Hapus</button>
            </div>
            
        </div>
    );
}

function Item({item, onDeleteItem, onToggleItem}) {
    return (
        <li key={item.id}>
            <input 
                type="checkbox"
                value={item.done}
                onChange={() => onToggleItem(item.id)}
            />
            <span style={{ textDecoration: item.done ? "line-through" : "" }}> {item.title} </span> 
            <button onClick={() => onDeleteItem(item.id)}> ❌ </button>
        </li>
    )
}

export default Checklist;