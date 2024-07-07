const rootElement = document.getElementById('root')

// function HelloWorld(){
//   //type, props, children

//   return React.createElement("h1", {className:'heading'}, "Hello World of React!");
// }

function HelloWorld(){
      return <h1 className='heading'>Hello World!</h1>
}

ReactDOM.createRoot(rootElement).render(<HelloWorld/>) 