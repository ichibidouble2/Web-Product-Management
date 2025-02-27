module.exports.loginPost = (req, res, next) => {
  if (!req.body.email) {
    req.flash("error", "Vui lòng nhập email!");
    res.redirect("back");
    return;
  }

  if (!req.body.password || req.body.password.length < 6) {
    const errorMessage = !req.body.password
      ? "Vui lòng nhập mật khẩu!"
      : "Vui lòng nhập mật khẩu dài ít nhất 6 kí tự!";
    req.flash("error", errorMessage);
    res.redirect("back");
    return;
  }

  next();
};