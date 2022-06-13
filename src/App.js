import React, { useEffect } from 'react';
import './App.scss';
import { Grid } from '@material-ui/core';
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
    <div className="App-container">
      <h1>Projects</h1>
      <ProjectsContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <Grid container spacing={8} direction="row" justifyContent="center">
          <Grid container item xs={12} lg={6} md={6} justifyContent="space-around">
            <ProjectsFilters className="projects-filters" />
          </Grid>
          <Grid container item xs={12} lg={6} md={6} justifyContent="space-around">
            <ProjectsTable className="projects-table" />
          </Grid>
        </Grid>
      </ProjectsContext.Provider>
    </div>
  );
};
export default App;
