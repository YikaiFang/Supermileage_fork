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
            <div className="absolute inset-0 bottom-50 bg-gradient-to-b from-black/100 via-black/45 to-transparent"></div>
            <h1 className="relative z-10 text-6xl font-bold text-white drop-shadow-lg">
                {name}
            </h1>
        </header>
    );
}