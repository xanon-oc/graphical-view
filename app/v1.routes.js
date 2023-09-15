const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("./pages/landing", { posts: [], title: "" });
});

router.get("/services", (req, res) => {
  res.render("./pages/services/services");
});

router.get("/freeTrail", (req, res) => {
  res.render("./pages/freeTrail/freeTrail");
});

router.get("/orderNow", (req, res) => {
  res.render("./pages/orderNow/orderNow");
});

router.get("/pricing", (req, res) => {
  res.render("./pages/pricing/pricing");
});

router.get("/about", (req, res) => {
  res.render("./pages/about/about");
});
router.get("/contact", (req, res) => {
  res.render("./pages/contact/contact");
});

router.get("/blogDetails", (req, res) => {
  res.render("./pages/blogDetails/blogDetails");
});
router.get("/blogs", (req, res) => {
  res.render("./pages/blogs/blogs");
});

module.exports = v1Routes = router;
