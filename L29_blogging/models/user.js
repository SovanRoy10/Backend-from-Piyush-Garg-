const mongoose = require("mongoose");
const { createHmac, randomBytes } = require("node:crypto"); // for hashing the password

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageUrl: {
      type: String,
      default: "/images/default.png",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return;

  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedPassword;

  next();
});

userSchema.static("matchPassword", async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) throw new Error("User not found!");
  const salt = user.salt;
  const userProvidedHash = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  if (userProvidedHash === user.password)
    return { ...user.toObject(), password: undefined, salt: undefined };
  else throw new Error("Password is not correct");
});

const User = mongoose.model("user", userSchema);

module.exports = User;
