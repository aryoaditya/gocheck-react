function Checklist({listItems, onDeleteItem, onToggleItem}) {
    return (
        <div className="list">
            <ul>
                {listItems.map((item) => (
                    <Item
                        item={item}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                        key={item.id}
                    />
                ))}
            </ul>
            
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