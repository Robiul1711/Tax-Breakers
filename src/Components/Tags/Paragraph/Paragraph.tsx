import { cn } from "@/lib/utils";
import React from "react";

type ParagraphProps = {
  Txt: string | React.ReactNode;
  className?: string;
};

const Paragraph: React.FC<ParagraphProps> = ({ Txt, className }) => {
  return (
    <p
      className={cn("default-design", className)}
    >
      {Txt}
    </p>
  );
};

export default Paragraph;
