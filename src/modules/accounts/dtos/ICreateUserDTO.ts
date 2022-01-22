interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    is_admin?: boolean;
    is_active?: boolean;
}

export { ICreateUserDTO }