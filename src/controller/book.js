const { Book, Category, User, AuthorBook } = require("../../models");

// get all book data
// belum bisa nampilin info category dan author di tengah secara lengkap
exports.getBooks = async (req, res) => {
  try {
    const bookData = await Book.findAll({
      include: {
        model: Category,
        as: "category",
        through: {
          model: AuthorBook,
          as: "info",
        },
      },
      include: {
        model: User,
        as: "authors",
        through: {
          model: AuthorBook,
          as: "info",
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      message: "Your data has been loaded successfully",
      data: {
        books: bookData,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "SERVER ERROR",
      },
    });
  }
};

// function to get specific data from books table
// belum bisa nampilin info category dan author di tengah secara lengkap
exports.getOneBook = async (req, res) => {
  try {
    const { id } = req.params;
    const detailBook = await Book.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      message: "Your request is ready",
      data: {
        book: detailBook,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "SERVER ERROR",
      },
    });
  }
};

// function to add data to categories table
// belum bisa nambahin id user sebagai author, kan belum tentu authornya punya akun di sini
exports.createBook = async (req, res) => {
  try {
    const bookCreated = await Book.create(req.body);
    res.send({
      message: "New book entry has been created successfully",
      data: {
        book: bookCreated,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "SERVER ERROR",
      },
    });
  }
};

// function to edit a book
exports.editBook = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    // check existence
    const dataBook = await Book.findOne({
      where: {
        id,
      },
    });
    // if data exist
    if (dataBook) {
      // update data
      await Book.update(
        {
          title: body.title,
          publication: body.publication,
          categoryId: body.categoryId,
          pages: body.pages,
          ISBN: body.ISBN,
          aboutBook: body.aboutBook,
          file: body.file,
          status: body.status,
        },
        {
          where: {
            id,
          },
        }
      );
      // get the new data, input to a temporary variable
      const editedBook = await Book.findOne({
        where: {
          id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      // send response
      res.send({
        message: "A book has been edited successfully",
        data: {
          book: editedBook,
        },
      });
    }

    // if data isn't exist
    else {
      res.status(404).send({
        error: {
          message: "Book Not Found",
        },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "SERVER ERROR",
      },
    });
  }
};

// function to delete a book
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const dataBook = await Book.findOne({
      where: {
        id,
      },
    });
    if (dataBook) {
      const deletedBook = await Book.destroy({
        where: {
          id,
        },
      });
      res.send({
        message: `Data with id=${id} has been deleted`,
        data: {
          id: deletedBook,
        },
      });
    } else {
      res.status(400).send({
        error: {
          message: `There is no data with id id=${id}`,
        },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "SERVER ERROR",
      },
    });
  }
};
