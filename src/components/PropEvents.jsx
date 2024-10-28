function PropEvents (){
    function handleButtonClick() {
        alert("Button clicked from Parent!");
      }
    
      const codeSnippet = `
    function handleButtonClick() {
        alert("Button clicked from Parent!");
      }
    
    return (
        <div>
            <ChildComponent onButtonClick={handleButtonClick} />
        </div>
    )
}
    function ChildComponent({ onButtonClick }) {
        return <button onClick={onButtonClick}>Click Me</button>;
    }`;
    
    return (
        <div>
            <h2>Passing Event Handlers as Props</h2>
            <pre>
                <code>{codeSnippet}</code>
            </pre>
            <ChildComponent onButtonClick={handleButtonClick} />
        </div>
    )
}
    function ChildComponent({ onButtonClick }) {
        return <button onClick={onButtonClick}>Click Me</button>;
    }

export default PropEvents;