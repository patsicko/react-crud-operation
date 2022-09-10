import React,{useState} from 'react';
import List from './List';
// import LIST from  "./Data"

const LIST = [
    {
      id: '1',
      title: 'The Road to React',
    },
    {
      id: '2',
      title: 'The Road to GraphQL',
    }
  ];
  
  const Conditional = () => {
    const [list, setList] = useState([]);
  
    const handleFetch = () => {
      setList(LIST);
    };
  
    if (!list.length) {
      return (
        <div>
          <button type="button" onClick={handleFetch}>
            Fetch
          </button>
        </div>
      );
    }
  
    return (
      <div>
        <List list={list} />
      </div>
    );
  };
  


  
 
export default Conditional