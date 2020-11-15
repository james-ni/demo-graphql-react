const graphql = require('graphql');
const _ = require('lodash');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;


const users = [
    {id: '23', firstName: 'Bill', age: 20},
    {id: '47', firstName: 'James', age: 21}
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLString},
        firstName: {type: GraphQLString},
        age: {type: GraphQLInt}
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {firstName: {type: graphql.GraphQLString}},
            resolve(parentValue, args){
                return _.find(users, {firstName: args.firstName})
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
