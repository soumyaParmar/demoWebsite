"use client";

// components/CodeBlock.tsx
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";

const CopyToClipboard = dynamic(() => import("react-copy-to-clipboard"), {
  ssr: false,
});

const CodeContainer = styled.div`
  position: relative;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 24px;
`;

const CodeContent = styled.pre`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  overflow-x: auto;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
`;


const CodeBlock = ({ children }: { children: string }) => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!mounted) return null; // Prevents rendering on the server

  return (
    <CodeContainer>
      <CopyToClipboard text={children} onCopy={handleCopy}>
        <CopyButton>{copied ? <DoneIcon /> : <ContentCopyIcon />}</CopyButton>
      </CopyToClipboard>
      <CodeContent>{children}</CodeContent>
    </CodeContainer>
  );
};

export default CodeBlock;
