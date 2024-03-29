import React, { useEffect, useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { motion } from 'framer-motion';

import './Skills.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
        setExperiences(data);
      });

    client.fetch(skillsQuery).then((data) => {
        setSkills(data);
      });

  }, []);

  return (
    <>
      <h2 className='head-text'><span>Skill</span> & <span>Experience</span></h2>

      <div className='app__skills-container'>
        <motion.div className='app__skils-list'>
          {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__skills-item app__flex'
                key={skill.name}
              >
                <div className='app__flex' style={{ backgroundColor: "#656565" }}>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className='p-text' style={{color: '#C7C3D4'}}>{skill.name}</p>
              </motion.div>
            ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {experiences.map((work) => (
            <motion.div
              className='app__skills-exp-item'
              key={experiences.year}
            >
              <div className='app__skils-exp-year'>
                <p className='bold-text'>{experiences.year}</p>
              </div>

              <motion.div className='app__skills-exp-works'>
                {experiences.works.map((work) => (
                  <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className='app__skills-exp-work'
                    data-tip
                    data-for={work.name}
                    key={work.name}
                  >
                    <h4 className='bold-text'>{work.name}</h4>
                    <p className='p-text'>{work.company}</p>
                  </motion.div>
    
                  <ReactTooltip
                    id={work.name}
                    effect='solid'
                    arrowColor='#fff'
                    className='skills-tooltip'
                  >
                    {work.description}
                  </ReactTooltip>
                </>
                ))}
              </motion.div>
            </motion.div>
          ))};
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__blackbg',
);