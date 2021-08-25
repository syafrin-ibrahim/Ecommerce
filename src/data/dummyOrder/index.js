import {
    Milan1, Milan2, BundesLiga, SeriA,PremierLeague,
    Liverpool1, Liverpool2,
    Dortmund1, Dortmund2, Chelsea1, Chelsea2, 
  } from '../../assets';
  
  export const dummyOrder = [ 
    {
      id: 1,
      tanggalPemesanan: 'Jumat, 18 September 2020',
      status: 'keranjang',
      totalHarga: 500000,
      berat: 1,
      order: [
        {
          id: 1,
          product: {
            id: 1,
            nama: 'CHELSEA 3RD 2018-2019',
            gambar: [Chelsea1, Chelsea2],
            liga: {
              id: 2,
              nama: 'Premier League',
              gambar: PremierLeague,
            },
            harga: 125000,
            berat: 0.25,
            jenis: 'Replika Top Quality',
            ukuran: ["S", "M", "L", "XL", "XXL"],
            ready: true
          },
          jumlahPesan: 1,
          totalHarga: 125000,
          keterangan: null,
          ukuran: "L"
        },
        {
          id: 2,
          product: {
            id: 2,
            nama: 'DORTMUND AWAY 2018-2019',
            gambar: [Dortmund1, Dortmund2],
            liga: {
              id: 4,
              nama: 'Bundesliga',
              gambar: BundesLiga,
            },
            harga: 125000,
            berat: 0.25,
            jenis: 'Replika Top Quality',
            ukuran: ["S", "M", "L", "XL", "XXL"],
            ready: true
          },
          jumlahPesan: 3,
          totalHarga: 375000,
          keterangan: null,
          ukuran: "L"
        }
      ]
    },
    {
      id: 2,
      tanggalPemesanan: 'Jumat, 18 September 2020',
      status: 'lunas',
      totalHarga: 375000,
      berat: 0.75,
      order: [
        {
          id: 1,
          product: {
            id: 5,
            nama: 'LIVERPOOL AWAY 2018-2019',
            gambar: [Liverpool1, Liverpool2],
            liga: {
              id: 2,
              nama: 'Premier League',
              gambar: PremierLeague,
            },
            harga: 125000,
            berat: 0.25,
            jenis: 'Replika Top Quality',
            ukuran: ["S", "M", "L", "XL", "XXL"],
            ready: true
          },
          jumlahPesan: 1,
          totalHarga: 125000,
          keterangan: "Nama Jersey : Eko Nomor Punggung : 9.",
          ukuran: "L"
        },
        {
          id: 2,
          product: {
            id: 7,
            nama: 'AC MILAN HOME 2018 2019',
            gambar: [Milan1, Milan2],
            liga: {
              id: 3,
              nama: 'Serie A',
              gambar: SeriA,
            },
            harga: 125000,
            berat: 0.25,
            jenis: 'Replika Top Quality',
            ukuran: ["S", "M", "L", "XL", "XXL"],
            ready: true
          },
          jumlahPesan: 2,
          totalHarga: 255000,
          keterangan: "Nama Jersey : Afif Nomor Punggung : 10.",
          ukuran: "M"
        }
      ]
    }
  ];
  