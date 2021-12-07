'use strict';

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.resolve(
  __dirname,
  '..',
  '..',
  'data',
  'slack-clone.sqlite',
);

const rawdb = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

const db = rawdb;

const persistentDataAccess = (collectionName) => {
  return {
    create: async (entry = {}) => {
      collection.push(entry);
      // try { // handle errors here or in logic?
      await persist(cached);
      return true;
      // } catch (err) {
      //   return err;
      // }
    },

    update: async (id = '', newEntry = {}) => {
      const found = collection.find((entry) => entry.id === id);
      if (found) {
        newEntry.id = id;
        const itemIndex = collection.indexOf(found);
        collection[itemIndex] = newEntry;
        await persist(cached);
      } else {
        return false;
      }
    },
    remove: async (id = '') => {
      const found = collection.find((entry) => entry.id === id);
      if (found) {
        const itemIndex = collection.indexOf(found);
        collection.splice(itemIndex, 1);
        await persist(cached);
      } else {
        return false;
      }
    },

    read: async (id = '') => {
      // const found = collection.find((entry) => entry && entry.id === id);
      // return found;
      return new Promise((resolve, reject) => {
        db.all(
          `SELECT * FROM ${collectionName} JOIN 'User' ON Message.userId=User.id`,
          (err, data) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              console.log('READ data here:');
              // console.log(data);
              resolve(data);
              // db.close();
            }
          },
        );
      });
    },

    find: async (key = '', value) => {
      // const found = collection.find((entry) =>
      //   util.isDeepStrictEqual(entry[key], value),
      // );
      // return found;
      return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM ${collectionName}`, (err, data) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log('FIND data here:');
            // console.log(data);
            resolve(data);
            // db.close();
          }
        });
      });
    },

    all: async () => {
      return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM ${collectionName}`, (err, data) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            // console.log('ALL data here:');
            // console.log(data);
            resolve(data);
            // db.close();
          }
        });
      });
    },

    //   }
    // });
    // console.log(db);
    // return db;
    // },
  };
};

module.exports = persistentDataAccess;
