import Base from './components/Base.jsx';
import TodoContainer from './components/TodoContainer.jsx';
import CompletedTodoContainer from './components/CompletedTodoContainer.jsx';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      component: TodoContainer,
    },

    {
      path: '/completed',
      component: CompletedTodoContainer,
    },
  ]
};

export default routes;
