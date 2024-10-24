// Fetch the project data
function fetchProjectData() {
    return fetch('projects.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => data.projects) // Return the array of projects
      .catch(error => {
        console.error('Error fetching the projects:', error);
      });
  }
  
  // Update the loadProjects function to accept the project data
  function loadProjects(projectData) {
    const projectList = document.querySelector('.project-list');
    
    projectData.forEach(project => {
      // Create project div
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project', project.id);
  
      // Create project title
      const titleDiv = document.createElement('div');
      titleDiv.classList.add('project-title');
      const title = document.createElement('h5');
      title.textContent = project.title;
      titleDiv.appendChild(title);
  
      // Create project description
      const descDiv = document.createElement('div');
      descDiv.classList.add('project-desc');
      const desc = document.createElement('p');
      desc.textContent = project.description;
      descDiv.appendChild(desc);
  
      // Add title and description to project div
      projectDiv.appendChild(titleDiv);
      projectDiv.appendChild(descDiv);
  
      // Optionally, you could add the image and a link to the project
      const projectImage = document.createElement('img');
      projectImage.src = project.pic_url;
      projectImage.alt = project.title;
      projectImage.style.width = "100%";
      projectDiv.insertBefore(projectImage, titleDiv);
  
      const projectLink = document.createElement('a');
      projectLink.href = project.url;
      projectLink.textContent = "Learn More";
      projectLink.target = "_blank";
      descDiv.appendChild(projectLink);
  
      // Append the project div to the project list
      projectList.appendChild(projectDiv);
    });
  }
  
  // Call fetchProjectData and load the projects when the window loads
  window.onload = () => {
    fetchProjectData().then(projectData => {
      loadProjects(projectData);
    });
  };
  