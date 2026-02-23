import jwt from "jsonwebtoken";

function userIdentity(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not provided, Unauthorized access",
      });
    }
    let decode = "";
    try {
      decode = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid token, Unauthorized access",
      });
    }
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error verifying token",
    });
  }
}

export default userIdentity;
