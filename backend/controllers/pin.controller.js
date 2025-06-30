import Pin from "../models/pin.model.js";
import sharp from "sharp";

export const getPins = async (req, res) => {
  const pageNumber = Number(req.query.cursor) || 0;
  const search = req.query.search;
  const userId = req.query.userId;
  const boardId = req.query.boardId;
  const LIMIT = 21;

  const pins = await Pin.find(
    search
      ? {
          $or: [
            { title: { $regex: search, $options: "i" } },
            { tags: { $in: [search] } },
          ],
        }
      : userId
      ? { user: userId }
      : boardId
      ? { board: boardId }
      : {}
  )
    .limit(LIMIT)
    .skip(pageNumber * LIMIT);

  const hasNextPage = pins.length === LIMIT;

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return res
    .status(200)
    .json({ pins, nextCursor: hasNextPage ? pageNumber + 1 : null });
};

export const getPin = async (req, res) => {
  const { id } = req.params;

  const pin = await Pin.findById(id).populate(
    "user",
    "username img displayName"
  );

  return res.status(200).json(pin);
};

export const createPin = async (req, res) => {
  console.log("hola");
  const { title, description, link, board, tags, textOptions, canvasOptions } =
    req.body;

  const media = req.files.media;

  if (!title || !description || !media) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const parsedTextOptions = JSON.parse(textOptions || "{}");
  const parsedCanvasOptions = JSON.parse(canvasOptions || "{}");

  const metadata = await sharp(media.data).metadata();

  const originalOrientation =
    metadata.width < metadata.height ? "portrait" : "landscape";
  const originalAspectRatio = metadata.width / metadata.height;

  let clientAspectRation;
  let width;
  let height;

  if (canvasOptions.size !== "original") {
    clientAspectRation =
      parsedCanvasOptions.size.split(":")[0] /
      parsedCanvasOptions.size.split(":")[1];
  } else {
    parsedCanvasOptions.originalOrientation === originalOrientation
      ? (clientAspectRation = originalOrientation)
      : (clientAspectRation = 1 / originalAspectRatio);
  }

  width = metadata.width;
  height = metadata.width / clientAspectRation;
};
