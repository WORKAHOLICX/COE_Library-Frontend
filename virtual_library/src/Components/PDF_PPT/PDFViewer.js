import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useLocation } from "react-router";

const PDFViewer = () => {
  const newPlugin = defaultLayoutPlugin();
  const { state } = useLocation();
  return (
    <div className="w-full h-full overflow-y-auto flex justify-center items-center">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={state.fileContent} plugins={[newPlugin]} />
      </Worker>
    </div>
  );
};

export default PDFViewer;
