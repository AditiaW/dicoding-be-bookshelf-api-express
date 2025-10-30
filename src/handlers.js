import { nanoid } from "nanoid";
import { books } from "./books.js";

// Handler: Tambah Buku
export const addBookHandler = (req, res) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = req.body;

  if (!name) {
    return res.status(400).json({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku",
    });
  }

  if (readPage > pageCount) {
    return res.status(400).json({
      status: "fail",
      message:
        "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });
  }

  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);

  return res.status(201).json({
    status: "success",
    message: "Buku berhasil ditambahkan",
    data: { bookId: id },
  });
};

// Handler: Ambil Semua Buku
export const getAllBooksHandler = (req, res) => {
  const { name, reading, finished } = req.query;

  let filteredBooks = books;

  // Opsional: filter by name
  if (name) {
    filteredBooks = filteredBooks.filter((b) =>
      b.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Opsional: filter by reading
  if (reading !== undefined) {
    filteredBooks = filteredBooks.filter(
      (b) => b.reading === (reading === "1")
    );
  }

  // Opsional: filter by finished
  if (finished !== undefined) {
    filteredBooks = filteredBooks.filter(
      (b) => b.finished === (finished === "1")
    );
  }

  const responseBooks = filteredBooks.map(({ id, name, publisher }) => ({
    id,
    name,
    publisher,
  }));

  return res.status(200).json({
    status: "success",
    data: { books: responseBooks },
  });
};

// Handler: Ambil Detail Buku
export const getBookByIdHandler = (req, res) => {
  const { bookId } = req.params;
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({
      status: "fail",
      message: "Buku tidak ditemukan",
    });
  }

  return res.status(200).json({
    status: "success",
    data: { book },
  });
};

// Handler: Update Buku
export const updateBookHandler = (req, res) => {
  const { bookId } = req.params;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = req.body;

  const index = books.findIndex((b) => b.id === bookId);

  if (index === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Gagal memperbarui buku. Id tidak ditemukan",
    });
  }

  if (!name) {
    return res.status(400).json({
      status: "fail",
      message: "Gagal memperbarui buku. Mohon isi nama buku",
    });
  }

  if (readPage > pageCount) {
    return res.status(400).json({
      status: "fail",
      message:
        "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount",
    });
  }

  const updatedAt = new Date().toISOString();
  const finished = pageCount === readPage;

  books[index] = {
    ...books[index],
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    updatedAt,
  };

  return res.status(200).json({
    status: "success",
    message: "Buku berhasil diperbarui",
  });
};

// Handler: Hapus Buku
export const deleteBookHandler = (req, res) => {
  const { bookId } = req.params;
  const index = books.findIndex((b) => b.id === bookId);

  if (index === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Buku gagal dihapus. Id tidak ditemukan",
    });
  }

  books.splice(index, 1);

  return res.status(200).json({
    status: "success",
    message: "Buku berhasil dihapus",
  });
};
