import style from './Hello.module.css'
function Hello() {
      let name = "vitthal";
  return (
    <>
      <div className={style.container}>
        <h1>Hello, {name} </h1>
        <p>How are you?</p>
      </div>
    </>
  );
}

export default Hello;