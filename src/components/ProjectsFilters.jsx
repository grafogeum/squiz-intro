import React, { useContext } from 'react'
import { Button } from '@material-ui/core';
import ProjectsContext from '../ProjectsContext';
import { Typography } from '@material-ui/core';
import './ProjectsFilters.scss';

const ProjectsFilters = () => {
    const { state: { filter }, dispatch } = useContext(ProjectsContext);

    return (
        <div className="project-filters">
            <Typography className="project-filters-title">FILTERS</Typography>
            <input
                type="text"
                placeholder="Filter"
                value={filter}
                onChange={(e) => {
                    dispatch({
                        type: 'SET_FILTER',
                        payload: e.target.value,
                    })
                }}
            />
            <div className="project-filters-buttons">


                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        dispatch({
                            type: 'SET_FILTER',
                            payload: 'China',
                        })
                    }}
                >
                    {' '}
                    China
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        dispatch({
                            type: 'SET_FILTER',
                            payload: 'United States',
                        })
                    }}
                >
                    {' '}
                    USA
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        dispatch({
                            type: 'SET_FILTER',
                            payload: '',
                        })
                    }}
                >
                    {' '}
                    All
                </Button>
            </div>
        </div>
    )
}

export default ProjectsFilters;