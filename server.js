const {ApolloServer}= require('apollo-server')
const mongoose = require('mongoose')


const typeDefs = require('./Graphql/typeDefs')
const resolvers = require('./Graphql/resolvers')
const PORT = process.env.PORT || 4000
const server =new ApolloServer({
    typeDefs,
    resolvers,
});
mongoose.connect(process.env.MONGOURI,{useNewURLParser:true})
    .then(()=>{
        return server.listen({port:PORT})
    }).then(res=>{
        console.log(`listening on port ${res.url}`)
    })
