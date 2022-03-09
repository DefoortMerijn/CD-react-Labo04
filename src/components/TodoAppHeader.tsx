import '../style/components/todo-app-header.scss'
const TodoAppHeader = () => {
  return (
    <header className="c-todo-app-header">
      <h1 className="c-todo-app-header__title">Hell {'Mort'}</h1>
      <p className="c-todo-app-header__subtitle">There are {3} todos</p>
    </header>
  )
}

export default TodoAppHeader
