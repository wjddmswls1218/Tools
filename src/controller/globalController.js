import Tools from "../../model/Tools";
import globalRouter from "../router/globalRouter";

const homeController = (req, res) => {
    res.render("screens/home");
};

const toolsController = async(req, res) => {
    const result = await Tools.find({}, {});
    console.log(result);

    res.render("screens/tools", { tools:result });
};

export const globalController = {
    homeController,
    toolsController,
};