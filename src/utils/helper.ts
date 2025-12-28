import { clsx, ClassValue } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
    return twMerge(clsx(args));
};

export const useDebouncedCallback = <T extends (...args: Parameters<T>) => void>(callback: T, delay: number): ((...args: Parameters<T>) => void) => {
    return React.useMemo(() => {
        let timer: ReturnType<typeof setTimeout> | null = null;

        return (...args: Parameters<T>) => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                callback(...args);
            }, delay);
        };
    }, [callback, delay]);
};

export const timeFormatter = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedTime = [];

    if (hours > 0) {
        formattedTime.push(`${hours} h`);
    }
    if (minutes > 0) {
        formattedTime.push(`${minutes} min`);
    }
    if (seconds > 0 || timeInSeconds === 0) {
        formattedTime.push(`${seconds} sec`);
    }

    return formattedTime.join(" ");
};
