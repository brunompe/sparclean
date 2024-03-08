import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Define admin user details (replace with your desired values)
  const adminUser: { email: string; password: string; name: string } = {
    email: 'admin@yourdomain.com',
    password: await bcrypt.hash('adminpassword', 10), // Hash the password using bcrypt
    name: 'Admin',
  };

  // Create admin user
  try {
    await prisma.user.create({
      data: adminUser,
    });
    console.log(
      `Admin user with email "${adminUser.email}" created successfully!`,
    );
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
