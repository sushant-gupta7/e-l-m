const { data } = require('../../src/db/index');

module.exports = async function (context, req) {
    const { id, data } = context.bindingData;
    const { resource } = await container.item(id, id).replace(data);
      
    context.res.json({
        data: resource
    });
}