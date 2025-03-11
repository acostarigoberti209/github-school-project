const generateRandomTSCode = () => {
  const code = `
    import React from 'react';
    
    interface Props {
      name: string;
      age: number;
    }
    
    const Person = (props: Props) => {
      return (
        <div>
          <h2>{props.name}</h2>
          <p>Age: {props.age}</p>
        </div>
      );
    };
    
    export default Person;
  `;
  
  return code;
};
