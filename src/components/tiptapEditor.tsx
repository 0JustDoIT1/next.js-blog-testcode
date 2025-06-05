"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "tiptap-markdown";
import TiptapToolbar from "./tiptapToolbar";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { Dispatch, SetStateAction, useEffect } from "react";

interface ITiptapEditor {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

const TiptapEditor = ({ text, setText }: ITiptapEditor) => {
  useEffect(() => {
    if (!text) editor?.commands.clearContent();
  }, [text]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image.configure({
        allowBase64: true,
        inline: true,
      }),
      Placeholder.configure({
        placeholder: "TipTap Editor 입니다.",
      }),
      Markdown,
    ],
    content: text,
    onUpdate({ editor }) {
      const value = editor.isEmpty ? "" : editor.getHTML();
      setText(value);
    },
  });

  return (
    <div
      id="tiptap-box"
      className="w-[600px] h-[400px] rounded-md bg-white text-sm text-gray-800 box-border ring-1 shadow-xs ring-black outline-none"
    >
      {editor && <TiptapToolbar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
