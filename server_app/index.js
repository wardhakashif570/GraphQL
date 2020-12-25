const { ApolloServer, gql } = require('apollo-server');

const students = [
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
        students: () =>{
        //write business logic here
        return students
        },
    },
};


const typeDefs = gql`
  
  type Student {
    id:Int
    name: String
    email: String
    age:Int
  }

type Query {
    students: [Student]
  }
`

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});



