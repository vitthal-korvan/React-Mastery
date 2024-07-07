import './Hello.css'
function Hello() {
      let name = "vitthal";
  return (
    <>
      <div className='container'>
        <h1>Hello, {name} </h1>
        <p>How are you?</p>
      </div>
    </>
  );
}

export default Hello;