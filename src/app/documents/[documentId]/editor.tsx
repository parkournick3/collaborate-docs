"use client";

import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [StarterKit];

const content = "<p>Hello World!</p>";

const Editor = () => {
  return (
    <div className="size-full overflow-x-auto px-4 bg-[#F9FBFD] print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorProvider
          editorProps={{
            attributes: {
              style: "padding-left: 56px; padding-rigth: 56px;",
              class:
                "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
            },
          }}
          extensions={extensions}
          content={content}
        ></EditorProvider>
      </div>
    </div>
  );
};

export default Editor;
