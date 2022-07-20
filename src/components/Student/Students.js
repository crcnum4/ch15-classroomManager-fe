import axios from 'axios';
import React, { Fragment, useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Container from '../common/Container';
import Student from './Student';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading ] = useState(true);
  const [auth] = useContext(AuthContext);



  useEffect(() => {
    const getStudents = async () => {
      try {

        const studentRes = await axios.get(`http://localhost:8080/api/students/${auth.id}`)

        const res = await axios.get(`http://localhost:8080/api/students/school/${studentRes.data.school.id}`)
        setStudents(res.data);
        setLoading(false);

      } catch (error) {
        console.error(error.response ? error.response.data : error.message)
      }
    }
    getStudents();
  }, [])

  const displayStudents = () => { 
    return students.map(student => {
      return (
        <Student student={student} />
      )
    })
  }

  return (
    <Container>
      <h1>Students</h1>
      {loading ? (<p>Loading...</p>) :
        displayStudents()
      }
    </Container>
  )
}

export default Students;