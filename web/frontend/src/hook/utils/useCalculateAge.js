// useCalculateAge.js

import { useState, useEffect } from 'react';

// Hook personalizado para calcular la edad
const useCalculateAge = (birthDate) => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const calculateAge = (birthDate) => {
      const today = new Date();
      const birth = new Date(birthDate);
      let age = today.getFullYear() - birth.getFullYear();

      const monthDifference = today.getMonth() - birth.getMonth();
      const dayDifference = today.getDate() - birth.getDate();

      if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
      }

      return age;
    };

    setAge(calculateAge(birthDate));
  }, [birthDate]);

  return age;
};

export default useCalculateAge; // Exporta el hook
