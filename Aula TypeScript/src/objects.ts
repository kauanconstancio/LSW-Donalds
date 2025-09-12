// Type
type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
};

const user: User = {
  firstName: "Kauan",
  age: 19,
  email: "kauanconstancio@gmail.com",
  password: "12345",
  orders: [{ productId: "1", price: 200 }],
};

user.password;

const printLog = (message: string) => {};

printLog(user.password!);

// Unions
type Author = {
  books: string[];
};

const author: Author & User = {
  age: 2,
  books: ["1"],
  email: "author@gmail.com",
  firstName: "Kauan",
  orders: [],
};

// Interfaces
interface UserInteface {
  readonly firstName: string;
  email: string;
}

const emailuser: UserInteface = {
  email: "kauan@gmail.com",
  firstName: "kauan",
};

interface AuthorInterface {
  books: string[];
}

const newAuthor: UserInteface & AuthorInterface = {
  email: "author@gmail.com",
  firstName: "author",
  books: [],
};

type Grade = number | string;
const Grade: Grade = 1;
