import { DataTypes } from "sequelize";
import db from "../config/db.js";

const ChecklistItems = db.define(
  "ChecklistItems",
  {
    id: {
      type: DataTypes.BIGINT(255),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    checklistId: {
      type: DataTypes.BIGINT(255),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "checklistitems",
    timestamps: false,
  }
);

(async () => {
  await db.sync();
})();

export default ChecklistItems;
