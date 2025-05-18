import Welcome from "../models/welcomeModel.js";

export const updateWelcomeMessage = async (_, res) => {
  try {
    let welcome = await Welcome.findOne();

    if (!welcome) {
      welcome = new Welcome({ text: "hello universe", count: 1 });
    } else {
      welcome.count += 1;
      welcome.text = "hello universe";
    }

    await welcome.save();

    return res.status(200).json({
      status: true,
      message: "Welcome message updated successfully",
      data: welcome,
    });
  } catch (error) {
    return res.status(500).json({ status: false, error: error.message });
  }
};
