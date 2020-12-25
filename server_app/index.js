const { ApolloServer, gql } = require('apollo-server');

let students = [
    {
        "id": 1,
        "name": "Wardha",
        "email": "warda@gmail.com",
        "age": 21
    },
    {
        "id": 2,
        "name": "ALi",
        "email": "Ali@gmail.com",
        "age": 22
    },
    {
        "id": 3,
        "name": "Fatima",
        "email": "Ftaima@gmail.com",
        "age": 23
    }
]


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.


const resolvers = {
    Query: {
        students: () => students,
    },
    Mutation: {
        addStudent: (e, { input }) => {
            console.log(input);
            students.push(
                {
                    name: input.name,
                    age: input.age,
                    email: input.email,
                    id: input.id

                }
            )
            return {
                name: input.name,
                age: input.age,
                email: input.email,
                id: input.id
            }
        }
    }
};


const typeDefs = gql`
  
  type Student {
    id:Int
    name: String
    email: String
    age:Int
  }

  input StdInput {
    id:Int
    name: String
    email: String
    age:Int
  }

type Query {
    students: [Student]
  }

type Mutation{
    addStudent(input:StdInput):Student
}
`;

const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});



