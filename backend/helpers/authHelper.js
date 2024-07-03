import bcrypt from 'bcrypt'

export const hashPasswrod = async(password) =>{
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds)
        return hashedPassword;
    }
    catch(error){
        console.log(error);
    }
}

export const comparePasswrod = async(passord,hashedPassword) => {
    return bcrypt.comparePasswrod(passord,hashedPassword);
}