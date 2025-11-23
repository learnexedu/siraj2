/**
 * routes which will be public for users and accessible for public mostly clients routes
 * @type {string}
 */
export const publicRoutes = [
  // auth
  "/auth/verify",
  "/auth/reset",
  "/api/auth/get-session",
  // pages
  "/",
  // apis
  "/api/timezone",
];

/**
 * routes which will be public and this routes are dynamic
 * @type {string}
*/
export const DynamicpublicRoutes = [
  // pages
  "/consultant",
  // apis
  "/api/whatsapp",
];

/**
 * routes which will be used for authentication actions
 * @type {string}
 */
export const authRoutes = [
  // students
  "/login",
  "/register",
  "/forget-password",
  "/verify-email",
  // supervisor
  "/auth/supervisor",
];

/**
 * prefix for api authentication routes used for api auth
 * Rotues start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * default route to redirect after login
 * @type {string}
 */
export const LogInRedirect = "/";
