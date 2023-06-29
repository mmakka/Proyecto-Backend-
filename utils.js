import fs from "fs"

async function readFile(file){
    try{
        let result = await fs.promises.readFile(file, utf-8);
        let data = await JSON.parse(result);
    }catch (err){
        console.log(err);
    }
};

async function writeFile(file){
    try{
        await fs.promises(file,data);
        return true;
    }catch(err){
        console.log(err);
    }
}

async function deleteFile(file){
    try{
        await fs.promises.unlink(file);
        return true;
    }catch(err){
        console.log(err);
    }
};
export default {readFile, writeFile, deleteFile};