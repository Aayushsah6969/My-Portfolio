export const logoutAdmin = async (req, res) => {
    try {
      // Clear the token cookie
      res.cookie("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        expires: new Date(0), // Expire the cookie immediately
      });
  
      res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  