const { Router } = require("express");
const {
  getAllVideos,
  createVideo,
  deleteVideo,
} = require("../Controllers/videos.controllers");
const router = Router();

router.get("/videos", getAllVideos);

router.post("/videos", createVideo);

router.delete("/videos/:id", deleteVideo);

module.exports = router;
