import React, { useContext } from 'react'
import ProjectRow from './ProjectRow';
import ProjectsContext from '../ProjectsContext';

const ProjectsTable = () => {
    const { state: { projects, order, filter }, dispatch, } = useContext(ProjectsContext);

    return (
        <table width="100%">
            <thead>
                <tr>
                    <th onClick={() => dispatch({
                        type: 'SORTING',
                        payload: {
                            sorting: 'id',
                            order: order === 'asc' ? 'dsc' : 'asc'
                        }
                    })}>Id</th>
                    <th onClick={() => dispatch({
                        type: 'SORTING',
                        payload: {
                            sorting: 'name',
                            order: order === 'asc' ? 'dsc' : 'asc'
                        }
                    })}>{order === 'asc' ? '⬆️' : '⬇️'}Name</th>
                    <th>Country</th>
                    <th>Industry</th>
                    <th onClick={() => dispatch({
                        type: 'SORTING',
                        payload: {
                            sorting: 'numberOfEmployees',
                            order: order === 'asc' ? 'dsc' : 'asc'
                        }
                    })}>
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
    )
}

export default ProjectsTable;