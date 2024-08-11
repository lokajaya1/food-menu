const foodMenu = [
  {
    nama: "Mie Goreng Spesial",
    deskripsi:
      "Mie goreng lezat dengan tambahan telur mata sapi, sayuran segar, dan rempah-rempah lainnya. Disajikan dengan kecap manis dan sedikit sambal, cocok untuk makan siang atau makan malam.",
    harga: 25000,
    foto: "food/mie goreng spesial.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Mie Rebus",
    deskripsi:
      "Mie rebus dengan kuah gurih dan tambahan telur serta sawi hijau. Cocok untuk menghangatkan perut di malam hari.",
    harga: 15000,
    foto: "food/mie rebus.jpeg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Nasi Goreng",
    deskripsi:
      "Nasi goreng klasik yang disajikan dengan irisan ayam, telur, dan sedikit acar. Pilihan sempurna untuk makan siang yang cepat dan enak.",
    harga: 20000,
    foto: "food/nasi goreng.jpeg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Omelet",
    deskripsi:
      "Omelet telur yang disajikan dengan keju dan sayuran segar, pilihan yang ringan dan sehat untuk sarapan atau makan siang.",
    harga: 10000,
    foto: "food/omelet.jpeg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Telur Dadar",
    deskripsi:
      "Telur dadar sederhana namun lezat, disajikan dengan sedikit garam dan lada. Cocok sebagai lauk tambahan.",
    harga: 8000,
    foto: "food/telur dadar spesial.jpeg",
    stok: Math.random() >= 0.5 ? true : false,
  },
];

export default foodMenu;
