// data.js

const resumeData = {
    "personal_information": {
      "name": "Yadnesh Pathak",
      "contact": "pathakyadnesh@gmail.com",
      "phone": "7588934417"
    },
    "education": [
      {
        "degree": "Bachelor of Technology",
        "major": "AIDS",
        "institution": "VIT Pune College",
        "year": "2024"
      }
    ],
    "work_experience": [
      {
        "job_title": "Web devlopment Intern",
        "company": "Anand construction",
        "duration": "Dec 2023 - feb 2024",
        "responsibilities": "Worked on web devlopmnet projects"
      }
    ],
    "skills": [
      "Python",
      "C",
      "C++",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "MongoDB",
      "SQL",
      "Pandas",
      "Numpy",
      "Scikit-Learn",
      "Matplotlib",
      "Power BI",
      "OpenCV",
      "Keras",
      "TensorFlow",
      "Microsoft Excel",
      "Kali Linux",
      "Metasploit",
      "Burp Suite"
    ],
    "projects": [
      {
        "title": "ML Image Caption Generator",
        "description": "Developed a CNN model to generate captions for images.",
        "technologies": ["Numpy", "Keras", "TensorFlow", "Matplotlib", "Pillow"]
      }
    ]
  };
  
  // Function to display resume data on the webpage
  function displayResumeData() {
    const container = document.getElementById('resume-container');
    
    container.innerHTML = `
      <h2>Personal Information</h2>
      <p><strong>Name:</strong> ${resumeData.personal_information.name}</p>
      <p><strong>Contact:</strong> ${resumeData.personal_information.contact}</p>
      <p><strong>Phone:</strong> ${resumeData.personal_information.phone}</p>
      
      <h2>Education</h2>
      ${resumeData.education.map(edu => `
        <p><strong>Degree:</strong> ${edu.degree}<br>
           <strong>Major:</strong> ${edu.major}<br>
           <strong>Institution:</strong> ${edu.institution}<br>
           <strong>Year:</strong> ${edu.year}</p>
      `).join('')}
      
      <h2>Work Experience</h2>
      ${resumeData.work_experience.map(work => `
        <p><strong>Job Title:</strong> ${work.job_title}<br>
           <strong>Company:</strong> ${work.company}<br>
           <strong>Duration:</strong> ${work.duration}<br>
           <strong>Responsibilities:</strong> ${work.responsibilities}</p>
      `).join('')}
      
      <h2>Skills</h2>
      <ul>
        ${resumeData.skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
      
      <h2>Projects</h2>
      ${resumeData.projects.map(project => `
        <p><strong>Title:</strong> ${project.title}<br>
           <strong>Description:</strong> ${project.description}<br>
           <strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
      `).join('')}
    `;
  }
  
  // Call the function to display the data when the page loads
  window.onload = displayResumeData;
  