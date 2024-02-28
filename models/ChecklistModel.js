import { DataTypes } from "sequelize";
import db from "../config/db.js";
import ChecklistItems from "./ChecklistItemModel.js";

const Checklists = db.define(
  "Checklists",
  {
    id: {
      type: DataTypes.BIGINT(255),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "checklists",
    timestamps: false,
  }
);

Checklists.hasMany(ChecklistItems, {
  foreignKey: "checklistId",
  as: "ChecklistItems",
});
(async () => {
  await db.sync();
})();

export default Checklists;
