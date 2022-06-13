import React, { useEffect } from 'react';
import './App.scss';
import ProjectsFilters from './components/ProjectsFilters';
import ProjectsTable from './components/ProjectsTable';
import ProjectsContext from './ProjectsContext';
import projectsReducer from './Reducer';

const App = () => {
  const [state, dispatch] = React.useReducer(projectsReducer, {
    projects: [],
    filter: '',
    order: 'dsc',
  });

  React.useEffect(() => {
    fetch('http://localhost:3000/projects.json')
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'SET_PROJECTS',
          payload: data,
        });
      });
  }, []);

  return (
    <>
      <div
        style={{
          margin: 'auto',
          width: 800,
          paddingTop: '2rem',
          fontSize: 'large',
        }}
      >
        <h1>Projects</h1>
        <ProjectsContext.Provider
          value={{
            state,
            dispatch,
          }}
        >
          <ProjectsFilters />
          <ProjectsTable />
        </ProjectsContext.Provider>
      </div>
    </>
  );
};
export default App;
