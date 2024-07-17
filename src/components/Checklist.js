function Checklist({listItems}) {
    return (
        <div className="list">
            <ul>
                {listItems.map((item) => (
                    <Item item={item} key={item.id}/>
                ))}
            </ul>
            
        </div>
    );
}

function Item({item}) {
    return (
        <li key={item.id}>
            <input type="checkbox" />
            <span style={{ textDecoration: item.done ? "line-through" : "" }}> {item.title} </span> 
            <button> ❌ </button>
        </li>
    )
}

export default Checklist;