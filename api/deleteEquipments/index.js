const { data } = require('../../src/db/index');

module.exports = async function (context, req) {
    const { id } = context.bindingData;
    const { resource } = await data.container.item(id, id).delete();
    context.res.json({
        data: resource
    });
}