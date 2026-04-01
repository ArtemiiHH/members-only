const pool = require("../db/pool");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { getUserByUsername, getUserById } = require("../db/queries");

// Passport functions
module.exports = (passport) => {
  // Configure
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        // Get user
        const user = await getUserByUsername(username);

        // Verify user
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }
        // Verify password
        if (user.password !== password) {
          return done(null, false, { message: "Incorrect password" });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }),
  );

  // Serialize User
  passport.serializeUser((member, done) => {
    done(null, member.id);
  });

  // Deserialize User
  passport.deserializeUser(async (id, done) => {
    try {
      // Get user
      const user = await getUserById(id);

      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};
