import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useLocation } from "react-router";

const PPTViewer = () => {
  const { state } = useLocation();
  // const url = URL.createObjectURL(state.fileContent);

  const docs = [
    {
      uri: state.fileContent,
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex justify-center items-center">
      {/* <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        config={{
          header: {
            disableHeader: false,
            disableFileName: false,
            retainURLParams: false,
          },
        }}
        style={{ height: 500 }}
      /> */}
      {/* <iframe
        title="Tab"
        src={state.fileContent}
        width="100%"
        height="600px"
        frameBorder="0"
      /> */}
      <embed
        src={state.fileContent}
        type="application/vnd.ms-powerpoint"
        height={800}
        width={500}
      />
    </div>
  );
};

export default PPTViewer;
