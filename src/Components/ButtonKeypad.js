<<<<<<< HEAD
function ButtonKeypad(props) {
    let buttons = [];
    for (let i = 0; i <= 9; i++) {
        buttons.push(
            <button 
                onClick={() => props.updateCalculation(i)} 
                key={i}
            >
                {i}
            </button>
        );
    }
    return (
        <div>
            {buttons}
            <button onClick={() => props.updateCalculation(".")}>.</button>
            <button onClick={() => props.updateCalculation("del")}>Del</button>
        </div>
    );
}
=======
function ButtonKeypad(props) {
    let buttons = [];
    for (let i = 0; i <= 9; i++) {
        buttons.push(
            <button 
                onClick={() => props.updateCalculation(i)} 
                key={i}
            >
                {i}
            </button>
        );
    }
    return (
        <div>
            {buttons}
            <button onClick={() => props.updateCalculation(".")}>.</button>
            <button onClick={() => props.updateCalculation("del")}>Del</button>
        </div>
    );
}
>>>>>>> f12148decc10ecf0ae70fb3abf2860a85e5962be
export default ButtonKeypad;