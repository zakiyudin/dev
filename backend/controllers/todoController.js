import Todo from '../models/todoModel.js';


// @desc    Get Data
// @route   GET /api/todo/todo
// @access  private
const getAllTodo = async (req, res) => {
    const todos = await Todo.find()
    res.json({
        success: true,
        data: todos
    })
}

// @desc    Create Data
// @route   POST /api/todo/todo
// @access  private
const addTodo = async (req, res) => {
    const { title, description, completed, user } = req.body
    // validation
    if (!title || !description || !completed || !user) {
        res.status(400).json({
            success: false,
            message: 'Please enter all fields'
        })
        throw new Error('Please enter all fields')
    }

    const todo = await Todo.create({
        title,
        description,
        completed,
        user
    })

    if (todo) {
        res.status(201).json({
            success: true,
            data: todo
        })
    } else {
        res.status(500).json({
            success: false,
            message: 'Todo not created'
        })
    }
}

// @desc    Update Data
// @route   PUT /api/todo/todo/:id
// @access  private
const updateTodo = async (req, res) => {
    const { title, description, completed, user } = req.body
    // validation
    if (!title || !description || !completed || !user) {
        res.status(400).json({
            success: false,
            message: 'Please enter all fields'
        })
        throw new Error('Please enter all fields')
    }

    const todo = await Todo.findByIdAndUpdate(req.params.id, {
        title,
        description,
        completed,
        user
    }, { new: true })

    if (todo) {
        res.status(201).json({
            success: true,
            data: todo
        })
    } else {
        res.status(500).json({
            success: false,
            message: 'Todo not updated'
        })
    }
}

// @desc    Delete Data
// @route   DELETE /api/todo/todo/:id
// @access  private
const deleteTodo = async (req, res) => {
    const todo = await Todo.findByIdAndDelete(req.params.id)

    if (todo) {
        res.status(201).json({
            success: true,
            data: todo,
            message: "Todo deleted successfully"
        })
    } else {
        res.status(500).json({
            success: false,
            message: 'Todo not deleted'
        })
    }
}

export default {
    getAllTodo,
    addTodo,
    updateTodo,
    deleteTodo
}