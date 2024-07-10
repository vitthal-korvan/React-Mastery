function App() {
  // function Clicked(e){
  //   //console.log('clicked!');
  //   //console.log(e.target);//<button> Click Me </button>
  //   e.target.textContent='you clicked me!'
  // }

  function Clicked2(firstname, lastname){
      console.log(firstname, lastname);
  }

  //wrapper function
  // function wrapperFunction(){
  //   Clicked2('vitthal','korvan')
  // }

  return (
    <>
      <h1>Hello!</h1>
      {/* <button onClick={Clicked}>Click Me</button> */}
      <button onClick={(e)=>{
        console.log(e.target);
        e.target.textContent = "you clicked me!";
        Clicked2("vitthal", "korvan");
      }}>Click Me</button>
    </>
  );
}

export default App
