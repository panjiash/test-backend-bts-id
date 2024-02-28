import express from "express";
import { refreshToken } from "../controllers/refreshToken.js";
import { Login, Register } from "../controllers/auth.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import {
  getAllChecklist,
  postCheckList,
} from "../controllers/ChecklistController.js";
import {
  deleteItemName,
  getAllCheckListItem,
  getDataChecklistItem,
  postCheklistItem,
  renameItemName,
} from "../controllers/ChecklistItemController.js";

const router = express.Router();

// auth Route
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);

// checklist Route
router.get("/checklist", verifyToken, getAllChecklist);
router.post("/checklist", verifyToken, postCheckList);

// checklist item route
router.get("/checklist/:checklistId/item", verifyToken, getAllCheckListItem);
router.post("/checklist/:checklistId/item", verifyToken, postCheklistItem);
router.get(
  "/checklist/:checklistId/item/:checklistItemId",
  verifyToken,
  getDataChecklistItem
);
router.put(
  "/checklist/:checklistId/item/rename/:checklistItemId",
  verifyToken,
  renameItemName
);
router.delete(
  "/checklist/:checklistId/item/:checklistItemId",
  verifyToken,
  deleteItemName
);

export default router;
