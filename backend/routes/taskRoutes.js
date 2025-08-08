const express=require('express');
const funcs = require('../logic/taskLogic');

const router=express.Router();

router.get('/',funcs.getTasks);
router.get('/:id',funcs.getTask);
router.post('/',funcs.createTask);
router.put('/:id',funcs.updateTask);
router.delete('/:id',funcs.deleteTask);

module.exports =router;
