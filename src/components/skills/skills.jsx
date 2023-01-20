import './style.css';


export default function Skills() {
  const skills = ['HTML', '', 'CSS', '', 'JavaScript', '', 'TypeScript', '', 'Angular', '', 'React', '', 'Python', '', 'PostgreSQL'];

  return (
    <main className="section">
            <div className="skills">
                <h2 className="title-2">Skills</h2>
                <div className='skills-container'>
                  {skills.map((skill, index) => (
                    <div className={'skill-'+(index%2)} key={index}>
                      {skill}
                    </div>
                  ))}
                </div>
            </div>
        </main>
  );
}