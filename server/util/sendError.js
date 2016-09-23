const sendError = ({ res, message }) => {
  res.json({
    success: false,
    message
  });
}

export { sendError };