import axios from 'axios';
import React, {useState, useContext} from 'react';
import Container from '../common/Container';
import { AuthContext } from '../Providers/AuthProvider';
import PayFeesForm from './PayFeeForm';

const PayFees = () => {

  const [query, setQuery] = useState({
    amount: ""
  });
  const [submitting, setSubmitting] = useState(false)
  const [auth] = useContext(AuthContext)
  const [message, setMessage] = useState("");

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value
    })
  }

  const onSubmit = async() => {
    setMessage("");
    setSubmitting(true);
    const data = query;

    try {
      const res = await axios.post(
        `http://localhost:8080/api/students/${auth.id}/payFees`,
        data
      )

      setMessage(res.data.message);

    } catch (error) {
      setMessage("An error occured");
      console.error(error.response ? error.response.data : error.message)
    }
    setQuery({amount: ""})
    setSubmitting(false);
  }

  const displayMessage = () => {
    if (message) {
      return (
        <p>{message}</p>
      )
    }
    return null
  }

  return (
    <Container>
      <h1>PayFees</h1>
      {displayMessage()}
      <PayFeesForm query={query} updateForm={updateForm} onSubmit={onSubmit} submitting={submitting}/>
    </Container>
  )
}

export default PayFees