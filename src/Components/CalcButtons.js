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

export default CalcButtons;