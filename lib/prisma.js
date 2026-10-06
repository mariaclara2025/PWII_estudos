const { PrismaClient } = require('@prisma/client');  

const prismaClient = prisma/client
const { better} =prisma/adapter-betterslqite3

const adapter = new better({
        url: process.env.DATABASEURL

}
)
prisma = {adapter}
module.exports = prisma
