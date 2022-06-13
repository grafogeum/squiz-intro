const projectsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return {
                ...state,
                projects: action.payload,
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload,
            };
        case 'SORTING':
            return {
                ...state,
                projects: [...state.projects].sort((a, b) => {
                    if (state.order === 'asc') {
                        return a[action.payload.sorting] > b[action.payload.sorting] ? 1 : -1;
                    }
                    if (state.order === 'dsc') {
                        return a[action.payload.sorting] < b[action.payload.sorting] ? 1 : -1;
                    }
                    return 0;
                }),
                order: action.payload.order,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export default projectsReducer;