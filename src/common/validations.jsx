// File with commonly used validations

export const isEmail = (value) => {
  const regex = /^\s*[\w\-+]+(\.[\w\-+)]+)*@[\w\-+]+(\.[\w\-+]+)*\s*/;
  return regex.test(value);
}