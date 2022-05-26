export const generateRandomNumber = (min: number, max: number): number => {
    const randomGeneratedNumber = Math.floor(Math.random() * max);
    return randomGeneratedNumber >= min ? randomGeneratedNumber : min;
}

export const randomNumber = (min: number, max: number) => Math.random() * (max - min) + min;
export const removeTail = (collection: any[]) => collection.splice(0, collection.length - 1);
export const lbToKg = (lb: number) => Math.round(lb * 0.453592);