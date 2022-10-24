function Inputs(props) {
    return (
        <div>
            <input
            type="number"
            value={Number(props.first)}
            onChange={(event) => props.setFirst(event.target.value)}
            />
            <input
            type="number"
            value={Number(props.second)}
            onChange={(event) => props.setSecond(event.target.value)}
            />
            =
            <input type="number" defaultValue={props.answer} />
        </div>
    );
}
export default Inputs;