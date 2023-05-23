import React, { useState, useEffect } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Certificates.scss';

const Certificates = () => {

  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
  const [certificates, setCertificates] = useState([]);
  const [filterCertificates, setFilterCertificates] = useState([]);
   
useEffect(() => {
   const query = '*[_type == "certificates"]';

   client.fetch(query)
    .then((data) => {
      setCertificates(data);
      setFilterCertificates(data);
  })
  }, [])
  
const handleCertificateFilter = (item) => {
     setActiveFilter(item);
     setAnimateCard([{y:100, opacity: 0}]);

     setTimeout(() => {
      setAnimateCard([{y:0, opacity: 1}]);

      if(item === 'All'){
        setFilterCertificates(certificates);
      }
      else{
        setFilterCertificates(certificates.filter((certificate) => certificate.tags.includes(item)));
      }
     }, 500)
  }
  return (
    <>
     <h2 className="head-text">Unlocking <span>Achivements Through</span> Certification</h2>

     <div className='app__certificate-filter'>
      {['course', 'project', 'All'].map((item, index) => (
        <div
         key={index}
         onClick={() => handleCertificateFilter(item)} 
         className= {`app__certificate-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
        >
          {item}
       </div>
      ))}
     </div>

     <motion.div
       animate={animateCard}
       transition={{duration: 0.5 , delayChildren: 0.5}}
       className='app__certificate-portfolio'
     >
       {filterCertificates.map((certificate, index) => (
        <div className='app__certificate-item app__flex' key={index} >
           <div className='app__certificate-img app__flex'>
              <img src={urlFor(certificate.imgUrl)} alt={certificates.name} />

              <motion.div
              whileHover={{opacity: [0, 1]}}
              transition={{ duration: 0.25, ease: 'easeInOut', staggerDirection: 0.5}}
              className='app__certificate-hover app__flex'
              >
             <a href={certificate.certificateLink} target='blank' rel= 'noreffer'>
               <motion.div
               whileInView={{scale: [0, 1]}}
               whileHover={{scale: [1, 0.9]}}
               transition={{ duration: 0.25}}
               className='app__flex'
               >
                <AiFillEye/>
               </motion.div>
             </a>
             
              </motion.div>
           </div>

           <div className='app__certificate-content app__flex' >
             <h4 className='bold-text'>{certificate.title}</h4>
             

             
           </div>
        </div>
       ))}
     </motion.div>
    </>
  )
}

export default AppWrap(
    MotionWrap(Certificates, 'app__certificates'),
     'certificates',
    'app__primarybg'
     );
