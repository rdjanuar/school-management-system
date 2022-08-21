const hitungOngkir = (jarak) => {
  return jarak <= 2 ? 5000 : 5000 + (jarak - 2) * 3000;
};

console.log(hitungOngkir(100));
