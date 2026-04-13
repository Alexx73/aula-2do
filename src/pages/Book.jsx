import React from "react";

const pdfUrl =
  "https://alexx73.github.io/aula-2do/assets/english_plus_starter_unit_1_2_3_new.pdf";

const viewer = `https://docs.google.com/gview?url=${pdfUrl}&embedded=true`;

export default function Book() {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex flex-col">

      <div className="flex justify-between items-center bg-gray-100 px-6 py-3 border-b">
        <h1 className="text-lg font-bold">
          📘 English Plus Starter - Units 1,2,3
        </h1>

        <a
          href={pdfUrl}
          download
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          ⬇ Descargar
        </a>
      </div>

      <iframe
        src={viewer}
        className="flex-1 w-full"
        title="Book"
      />

    </div>
  );
}