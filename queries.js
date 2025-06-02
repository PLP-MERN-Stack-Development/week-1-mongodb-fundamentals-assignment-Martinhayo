use plp_bookstore
//inserting books into the database
db.books.insertMany([
    {title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Fiction',
        published_year: 1960,
        price: 12.99,
        in_stock: true,
        pages: 336,
        publisher: 'J. B. Lippincott & Co.'},
        {
            title: '1984',
            author: 'George Orwell',
            genre: 'Dystopian',
            published_year: 1949,
            price: 10.99,
            in_stock: true,
            pages: 328,
            publisher: 'Secker & Warburg'
          },
          {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            genre: 'Fiction',
            published_year: 1925,
            price: 9.99,
            in_stock: true,
            pages: 180,
            publisher: 'Charles Scribner\'s Sons'
          },
          {
            title: 'Brave New World',
            author: 'Aldous Huxley',
            genre: 'Dystopian',
            published_year: 1932,
            price: 11.50,
            in_stock: false,
            pages: 311,
            publisher: 'Chatto & Windus'
          },
          {
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            genre: 'Fantasy',
            published_year: 1937,
            price: 14.99,
            in_stock: true,
            pages: 310,
            publisher: 'George Allen & Unwin'
          },
          {
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            genre: 'Fiction',
            published_year: 1951,
            price: 8.99,
            in_stock: true,
            pages: 224,
            publisher: 'Little, Brown and Company'
          },
          {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            genre: 'Romance',
            published_year: 1813,
            price: 7.99,
            in_stock: true,
            pages: 432,
            publisher: 'T. Egerton, Whitehall'
          },
          {
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            genre: 'Fantasy',
            published_year: 1954,
            price: 19.99,
            in_stock: true,
            pages: 1178,
            publisher: 'Allen & Unwin'
          },
          {
            title: 'Animal Farm',
            author: 'George Orwell',
            genre: 'Political Satire',
            published_year: 1945,
            price: 8.50,
            in_stock: false,
            pages: 112,
            publisher: 'Secker & Warburg'
          },
          {
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            genre: 'Fiction',
            published_year: 1988,
            price: 10.99,
            in_stock: true,
            pages: 197,
            publisher: 'HarperOne'
          },
          {
            title: 'Moby Dick',
            author: 'Herman Melville',
            genre: 'Adventure',
            published_year: 1851,
            price: 12.50,
            in_stock: false,
            pages: 635,
            publisher: 'Harper & Brothers'
          },
          {
            title: 'Wuthering Heights',
            author: 'Emily Brontë',
            genre: 'Gothic Fiction',
            published_year: 1847,
            price: 9.99,
            in_stock: true,
            pages: 342,
            publisher: 'Thomas Cautley Newby'
          }
])
        
        
    //finding books in a specific genre
    db.books.find({genre:"Gothic Fiction"})   
    
    //finding books published after a certain year
    db.books.find({published_year:{$gt:1951}})

    //finding books by a specific author
    db.books.find({author:"Herper lee"})

    //updating the price of a specific book
db.books.updateOne(
    {title:'Wuthering Heights'},
    {$set:{price:11.90}}
)
//deleting one book by title
db.books.deleteOne({title:"Moby Dick"})
//books in stock and published after 2010
db.books.find({
    inStock: true,
    publicationYear: { $gt: 2010 }
  })
  
  //using projection
  db.books.find(
    {
      inStock: true,
      publicationYear: { $gt: 2010 }
    },
    {
      price:1,
      title: 1,
      author: 1
    }
  )

  //sorting books by price in descending order
  db.books.find().sort({price:-1})
  //sorting the books by price in ascending order
  db.books.find().sort({price:1})

  //average price of books by genre
  db.books.aggregate([
    {
      $group: {
        _id: "$genre",
        averagePrice: { $avg: "$price" }
      }
    }
  ])
//author with most books  
db.books.aggregate([
    {
      $group: {
        _id: "$author",
        totalBooks: { $sum: 1 }
      }

    }
  ])
  
  //creating index on title field
  db.books.createIndex({title:1})

  //creating a compound index on author and published year
  db.books.createIndex({ author: 1, published_year: 1 })

  