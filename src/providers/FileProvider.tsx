import React from "react";

interface FileContextValue {
    content: string[][];
    title: string | null;
    setFile: (file: string, title: string) => void;
    clearFile: () => void;
}

export const INITIAL_VALUE: FileContextValue = {
    content: [],
    title: null,
    setFile: () => undefined,
    clearFile: () => undefined
}

export const FileContext = React.createContext<FileContextValue>(INITIAL_VALUE);

export const FileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [content, setContent] = React.useState<string[][]>(INITIAL_VALUE.content);
    const [title, setTitle] = React.useState<string | null>(INITIAL_VALUE.title);

    const clearFile = (): void => {
        setContent(INITIAL_VALUE.content);
        setTitle(INITIAL_VALUE.title);
    }

    const setFile = (fileContent: string, title: string): void => {
        setTitle(title);
        const content: string[][] = fileContent
            .split('\r\n')
            .map((row: string) => row.split(';'));

        setContent(content);
    };

    return <FileContext.Provider value={{ setFile, content, title, clearFile }}>{children}</FileContext.Provider>
};