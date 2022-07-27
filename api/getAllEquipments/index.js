const { data } = require('../../src/db/index');

module.exports = async function (context, req) {
    // query to return all items
    const querySpec = {
        query: "SELECT * from c"
    };
    
    const { resources } = await data.container.items
    .query(querySpec)
    .fetchAll();
    context.res.json({
        data: resources
    });
}