const userRouter = require('../routes/user-routes');
const authRouter = require('../routes/auth-routes');
const globalErrorHandler = require('../controllers/error-controller');
const AppError = require('../utils/app-error');

module.exports = (app) => {
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/users', userRouter);

  app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.method} ${req.originalUrl} on this server.`, 404));
  });

  app.use(globalErrorHandler);
};
