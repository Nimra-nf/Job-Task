const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const { authorizeRole } = require('../middlewares/rbacMiddleware');

const router = express.Router();

router.post('/', authorizeRole(['write']), createTask);
router.get('/', authorizeRole(['read']), getTasks);
router.put('/:id', authorizeRole(['update']), updateTask);
router.delete('/:id', authorizeRole(['delete']), deleteTask);

module.exports = router;
