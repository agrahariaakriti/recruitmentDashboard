const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const asyncHandler = require('../utils/asyncHandler');
const { validateRegister, validateLogin } = require('../validation/authValidation');

const register = asyncHandler(async (req, res) => {
  const { isValid, errors } = validateRegister(req.body);
  if (!isValid) return res.status(400).json({ success: false, errors });

  const { name, email, password, role } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'User already exists' });
  }

  const user = await User.create({ name, email, password, role });

  res.status(201).json({
    success: true,
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    },
  });
});

const login = asyncHandler(async (req, res) => {
  const { isValid, errors } = validateLogin(req.body);
  if (!isValid) return res.status(400).json({ success: false, errors });

  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

const getMe = asyncHandler(async (req, res) => {
  res.json({ success: true, data: req.user });
});

module.exports = { register, login, getMe };
