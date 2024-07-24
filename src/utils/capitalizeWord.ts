const capitalizeWord = (str: string): string =>
  str.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase());

export default capitalizeWord;
