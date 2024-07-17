function Checklist({listItems, onDeleteItem}) {
    return (
        <div className="list">
            <ul>
                {listItems.map((item) => (
                    <Item item={item} onDeleteItem={onDeleteItem} key={item.id}/>
                ))}
            </ul>
            
        </div>
    );
}

function Item({item, onDeleteItem}) {
    return (
        <li key={item.id}>
            <input type="checkbox" />
            <span style={{ textDecoration: item.done ? "line-through" : "" }}> {item.title} </span> 
            <button onClick={() => onDeleteItem(item.id)}> ❌ </button>
        </li>
    )
}

export default Checklist;