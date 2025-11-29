import dataKlinik from "../data.js";

async function getAllHewan() {
  return dataKlinik;
}

async function getHewanById(id) {
  const hewanId = parseInt(id);
  const hewan = dataKlinik.find((h) => h.IDhewan === hewanId);
  if (!hewan) {
    throw new Error("Hewan tidak ditemukan");
  }
  return hewan;
}

async function createHewan(hewanData) {
  const newHewan = {
    IDhewan: dataKlinik.length + 1,
    NamaHewan: hewanData.NamaHewan,
    Spesies: hewanData.Spesies,
    Gender: hewanData.Gender,
    Umur: hewanData.Umur,
    StatusKesehatan: hewanData.StatusKesehatan,
    Pemilik: hewanData.Pemilik
  };
  dataKlinik.push(newHewan);
  return newHewan;
}

async function updateHewan(id, hewanData) {
  const hewanId = parseInt(id);
  const index = dataKlinik.findIndex((h) => h.IDhewan === hewanId);
  if (index === -1) {
    throw new Error("Hewan tidak ditemukan");
  }
  dataKlinik[index] = { ...dataKlinik[index], ...hewanData };
  return dataKlinik[index];
}

async function deleteHewan(id) {
  const hewanId = parseInt(id);
  const index = dataKlinik.findIndex((h) => h.IDhewan === hewanId);
  if (index === -1) {
    throw new Error("Hewan tidak ditemukan");
  }
  const deleted = dataKlinik.splice(index, 1);
  return deleted[0];
}

export { getAllHewan, getHewanById, createHewan, updateHewan, deleteHewan };
