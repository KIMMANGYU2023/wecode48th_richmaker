const express = require("express");
const groupController = require("../controllers/groupController");
const groupRouter = express.Router();
const { loginRequired } = require("../utils/auth");

groupRouter.get("", loginRequired, groupController.getGroupMain);
groupRouter.get("/member", loginRequired, groupController.getMemberList);
groupRouter.get("/finance", loginRequired, groupController.getSharedFinances);
groupRouter.get("/financeList", loginRequired, groupController.getFinanceList);
groupRouter.get("/finance/management", loginRequired, groupController.getGroupFinanceManagement );
groupRouter.get("/finance/detail", loginRequired, groupController.getFinanceDetail);
groupRouter.get("/financeService", loginRequired, groupController.getcardFinanceDetail);
groupRouter.post("/invitation", loginRequired, groupController.sendInvitation);
groupRouter.patch("/financeList", loginRequired, groupController.changeSharingStatus);
groupRouter.delete("/member/:userId", loginRequired, groupController.withdrawFromGroup);

module.exports = groupRouter;
