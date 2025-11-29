import {
  getAllHewan,
  getHewanById,
  createHewan,
  updateHewan,
  deleteHewan
} from "../services/hewanService.js";

async function getAllHewanController(req, res) {
  try {
    const data = await getAllHewan();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getHewanByIdController(req, res) {
  try {
    const data = await getHewanById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    if (error.message === "Hewan tidak ditemukan") {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
}

async function createHewanController(req, res) {
  const { NamaHewan, Spesies, Gender, Umur, StatusKesehatan, Pemilik } = req.body;

  if (!NamaHewan || !Spesies || !Gender || !Umur || !StatusKesehatan || !Pemilik) {
    return res.status(400).json({ message: "Semua field wajib diisi" });
  }

  try {
    const newHewan = await createHewan(req.body);
    res.status(201).json(newHewan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateHewanController(req, res) {
  const { NamaHewan, Spesies, Gender, Umur, StatusKesehatan, Pemilik } = req.body;

  if (!NamaHewan || !Spesies || !Gender || !Umur || !StatusKesehatan || !Pemilik) {
    return res.status(400).json({ message: "Semua field wajib diisi" });
  }

  try {
    const updated = await updateHewan(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (error) {
    if (error.message === "Hewan tidak ditemukan") {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
}

async function deleteHewanController(req, res) {
  try {
    const deleted = await deleteHewan(req.params.id);
    res.status(200).json({
      message: "Hewan berhasil dihapus",
      data: deleted
    });
  } catch (error) {
    if (error.message === "Hewan tidak ditemukan") {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
}

////////////////////////////////////////////////////////////////
// 🔥 TAMBAHAN 1: TOTAL DATA HEWAN
////////////////////////////////////////////////////////////////
async function getTotalHewanController(req, res) {
  try {
    const data = await getAllHewan();
    res.status(200).json({
      total: data.length
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

////////////////////////////////////////////////////////////////
// 🔥 TAMBAHAN 2: SARAN PERAWATAN HEWAN
////////////////////////////////////////////////////////////////

function generateSaran(umur, status) {
  const saran = [];

  // Saran berdasarkan umur
  if (umur <= 1) saran.push("Berikan vaksin dasar dan pemeriksaan rutin.");
  else if (umur <= 7) saran.push("Lakukan pengecekan kesehatan setiap 6 bulan.");
  else saran.push("Hewan usia lanjut perlu pemeriksaan khusus organ.");

  // Saran berdasarkan status kesehatan
  if (status === "Sakit") saran.push("Butuh perawatan intensif dan obat sesuai resep dokter.");
  else if (status === "Sehat") saran.push("Pertahankan pola makan dan kebersihan kandang.");
  else saran.push("Perlu pemeriksaan lanjutan untuk kondisi tidak diketahui.");

  return saran;
}

async function getSaranPerawatanController(req, res) {
  try {
    const data = await getHewanById(req.params.id);

    const saran = generateSaran(data.Umur, data.StatusKesehatan);

    res.status(200).json({
      IDhewan: data.IDhewan,
      NamaHewan: data.NamaHewan,
      SaranPerawatan: saran
    });
  } catch (error) {
    if (error.message === "Hewan tidak ditemukan") {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
}

export {getAllHewanController, getHewanByIdController, createHewanController, updateHewanController, deleteHewanController, getTotalHewanController, getSaranPerawatanController};
