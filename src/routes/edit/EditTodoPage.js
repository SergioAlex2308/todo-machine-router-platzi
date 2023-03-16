import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';

function EditTodoPage() {

	const location = useLocation();
	const { state, stateUpdaters } = useTodos();
	const { loading, getTodo } = state;
	const { editTodo } = stateUpdaters;

	const params = useParams();
	const id = Number(params.id);

	let todoText;

	if (location.state?.todo) {
		todoText = location.state.todo.text;
	} else if (loading) {
		return <p>Cargando...</p>
	} else {
		const todo = getTodo(id);
		todoText = todo.text;
	}
	return (
		<TodoForm
			label="Edita tu ToDo"
			defaultTodoText={todoText}
			submitText="Editar"
			submitEvent={(newText) => editTodo(id, newText)}
		/>
	)
}

export { EditTodoPage }