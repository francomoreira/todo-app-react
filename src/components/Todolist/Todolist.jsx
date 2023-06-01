import { Todo } from "../Todo/Todo"
import { Todofilters } from "../Todofilters/Todofilters"

const Todolist = ({ 
    todos, 
    handleSetComplete, 
    handleDelete, 
    activeFilter, 
    showAllTodos, 
    showActiveTodos, 
    showCompletedTodos, 
    handleClearComplete
}) => {
    return (
        <div className="flex flex-col mt-7 rounded-2xl overflow-hidden shadow-2xl">
            {todos.map(todo => {
                return (
                    <Todo 
                        key={todo.id} 
                        todo={todo} 
                        handleSetComplete={handleSetComplete}
                        handleDelete={handleDelete}
                    />
                )
            })}
            <Todofilters 
                activeFilter={activeFilter}
                total={todos.length}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
                handleClearComplete={handleClearComplete}
            />
        </div>
    )
}

export { Todolist }