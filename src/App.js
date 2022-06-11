import React, { useEffect, useState } from 'react';
import './App.scss';
import { Button } from '@material-ui/core';

const ProjectRow = ({ project }) => {
  return (
    <tr key={project.id}>
      <td>{project.id}</td>
      <td>{project.name}</td>
      <td>{project.country}</td>
      <td>{project.industry}</td>
      <td>{project.numberOfEmployees}</td>
    </tr>
  );
};

const App = () => {
  const [projects, projectsSet] = React.useState([]);
  const [filter, filterSet] = React.useState('');
  const [order, orderSet] = React.useState('asc');

  const sorting = (col) => {
    if (order === 'asc') {
      const sorted = [...projects].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      projectsSet(sorted);
      orderSet('dsc');
    }
    if (order === 'dsc') {
      const sorted = [...projects].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      projectsSet(sorted);
      orderSet('asc');
    }
  };

  React.useEffect(() => {
    fetch('http://localhost:3000/projects.json')
      .then((res) => res.json())
      .then((data) => {
        projectsSet(data);
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            filterSet('China');
          }}
        >
          {' '}
          China
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            filterSet('United States');
          }}
        >
          {' '}
          USA
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            filterSet('');
          }}
        >
          {' '}
          All
        </Button>
        <input
          type="text"
          placeholder="Filter"
          value={filter}
          onChange={(e) => filterSet(e.target.value)}
        />
        <table width="100%">
          <thead>
            <tr>
              <th onClick={() => sorting('id')}>Id</th>
              <th onClick={() => sorting('name')}>{order === 'asc' ? '⬆️' : '⬇️'}Name</th>
              <th>Country</th>
              <th>Industry</th>
              <th onClick={() => sorting('numberOfEmployees')}>
                {order === 'asc' ? '⬆️' : '⬇️'}Employees
              </th>
            </tr>
          </thead>
          <tbody>
            {projects
              .filter((project) => project.country.toLowerCase().includes(filter.toLowerCase()))
              .map((project) => (
                <ProjectRow key={project.id} project={project} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default App;
