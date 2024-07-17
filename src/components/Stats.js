function Stats({listItems}) {
    if (listItems.length === 0) {
        return (
            <footer className="stats">
            <span>📝 Yuk mulai bikin catatan!</span>
            </footer>
        );
    }

    const totalItems = listItems.length;
    const doneItems = listItems.filter((item) => item.done).length;
    const percentage = Math.round((doneItems / totalItems) * 100);

    return (
        <footer className="stats">
            <span>
                {percentage === 100
                ? "✅ Kamu sudah melakukannya semua"
                : `🗒️ Kamu punya ${totalItems} catatan dan baru ${doneItems} yg dichecklist (${percentage}%)`}
            </span>
        </footer>
    );
}

export default Stats;