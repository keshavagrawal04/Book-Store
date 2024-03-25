const crypto = require("crypto");

const generateHash = (
  password,
  salt = crypto.randomBytes(32).toString("hex")
) => {
  try {
    const generatedHash = crypto
      .pbkdf2Sync(password, salt, 1000, 64, "sha512")
      .toString("hex");
    return {
      salt,
      hash: generatedHash,
    };
  } catch (error) {
    throw error;
  }
};

const validateHash = (password, salt, hash) => {
  try {
    const { hash: generatedHash } = generateHash(password, salt);
    const isHashValid = generatedHash === hash;
    return isHashValid;
  } catch (error) {
    throw error;
  }
};

module.exports = { generateHash, validateHash };
