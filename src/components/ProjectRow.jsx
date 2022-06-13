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

export default ProjectRow;