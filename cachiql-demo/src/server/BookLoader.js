/*eslint-disable */
const { Cachiql } = require('./cachiql');

const Book = require('./models/book');

// const formatResult = (authors, ids) => {
//   const authorMap = {};

//   authors.forEach(author => {
//     authorMap[author.id] = author;
//   });

//   return ids.map(id => authorMap[id]);
// }

const batchBooks = async (ids) => {
  try {
    const books = await Book.find({ '_id': { $in: ids } });
    //return formatResult(authors, ids);
    return books;
  } catch (err) {
    throw new Error('There was an error getting the Books');
  }
};

module.exports = () => new Cachiql(batchBooks);