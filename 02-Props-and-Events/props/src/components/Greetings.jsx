export function Greetings({firstName='vitthal', lastName='korvan'}) {
      // const firstName = props.firstName
      // const lastName= props.lastName
      //const {firstName,lastName}=props
  return (
    <>
      <h1>
        Hello, {firstName} {lastName}
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil nulla
        repellendus in et necessitatibus consequatur doloremque aut suscipit
        iste impedit?
      </p>
    </>
  );
}
