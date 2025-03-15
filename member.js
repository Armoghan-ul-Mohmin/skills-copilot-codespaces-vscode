function skillsMember() {
  return {
    name: 'Armoghan-ul-Mohmin',
    age: 22,
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'C++', 'Linux', 'Git', 'Github'],
    bio: 'I am a Digital Forensic and Cyber Security student, I love to code and learn new things.',
    contact: {
        portfolio: 'https://armoghan.netlify.app/',
        Blogs: 'https://armoghan-blogs-2.netlify.app/',
    },
    education: {
        degree: 'Bachelor of Science in Digital Forensics and Cyber Security',
        university: 'Lahore Garrison University',
        graduationYear: 2025
    },
    projects: [
        {
            name: 'Personal Portfolio',
            description: 'A personal portfolio website to showcase my projects and skills.',
            link: 'https://armoghan.netlify.app/'
        },
        {
            name: 'Blog Platform',
            description: 'A platform for writing and sharing technical blogs.',
            link: 'https://armoghan-blogs-2.netlify.app/'
        }
    ]
  };
}

const member = skillsMember();

console.log(`Name: ${member.name}`);
console.log(`Age: ${member.age}`);
console.log(`Skills: ${member.skills.join(', ')}`);
console.log(`Bio: ${member.bio}`);
console.log('Contact:');
console.log(`  Portfolio: ${member.contact.portfolio}`);
console.log(`  Blogs: ${member.contact.Blogs}`);
console.log('Education:');
console.log(`  Degree: ${member.education.degree}`);
console.log(`  University: ${member.education.university}`);
console.log(`  Graduation Year: ${member.education.graduationYear}`);
console.log('Projects:');
member.projects.forEach(project => {
  console.log(`  Name: ${project.name}`);
  console.log(`  Description: ${project.description}`);
  console.log(`  Link: ${project.link}`);
});