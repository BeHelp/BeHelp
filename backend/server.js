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
    verbose: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("dist"));
app.get("/", (req, res) => {
  res.sendFile(path.join("dist/index.html"));
});

//routes
<<<<<<< HEAD
app.use('/email', require('./routes/email'));
app.use('/forgot-password', require('./routes/forgot'));
app.use('/login', require('./routes/login'));
app.use('/register', require('./routes/register'));

app.use('/refreshtoken', refreshToken);
app.use('/users', require('./routes/users'));
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

//listen
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running on port 5000");
});
