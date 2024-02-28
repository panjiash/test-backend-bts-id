import Checklists from "../models/ChecklistModel.js";

export const getAllChecklist = async (req, res) => {
  try {
    const data = await Checklists.findAll();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

export const postCheckList = async (req, res) => {
  try {
    const name = req.body.name;
    const cek = await Checklists.findAll({
      where: {
        name,
      },
    });

    if (cek.length > 0) {
      res.status(409).json({
        msg: "name already exist",
      });
      return;
    }
    await Checklists.create({
      name,
    });
    res.json({
      msg: "success",
    });
  } catch (error) {
    console.log(error);
  }
};
