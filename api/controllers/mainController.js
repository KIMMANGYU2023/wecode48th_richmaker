const mainService = require("../services/mainService");
const { catchAsync } = require("../utils/error");

const mainInfo = catchAsync(async (req, res) => {
  const user = req.user;
  const { month } = req.query;

  if (!user.id || !month) {
    const error = new Error("INVAILD_KEYERROR");
    error.statusCode = 400;
    throw error;
  }

  const [
    depositsResult,
    expensesResult,
    monthlyExpensesResult,
    expectedExpenseResult,
    variableExpenseResult,
    amountsBycategoriesResult
  ] = await Promise.all([
    mainService.depositsAmount(user.id, month),
    mainService.expensesAmount(user.id, month),
    mainService.monthlyExpenseAmounts(user.id, month),
    mainService.expectedExpenseAmounts(user.id, month),
    mainService.variableExpenseAmounts(user.id, month),
    mainService.amountsBycategories(user.id, month)
  ]);

    res.status(200).json({
      data: {
        depositsAmount: depositsResult[0]?.depositsAmount || "0",
        expensesAmount: expensesResult[0]?.expensesAmount || "0",
        monthlyExpenseAmounts:
          monthlyExpensesResult[0]?.monthlyExpenseAmounts || "0",
        expectedExpenseAmounts:
          expectedExpenseResult[0]?.expectedExpenseAmounts || "0",
        variableExpenseAmounts:
          variableExpenseResult[0]?.variableExpenseAmounts || "0",
        amountsBycategories: amountsBycategoriesResult,
      },
    });
});

module.exports = { mainInfo };
