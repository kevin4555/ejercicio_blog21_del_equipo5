//Middleware - Info Usuario
const makeUserAvailableInViews = require("../middlewares/makeUserAvalibleInViews");

const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");
const apiRoutes = require("./apiRoutes");

/**
 * Otra alternativa podría ser organizar las rutas según su nivel de
 * privacidad (ej: si son rutas públicas o privadas).
 *
 * En `publicRoutes` podrían estar las rutas relacionadas con páginas como
 * Home, Contacto y Sobre Nosotros. En `privateRoutes` podrían estar las rutas
 * relacionados al Panel de Control (Admin). Notar que si se está construyento
 * una API esta alternativa no tendría sentido.
 */

const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");

module.exports = (app) => {
  /**
   * Notar que si el sitio está en español, tiene sentido que las URLs que se
   * ven en la barra de direcciiones del navegador también lo estén. No así los
   * nombres de variables, funciones, etc, que siempre se recomienda que estén
   * en inglés.
   */

  //Usamos el middleware en todas las rutas
  app.use(makeUserAvailableInViews);

  app.use("/usuarios", userRoutes);
  app.use("/api", apiRoutes);

  app.use("/comentar", commentRoutes);

  app.use("/", publicRoutes);
  app.use("/panel", privateRoutes);
};
