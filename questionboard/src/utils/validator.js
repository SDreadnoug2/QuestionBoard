import { useEffect, useState } from "react";


const useValidation = (field1, field2, field3) => {
    const [valid, setValid] = useState(false);
   useEffect(() => {
    if(field1 && field2 && field3){
        setValid(true);
    } else {
        setValid(false);
    }

   });
   return valid;
};

export default useValidation;