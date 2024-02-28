import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Users = db.define(
  "Users",
  {
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    password: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    refresh_token: {
      type: DataTypes.TEXT("long"),
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

(async () => {
  await db.sync();
})();

export default Users;
