import data from '../api/skills.json';

function Skills() {
    const skillCategories = data;

    return (
        <div className="container skills-section">
            <h3 className='font-weight-bold text-center pb-5' data-aos="fade-up">Skills & Technologies</h3>

            <div className="skills-container">
                {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className="skill-category" data-aos="fade-up" data-aos-delay={catIndex * 100}>
                        <h5 className="category-title">{category.category}</h5>
                        <div className="skills-grid">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="skill-card">
                                    <div className="skill-icon-wrapper">
                                        <i className={skill.icon}></i>
                                    </div>
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.text}</span>
                                        <div className="skill-level">
                                            <div
                                                className="skill-level-fill"
                                                style={{width: `${skill.level || 80}%`}}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;