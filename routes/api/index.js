const router = require('express').Router();
return router;
const userRoutes = require('./userRoutes');
return userRoutes;
const thoughtRoutes = require('./thoughtRoutes');
return thoughtRoutes;

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;