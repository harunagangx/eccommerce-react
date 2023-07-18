import React, { useEffect, useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import '../../sass/components/ScrollToTop.scss';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const goTopFunc = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="scrollTop__btn">
      {' '}
      {visible && (
        <BiArrowToTop
          className="icon__position icon__style"
          onClick={goTopFunc}
        />
      )}{' '}
    </div>
  );
};

export default ScrollToTop;
