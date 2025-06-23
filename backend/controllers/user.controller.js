import User from '../models/user.model.js'

export const getUser = async (req,res,next) => {
  const {username} = req.params

  const user = await User.findOne({username})

  const { hashedPassword,...detailsWithoutPassword } = user.toObject();

  return res.status(200).json(detailsWithoutPassword)
}