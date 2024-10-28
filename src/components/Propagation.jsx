function Propagation (){
    const codeSnippet =`
    <div className="Toolbar" onClick={() => {
        alert('You clicked on the toolbar!');
        }}>
        <button onClick={() => alert('Playing!')}>
            Play Movie
        </button>
        <button onClick={() => alert('Uploading!')}>
            Upload Image
        </button>
    </div>
    `
    return (
        <div>
            <h2>Propagation</h2>
            <div>
                <pre>
                    <code>{codeSnippet}</code>
                </pre>
            </div>
            <div className="Toolbar" onClick={() => {
                alert('You clicked on the toolbar!');
                }}>
                <button onClick={() => alert('Playing!')}>
                    Play Movie
                </button>
                <button onClick={() => alert('Uploading!')}>
                    Upload Image
                </button>
            </div>
        </div>
    )
}

export default Propagation;