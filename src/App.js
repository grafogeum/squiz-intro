// import * as esbuild from 'esbuild-wasm';
import React, { useEffect } from 'react';
import ProjectsFilters from './components/ProjectsFilters';
import ProjectsTable from './components/ProjectsTable';
import ProjectsContext from './ProjectsContext';
import { ProjectsReducer } from './reducers/ProjectsReducer';
import './App.scss';
import { Grid } from '@material-ui/core';

const App = () => {
  const [state, dispatch] = React.useReducer(ProjectsReducer, {
    projects: [],
    filter: '',
    order: 'dsc',
  });

  React.useEffect(() => {
    fetch('https://dujour.squiz.cloud/developer-challenge/data')
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
