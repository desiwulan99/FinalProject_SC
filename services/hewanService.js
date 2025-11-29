import dataHewan from "../data.js";

async function getAllHewan() {
  return dataHewan;
}

async function getHewanById(id) {
  const hewanId = parseInt(id);
  const hewan = dataHewan.find((h) => h.IDhewan === hewanId);
  if (!hewan) {
    throw new Error("Hewan tidak ditemukan");
  }
  return hewan;
}

async function createHewan(hewanData) {
  const newHewan = {
    IDhewan: dataHewan.length + 1,
    NamaHewan: hewanData.NamaHewan,
    Spesies: hewanData.Spesies,
    Gender: hewanData.Gender,
    Umur: hewanData.Umur,
    StatusKesehatan: hewanData.StatusKesehatan,
    Pemilik: hewanData.Pemilik
  };
  dataHewan.push(newHewan);
  return newHewan;
}

async function updateHewan(id, hewanData) {
  const hewanId = parseInt(id);
  const index = dataHewan.findIndex((h) => h.IDhewan === hewanId);
  if (index === -1) {
    throw new Error("Hewan tidak ditemukan");
  }
  dataHewan[index] = { ...dataHewan[index], ...hewanData };
  return dataHewan[index];
}

async function deleteHewan(id) {
  const hewanId = parseInt(id);
  const index = dataHewan.findIndex((h) => h.IDhewan === hewanId);
  if (index === -1) {
    throw new Error("Hewan tidak ditemukan");
  }
  const deleted = dataHewan.splice(index, 1);
  return deleted[0];
}

async function getTotalHewan() {
  return { total: dataHewan.length };
}

async function getSaranPerawatan(id) {
  const hewan = await getHewanById(id);
  let saran = "";

  if (hewan.Spesies.toLowerCase() === "anjing") {
    saran = "Mandikan 1–2 kali per bulan dan berikan vaksin lengkap.";
  } else if (hewan.Spesies.toLowerCase() === "kucing") {
    saran = "Sikat bulu secara rutin dan berikan makanan tinggi protein.";
  } else {
    saran = "Perawatan umum: periksa kesehatan rutin dan jaga kebersihan kandang.";
  }

  return {
    IDhewan: hewan.IDhewan,
    NamaHewan: hewan.NamaHewan,
    Spesies: hewan.Spesies,
    SaranPerawatan: saran
  };
}

export {
  getAllHewan,
  getHewanById,
  createHewan,
  updateHewan,
  deleteHewan,
  getTotalHewan,
  getSaranPerawatan
};
