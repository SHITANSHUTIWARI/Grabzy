const { PrismaClient } = require('@prisma/client');

// Singleton pattern for serverless
let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({
    log: ['error'],
  });
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: ['query', 'error', 'warn'],
    });
  }
  prisma = global.prisma;
}

// Test connection (non-blocking for serverless)
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  prisma.$connect()
    .then(() => {
      console.log('✅ Database connected successfully');
    })
    .catch((error) => {
      console.error('❌ Database connection failed:', error);
      if (process.env.NODE_ENV !== 'production') {
        process.exit(1);
      }
    });
}

module.exports = prisma;
