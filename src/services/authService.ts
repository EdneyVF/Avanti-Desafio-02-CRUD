import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export class AuthService {
  async signup(email: string, password: string, isAdmin: boolean) {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        isAdmin
      },
    })
    return user
  }
  
  
  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) throw new Error('No such user found')

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) throw new Error('Invalid password')

    return {
      token: jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, process.env.SECRET_KEY_JWT as string),
      user,
    }
  }
  
}
