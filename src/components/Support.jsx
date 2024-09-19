import {useState} from 'react';

export default () => {
  const [count, setCount]=useState(0)
  return (
    <button className="outline" onClick={() => setCount(count + 1)}>

      {count === 0 ? "I want you to come over" : `Come over ${count} times`}
    
    
    </button>
  )
}



