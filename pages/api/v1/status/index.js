function status(request, response) {
  response.status(200).json({ status: "Bora apostar!" });
}

export default status;
