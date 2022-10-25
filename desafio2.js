const fs = require("fs");

const pathToFile = "./users.json";

class Users {
    //Creo el save()
    save = async (user) => {
        if (!user.first_name || !user.username || !user.email ) {
            return{
                status: "error",
                message: "Missing required fields",
            };
        }
        try {
            if (fs.existsSync(pathToFile)) {
                let data = await fs.promises.readFile(pathToFile, "utf-8");
                let users = JSON.parse(data);
                let id = users.length + 1;
                user.id = id;
                users.push(user);
                await fs.promises.writeFile(pathToFile, JSON.stringify(users, null, 2));
                return{
                    status: "success",
                    message: "User created successfully",
                } 
            } else{
                user.id = 1;
                await fs.promises.writeFile(pathToFile, JSON.stringify([user], null, 2));
                return{
                    status: "success",
                    message: "User created successfully",
                } 
            }
        } catch (error) {
            return {
                status: "error",
                message: "Missing required fields",
            }
        }
    }

    //Creo el getAll()
    getAll = async() => {
        try {
            if (fs.existsSync(pathToFile)) {
                let data = await fs.promises.readFile(pathToFile, "utf-8");
                let users = JSON.parse(data);
                return {
                    status: "Success",
                    message: "User read successfully",
                    users: users,
                }
            } else{
                return {
                    status: "Error",
                    message: "File does not exits"
                }
            }
        } catch (error) {
            return {
                status: "Error",
                message: "Missing required fields",
            }
        }
    }

    //Creo el getById()
    getById = async(id) => {
        if (!id) {
            return {
                status: "Error",
                message: "ID is required",
            }
        }
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, "utf-8");
            let users = JSON.parse(data)
            let user = users.find(user => user.id == id)
            if (user) {
                return {
                    status: "Success",
                    user: user,
                }
            } else {
                return {
                    status: "Error",
                    message: "User not found",
                }
            }
        } else {
            return {
                status: "Error",
                message: "User not found",
            }
        }
    }

    //Creo el deleteById
    deleteById = async(id) => {
        if (!id) {
            return {
                status: "Error",
                message: "ID is required",
            }
        }
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, "utf-8");
            let users = JSON.parse(data)
            let deleteUser = users.filter((user) => user.id != id)
            await fs.promises.writeFile(pathToFile, JSON.stringify(deleteUser, null, 2))
            return {
                status: "Success",
                message: "User deleted successfully",
            }
        } else {
            return {
                status: "Error",
                message: "User not found",
            }
        }
    }
    
    //Creo el deleteAll()
    deleteAll = async () => {
        try {
            if (fs.existsSync(pathToFile)) {
                let newUser = [];
                await fs.promises.writeFile(pathToFile, JSON.stringify(newUser))
                return {
                    status: "Success",
                    message: "Users deleted successfully"
                }
            } else {
                return {
                    status: "Error",
                    Message: "No file found"
                }
            }
        } catch (error) {
            return {
                status: "Error",
                message: "Missing required fields",
            }
        }
    }        
}

module.exports = Users;