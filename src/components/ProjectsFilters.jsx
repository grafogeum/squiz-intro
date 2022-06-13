import React, { useContext } from 'react'
import { Button } from '@material-ui/core';
import ProjectsContext from '../ProjectsContext';

const ProjectsFilters = () => {
    const { state: { filter }, dispatch } = useContext(ProjectsContext);

    return (
        <div>
            FILTERS
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
        </div>
    )
}

export default ProjectsFilters;