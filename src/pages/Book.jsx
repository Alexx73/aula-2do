import React from "react";

import pdf from "../assets/english_plus_starter_unit_1_2_3.pdf";
export default function Book()  {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex flex-col">

    
     
      {/* Visor PDF */}
      <iframe
        src={pdf}
        title="English Book"
        className="flex-1 w-full"
      />

    </div>
  );
};

