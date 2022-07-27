const { data } = require('../../src/db/index');

module.exports = async function (context, req) {
    const { selectedId } = context.bindingData;
        // query to return all items
        const querySpec = {
            query: `SELECT * FROM c f WHERE f.id = "${selectedId}"`
        };
        console.log(selectedId)
        
        const { resources } = await data.container.items
        .query(querySpec)
        .fetchAll();

        context.res.json({
            data: resources
        });

    // console.log(resource);
}