import React from 'react';
import '../stylesheets/subjectCards/subjectCard.scss';

const SubjectCard = ({ image, title, link }) => {
  return (
    <div className="subject-card">
      <div className="subject-image" style={{ backgroundImage: `url(${image})` }}></div>
      <a href={link} className="subject-title">
        {title}
      </a>
    </div>
  );
};

export default SubjectCard;
