export class MyException extends Error {

}

export const callMe = (name) => {
    if (name === "Ibra") {
        throw new MyException("Ups my exceptions happens");
    } else {
        return "OK";
    }
};