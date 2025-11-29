import {
  getAllHewan,
  getHewanById,
  createHewan,
  updateHewan,
  deleteHewan,
  getTotalHewan,
  getSaranPerawatan
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
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
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
  try {
    const updated = await updateHewan(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (error) {
    if (error.message === "Hewan tidak ditemukan") {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
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
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
}

async function getTotalHewanController(req, res) {
  try {
    const total = await getTotalHewan();
    res.status(200).json(total);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getSaranPerawatanController(req, res) {
  try {
    const data = await getSaranPerawatan(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    if (error.message === "Hewan tidak ditemukan") {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
}

export {
  getAllHewanController,
  getHewanByIdController,
  createHewanController,
  updateHewanController,
  deleteHewanController,
  getTotalHewanController,
  getSaranPerawatanController
};
