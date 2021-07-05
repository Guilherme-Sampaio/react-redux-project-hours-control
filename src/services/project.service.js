import requestService from "./request.service";

class ProjectServiceProvider {
  getProjectsByUserId = (id) => {
    return requestService.get(`/projects/user/${id}`);
  };

  getAllProjects = (_) => {
    return requestService.get("/projects");
  };
}

const ProjectService = new ProjectServiceProvider();

export default ProjectService;