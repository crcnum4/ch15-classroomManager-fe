import axios from 'axios';
import React, {useState, useEffect, Fragment} from 'react';
import Button from '../common/Button'

const Test = () => {

  const [counter, setCounter] = useState(0);
  const [schools, setSchools] = useState({});

  const increaseCounter = () => {
    setCounter(counter+1);
  }

  useEffect(() => {
    const getSchools = async() => {
      const res = await axios.get("http://localhost:8080/api/schools/");
      console.log(res.data);
    }
    getSchools();
  }, [])

  return (
    <Fragment>
      <div>
        <h1>Test Component</h1>
        <p>{counter}</p>
        <Button onClick={increaseCounter}>
          Increase
        </Button>
      </div>
    </Fragment>
  )
}

export default Test;