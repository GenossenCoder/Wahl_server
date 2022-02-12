const {gql}=require('apollo-server')
const typeDefs= gql`
    type Poll{
    title: String!
    text: String!
    competitors:[String]!
    createdAt:String!
    deadline:String!
    votes:[voters]!
    }
    type voters{
        voters:[String]
    }
    type Query{
        events: [Poll]
    }
`
module.exports = typeDefs