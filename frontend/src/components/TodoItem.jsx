
function TodoItem({ todos, completeTodo, deleteTodo }) {
    return (
        <div>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Completed</th>
                    <th>Actions</th>
                </tr>
                {todos.map(todo => (
                    <tr key={todo.id}>
                        <td>{todo.title}</td>
                        <td>{todo.description}</td>
                        <td>{todo.completed ? "complete" : "incomplete"}</td>
                        <td>
                            <button onClick={() => completeTodo(todo.id, todo.completed)}>
                                click
                            </button>
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </table>
            
            
        </div>
    );
}

export default TodoItem;