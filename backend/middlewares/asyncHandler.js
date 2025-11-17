const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((error) => {
    console.error(error); // log lỗi ra terminal cho dễ debug
    res.status(500).json({
      message: error.message || "Something went wrong",
    });
  });
};

export default asyncHandler;