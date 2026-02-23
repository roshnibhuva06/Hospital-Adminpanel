import Billing from "../models/billingModel.js";

export const createBill = async (req, res) => {
  try {
    const bill = await Billing.create(req.body);

    res.json({
      status: true,
      message: "Bill Created",
      data: bill,
    });

  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};


export const getBills = async (req, res) => {
  try {
    const bills = await Billing.find().sort({ createdAt: -1 });

    res.json({
      status: true,
      data: bills,
    });

  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};


export const updateBill = async (req, res) => {
  try {
    const bill = await Billing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      status: true,
      message: "Bill Updated",
      data: bill,
    });

  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const deleteBill = async (req, res) => {
  try {
    await Billing.findByIdAndDelete(req.params.id);

    res.json({
      status: true,
      message: "Bill Deleted",
    });

  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
