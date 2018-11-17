const express = require("express");
const Chapter = require("../models/chapter.model");

const router = express.Router();

router.get("/:id", (req, res, next) => {
    Chapter.find({chapterID: req.params.id})
        .then((chapter) => {
                res.status(200).json({chapter: chapter})
            }
        )

});

module.exports = router;