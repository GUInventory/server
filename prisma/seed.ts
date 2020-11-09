import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'
import * as faker from 'faker'

const prisma = new PrismaClient()
const numberOfUsers = 10
const numberOfWarehouses = 3

const main = async () => {
  console.log('🚩 Create users -------------')
  for (let i = 0; i < numberOfUsers; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.exampleEmail(),
        name: faker.name.findName(),
        password: await hash('password', 10),
      },
    })
    console.log(`#${user.id} - ${user.email}`)
  }
  console.log('🟢 Users succesfully created ')

  console.log('🚩 Create warehouses -----------')
  for (let i = 0; i < numberOfWarehouses; i++) {
    const warehouse = await prisma.warehouse.create({
      data: {
        name: faker.lorem.words(3),
        sizeX: faker.random.number(10000),
        sizeY: faker.random.number(20000),
        sizeZ: faker.random.number(800),
        storages: {
          create: {
            name: faker.lorem.words(1),
            positionX: faker.random.number(9000),
            positionY: faker.random.number(9000),
            sizeX: faker.random.number(1000),
            sizeY: faker.random.number(100),
            sizeZ: faker.random.number(600),
            items: {
              create: {
                name: faker.lorem.words(1),
                positionX: faker.random.number(800),
                positionY: faker.random.number(80),
                positionZ: faker.random.number(500),
                sizeX: faker.random.number(100),
                sizeY: faker.random.number(20),
                sizeZ: faker.random.number(100),
                value: faker.random.number(10000),
                image: faker.image.imageUrl(500, 500),
              },
            },
          },
        },
      },
    })
    console.log(`#${warehouse.id} - ${warehouse.name}`)
  }
  console.log('🟢 Warehouses succesfully created ')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
