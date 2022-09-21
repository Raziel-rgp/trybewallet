const fetchCurrencies = async () => {
  const linkbrabo = 'https://economia.awesomeapi.com.br/json/all';
  const searchProduct = await fetch(linkbrabo);
  const slaOq = await searchProduct.json();
  return slaOq;
};

export default fetchCurrencies;
