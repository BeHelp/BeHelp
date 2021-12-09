const objectId = require('objectid');

const persistentDataAccess = require('./persistent');

const { create, update, remove, read, find } = persistentDataAccess('users');

(async () => {
  const id = objectId().toString();

  await create({ id });
  console.log('created: ', await read(id));

  await update(id, { he: 'llo' });
  console.log('updated: ', await read(id));

  console.log('finded: ', await find('he', 'llo'));

  await remove(id);
  console.log('removed: ', await read(id));
})();
