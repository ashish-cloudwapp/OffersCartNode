import model from '../../models/index.js';
import bcrypt from 'bcryptjs';


export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await model.User.create({name,email,password:hashedPassword});

    return res.status(200).json({
      success: true,
      data: user
    });

  } catch (error) {
    console.error("REGISTER MYSQL ERROR", error);

    return res.status(500).json({
      success: false,
      message: error.message,
      sqlMessage: error.original?.sqlMessage
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await model.User.findOne({ where: { email } });

    if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    
    console.error('Login error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}


