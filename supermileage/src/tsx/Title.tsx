"use client";
import { JSX } from "react";

type TitleProps = {
    imageSrcPath: string;
    name: string;
    children?: React.ReactNode;
};

export default function Title({ imageSrcPath, name }: TitleProps): JSX.Element {
    return (
        <header
            className="relative h-[85vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSrcPath})` }}
        >
            <div className="absolute inset-0 bottom-70 bg-gradient-to-b from-black/100 via-black/50 to-transparent"></div>
            <h1 
                className="relative text-6xl font-bold text-white"
                style={{filter: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.3)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.8))'}}
            >
                {name}
            </h1>
        </header>
    );
}