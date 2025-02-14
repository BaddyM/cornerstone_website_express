// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    // Seed the User table
    await prisma.news.createMany({
      data: [
        { title: "cornerstone high school nangabo music, dance and drama competitions", image: "mdd.jpg",content:"cornerstone recently had mdd competitions where all houses had to competete in various activities like cultural dances, skits and many other activities." },
        { title: "seniot 6 and senior 4 prom", image: "prom.jpg",content:"As the candidates prepared for their final examinations, cornerstone high school nangbao prepared for them a farewell party in order to prepare them for their final examinations at the different levels." },
        { title: "Russia says Ukraine will be involved in peace talks as Zelensky warns against trusting Putin", image: "ukraine.webp",content:"It comes after US President Donald Trump spoke to both the Ukrainian and Russian leaders, and suggested negotiations to end the war would follow." },
        { title: "Trump announces plan for 'reciprocal' tariffs on US trading partners", image: "1ef19f60-ea41-11ef-bd1b-d536627785f2.jpg.webp",content:"No starting date has been confirmed and Trump has previously used the threat of tariffs as a negotiation tactic." },
      ],
    });

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();