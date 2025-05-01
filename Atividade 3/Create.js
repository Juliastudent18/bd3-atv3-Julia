
/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'bd3_atv3';
const collection = 'bd3_atv3_produtos';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);
