const { addListener } = require("nodemon");
const VideoService = require("../Services/videos.services");

const getAllVideos = async (req, res) => {
  try {
    const result = await VideoService.getVideos();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
const createVideo = async (req, res, next) => {
  try {
    const newVideo = req.body;
    const result = await VideoService.add(newVideo);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "Revisa la información que mandas",
    });
  }
};

const deleteVideo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await VideoService.dropVideo(id);
    res.status(202).json(result);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllVideos,
  createVideo,
  deleteVideo,
};
