function EventObjects (){
    function Button({ onClick, children }) {
        return (
          <button onClick={e => {
            e.stopPropagation();
            onClick();
          }}>
            {children}
          </button>
        );
      }

      const codeSnippet =`
    <div className="Toolbar" onClick={() => {
        alert('You clicked on the toolbar!');
        }}>
        <Button onClick={() => alert('Playing!')}>
            Play Movie
        </Button>
        <Button onClick={() => alert('Uploading!')}>
            Upload Image
        </Button>
    </div>
      `;
    
      const codeSnippet2 = `
    <form onSubmit={e => {
        alert('Submitting!');
        }}>
        <input />
        <button>Send</button>
    </form>
      `;
        const codeSnippet3 = `
    <form onSubmit={e => {
        alert('Submitting!');
        e.preventDefault();
        }}>
        <input />
        <button>Send</button>
    </form>
        `
    return (
        <div>
            <div>
                <h2>Event Objects</h2>
                <div>
                    <h3>Stop Propagation</h3>
                    <div>
                        <pre>
                            <code>
                                {codeSnippet}
                            </code>
                        </pre>
                    </div>
                    <div className="Toolbar" onClick={() => {
                        alert('You clicked on the toolbar!');
                        }}>
                        <Button onClick={() => alert('Playing!')}>
                            Play Movie
                        </Button>
                        <Button onClick={() => alert('Uploading!')}>
                            Upload Image
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                <h3>Prevent Default</h3>
                <div>
                    <h4>WITHOUT</h4>
                    <div>
                        <pre>
                            <code>
                                {codeSnippet2}
                            </code>
                        </pre>
                    </div>
                    <form onSubmit={e => {
                        alert('Submitting!');
                        }}>
                        <input />
                        <button>Send</button>
                    </form>
                </div>
                <div>
                    <h4>WITH</h4>
                    <pre>
                        <code>
                            {codeSnippet3}
                        </code>
                    </pre>
                    <form onSubmit={e => {
                        alert('Submitting!');
                        e.preventDefault();
                        }}>
                        <input />
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EventObjects;