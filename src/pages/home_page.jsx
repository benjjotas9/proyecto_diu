// src/pages/SubjectsGrid.jsx
import React from 'react';
import SubjectCard from '../components/subjectCard';
import '../stylesheets/subjectCards/subjectGrid.scss';

import fisicaImage from '../assets/fisica.png';
import economiaImage from '../assets/comercial.png';
import informaticaImage from '../assets/informatica.png';
import industrialImage from '../assets/industrial.png';
import efiImage from '../assets/efi.png';


const subjects = [
  {
    image: fisicaImage,
    title: 'Física General III',
    link: '#'
  },
  {
    image: economiaImage,
    title: 'Economía I-A',
    link: '#'
  },
  {
    image: informaticaImage,
    title: 'Investigación de Operaciones',
    link: '#'
  },
  {
    image: industrialImage,
    title: 'Información y Matematicas Financieras',
    link: '#'
  },
  {
    image: efiImage,
    title: 'Tenis',
    link: '#'
  },
  // Agrega más asignaturas aquí
];

const SubjectGrid = () => {
  return (
    <div className="subject-grid">
      {subjects.map((subject, index) => (
        <SubjectCard key={index} image={subject.image} title={subject.title} link={subject.link} />
      ))}
    </div>
  );
};

export default SubjectGrid;
