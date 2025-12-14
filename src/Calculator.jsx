import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [results, setResults] = useState([]);

  const handleCalculate = () => {
    const number1 = Number(num1);
    const number2 = Number(num2);
    let result = 0;

    if (operation === "add") result = number1 + number2;
    if (operation === "subtract") result = number1 - number2;
    if (operation === "multiply") result = number1 * number2;
    if (operation === "division") result = number1 / number2;

    setResults([...results, result]);
  };

  const handleClear = () => {
    setResults([]);
  };

  return (
    <>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="division">Division</option>
      </select>

      <button onClick={handleCalculate}>
        Perform Action
      </button>

      <button onClick={handleClear} style={{ marginTop: "8px" }}>
        Clear Results
      </button>

      <div className="results">
        <h4>Results:</h4>
        {results.length === 0 ? (
          <p>No results yet</p>
        ) : (
          <ul>
            {results.map((res, index) => (
              <li key={index}>{res}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Calculator;
