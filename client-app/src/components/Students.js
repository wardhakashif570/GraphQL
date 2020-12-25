import './App.css';
import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

const ADD_Student = gql`


  mutation AddStudent($id: Int!,$name: String!,$age: Int!,$email: String!) {
    addStudent(
      input:{id:$id,name:$name,email:$email,age:$age}
    ) {
      id
      name
      
    }
  }
`;


const GET_STUDENTS = gql`
  query GetAllStudent {
     students{
      id,   
      name,
      email,
      age
    }
  }
`;

function Students() {

    const { loading, error, data } = useQuery(GET_STUDENTS);

    const [addstd] = useMutation(ADD_Student);
    if (loading)
        return <h1>Loading....</h1>

    if (error) {
        return <h1>Error</h1>
    }
    const { students } = data;
    return (

        <div>
            <h2>Student List</h2>
            <table border="1" width="500px">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(std => {
                            return (


                                <tr key={std.id}>
                                    <td>{std.name}</td>
                                    <td>{std.age}</td>
                                    <td>{std.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


            <button onClick={() =>
                addstd({
                    variables:
                        { id: 6, name: "Mustafa", age: 14, email: "Musta@gmail.com" }
                })}>Add Student</button>
        </div>

    );
}

export default Students;
