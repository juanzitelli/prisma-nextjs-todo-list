import prisma from "./../lib/prisma";

const main = async () => {
  const firstUser = await prisma.user.upsert({
    where: {
      id: "a9355545-8eac-4c41-9691-a3da5ed45e12",
    },
    create: {
      name: "Pepe Jorge",
    },
    update: {},
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
