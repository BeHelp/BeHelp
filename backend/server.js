const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const { refreshToken } = require("./middleware/auth");
const history = require("connect-history-api-fallback");

//middleware
app.use(cors());

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "default-src": ["'self'"],
        "script-src": [
          "'self'",
          "cdn.jsdelivr.net",
          "unpkg.com",
          "'unsafe-inline'",
          "'unsafe-eval'",
        ],
        "style-src": [
          "'self'",
          "cdn.jsdelivr.net",
          "fonts.googleapis.com",
          "'unsafe-inline'",
          "'unsafe-eval'",
        ],
        "img-src": [
          "'self'",
          "res.cloudinary.com",
          "data:",
          "'unsafe-inline'",
          "'unsafe-eval'",
        ],
        "font-src": [
          "'self'",
          "fonts.gstatic.com",
          "'unsafe-inline'",
          "'unsafe-eval'",
        ],
      },
    },
  })
);

app.use(
  history({
    rewrites: [
      {
        from: /^\/api\/.*$/,
        to: function (context) {
          console.log("context", context);
          return context.parsedUrl.path;
        },
      },
    ],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("dist"));
app.get("/", (req, res) => {
  res.sendFile(path.join("dist/index.html"));
});

//routes
app.use("/api/email", require("./routes/email.js"));
app.use("/api/login", require("./routes/login.js"));
app.use("/api/register", require("./routes/register.js"));
app.use("/api/refreshtoken", refreshToken);
app.use("/api/users", require("./routes/users.js"));
app.use("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

//listen
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running on port 5000");
});
