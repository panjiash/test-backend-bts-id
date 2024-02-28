import db from "../config/db.js";

export const getAllCheckListItem = async (req, res) => {
  try {
    const checklistId = req.params.checklistId;
    const [data] = await db.query(
      `SELECT ci.*, c.name as checkName from checklistItems ci JOIN checklists c ON ci.checklistId = c.id WHERE checklistId = '${checklistId}'`
    );
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const postCheklistItem = async (req, res) => {
  try {
    const checklistId = req.params.checklistId;
    const name = req.body.itemName;
    await db.query(
      `INSERT INTO checklistItems VALUES (null, ${checklistId}, '${name}')`
    );
    res.json({
      msg: "Insert success",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDataChecklistItem = async (req, res) => {
  try {
    const checklistId = req.params.checklistId;
    const checklistItemId = req.params.checklistItemId;

    const [data] = await db.query(
      `SELECT ci.*, c.name FROM checklistItems ci JOIN checklists c ON ci.checklistId = c.id WHERE ci.id = ${checklistItemId} AND ci.checklistId = ${checklistId}`
    );
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const renameItemName = async (req, res) => {
  try {
    const itemName = req.body.itemName;
    await db.query(
      `UPDATE checklistitems SET name = '${itemName}' WHERE id = '${req.params.checklistItemId}' AND checklistId = '${req.params.checklistId}'`
    );
    res.json({
      msg: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteItemName = async (req, res) => {
  try {
    const checklistItemId = req.params.checklistItemId;
    const checklistId = req.params.checklistId;
    if (!checklistItemId || !checklistId) {
      res.json({
        msg: "id or checklist id is null",
      });
      return;
    }

    await db.query(
      `DELETE FROM checklistItems WHERE id = '${checklistItemId}' AND checklistId = '${checklistId}'`
    );

    res.json({
      msg: "delete success",
    });
  } catch (error) {
    console.log(error);
  }
};
