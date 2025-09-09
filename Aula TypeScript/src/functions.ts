const sum = (x: number, y: number): string | number => {
  return (x + y).toString();
};

const value = sum(1, 2);

// Função do type Void (não retorna nada)
const log = (message: string): void => {
  console.log(message);
};
