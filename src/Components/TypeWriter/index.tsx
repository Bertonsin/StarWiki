import { Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

interface typeWriterProps {
  text: string;
}

export function TypeWriter({ text }: typeWriterProps) {
  const location = useLocation();
  const index = useRef(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    index.current = 0;
    setCurrentText("");
  }, [text]);

  useEffect(() => {
    const timeOutValue = setTimeout(() => {
      setCurrentText((value: string) => value + text.charAt(index.current));
      index.current += 1;
    }, 50);
    return () => clearTimeout(timeOutValue);
  }, [currentText, text, location]);

  return (
    <Text textAlign={"center"} id={"text"} fontSize={20} mb={-50}>
      {currentText}
    </Text>
  );
}
