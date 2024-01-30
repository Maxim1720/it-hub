import { Project } from "./Project";

export type UserRegistration = {
    email: string,
    password: string,
    username: string
};

export type UserAuthorization = {
    username: string,
    password: string
};

export type UserCurrent = {
    username: string,
    projects: Project[]
}

export type User = {
    
}