function BasicEvent (){
    function handleClick() {
        alert("You clicked me")
      }

      const codeSnippet = `
function MyComponent() {
  function handleClick() {
    alert('Button clicked!');
  }

  return <button onClick={handleClick}>Click Me</button>;
}
`;
    const codeSnippet2 = `
<button onClick={function handleClick() {
    alert('You clicked me!');
}}>

Or, more concisely, using an arrow function:

<button onClick={() => {
    alert('You clicked me!');
}}>
    `;

    const handleParagrapgh = `You defined the handleClick function and then passed it as a prop to <button>.  handleClick is an event handler. Event handler functions:

    Are usually defined inside your components.
    Have names that start with handle, followed by the name of the event.
    By convention, it is common to name event handlers as handle followed by the event name. You’ll often see onClick={handleClick}, onMouseEnter={handleMouseEnter}, and so on.`;

    return (
        <div>
            <h1>Handling Events</h1>
            <div>
                <h2>Basic Example</h2>
                <pre>
                    <code>
                       {codeSnippet}
                    </code>
                </pre>
                <button onClick={handleClick}>Click Me</button>
                <div>
                    <p>Instead of referencing a function directly, you can use inline functions. However, this approach is generally discouraged in large components as it can impact performance:</p>
                    <pre>
                        <code>
                            {codeSnippet2}
                        </code>
                    </pre>
                </div>
                <div>
                    <p>
                        {handleParagrapgh}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BasicEvent;