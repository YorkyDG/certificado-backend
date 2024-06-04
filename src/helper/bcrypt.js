import bcrypt from 'bcryptjs';

export const hash_password = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export const comparePassword = async (password, hashPassword) => {
    const validPassword = await bcrypt.compare(password, hashPassword);
    return validPassword;
}