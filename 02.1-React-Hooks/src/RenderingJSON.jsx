const RenderingJSON = () => {

  const People = [
      {name:"Vitthal", age:24},
      {name:"mahesh", age:24},
      {name:"Jaggu", age:25}
]

      const data = People.map((person, index)=>{
            return (
              <li key={index}>
                  <span>{index}</span> ||
                <span>{person.name}</span> ||
                <span>{person.age}</span> 
              </li>
            );
      })
  return <div>
      <h2>{data}</h2>
  </div>;
};

export default RenderingJSON;
