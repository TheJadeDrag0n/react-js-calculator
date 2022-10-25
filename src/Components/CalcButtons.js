<<<<<<< HEAD
function CalcButtons(props) {
    return (
    <div>
        <button onClick={() => props.updateCalculation("+")}>
          +
        </button>
        <button onClick={() => props.updateCalculation("-")}>
          -
        </button>
        <button onClick={() => props.updateCalculation("*")}>
          X
        </button>
        <button onClick={() => props.updateCalculation("/")}>
          /
        </button>
        <button onClick={() => props.updateCalculation("clear")}>
          Clear
        </button>
        <button onClick={() => props.updateCalculation("=")}>
          =
        </button>
      </div>
    );
}

=======
function CalcButtons(props) {
    return (
    <div>
        <button onClick={() => props.updateCalculation("+")}>
          +
        </button>
        <button onClick={() => props.updateCalculation("-")}>
          -
        </button>
        <button onClick={() => props.updateCalculation("*")}>
          X
        </button>
        <button onClick={() => props.updateCalculation("/")}>
          /
        </button>
        <button onClick={() => props.updateCalculation("clear")}>
          Clear
        </button>
        <button onClick={() => props.updateCalculation("=")}>
          =
        </button>
      </div>
    );
}

>>>>>>> f12148decc10ecf0ae70fb3abf2860a85e5962be
export default CalcButtons;