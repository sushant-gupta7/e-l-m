const { data } = require('../../src/db/index');

module.exports = async function (context,req) {
    
    const { value } = context.bindingData;
    console.log(value)
    const { resource } = await data.container.items.create(value);
    console.log(resource);
    context.res = {
        body: resource
    }
}