import React from "react";

const activeProgramContext = React.createContext({
    activeProgram: null,
    setActiveProgram: () => {}, 
  });

export {activeProgramContext}