const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function seed() {
  try {
    console.log('🌱 Starting database seed...');

    // Create admin user
    const hashedAdminPassword = await bcrypt.hash('Admin@123', 10);
    
    const admin = await prisma.user.upsert({
      where: { email: 'admin@blinket.com' },
      update: {},
      create: {
        email: 'admin@blinket.com',
        password: hashedAdminPassword,
        name: 'Admin User',
        role: 'ADMIN',
        isVerified: true,
      },
    });

    console.log('✅ Admin user created:', admin.email);

    // Create test users
    const hashedUserPassword = await bcrypt.hash('User@123', 10);
    
    const testUsers = [
      {
        email: 'john@example.com',
        password: hashedUserPassword,
        name: 'John Doe',
        role: 'USER',
        isVerified: true,
      },
      {
        email: 'jane@example.com',
        password: hashedUserPassword,
        name: 'Jane Smith',
        role: 'USER',
        isVerified: true,
      },
      {
        email: 'test@example.com',
        password: hashedUserPassword,
        name: 'Test User',
        role: 'USER',
        isVerified: true,
      },
    ];

    for (const userData of testUsers) {
      await prisma.user.upsert({
        where: { email: userData.email },
        update: {},
        create: userData,
      });
    }

    console.log('✅ Test users created (password: User@123)');

    // Create sample products (25 products for proper pagination)
    const products = [
      // Electronics
      {
        name: 'Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        price: 99.99,
        stock: 50,
        category: 'Electronics',
        imageUrls: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'],
      },
      {
        name: 'Smart Watch',
        description: 'Fitness tracking smart watch with heart rate monitor',
        price: 199.99,
        stock: 30,
        category: 'Electronics',
        imageUrls: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'],
      },
      {
        name: 'Bluetooth Speaker',
        description: 'Portable waterproof bluetooth speaker',
        price: 79.99,
        stock: 75,
        category: 'Electronics',
        imageUrls: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500'],
      },
      {
        name: 'Wireless Mouse',
        description: 'Ergonomic wireless mouse with precision tracking',
        price: 29.99,
        stock: 120,
        category: 'Electronics',
        imageUrls: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500'],
      },
      {
        name: 'Mechanical Keyboard',
        description: 'RGB mechanical keyboard with blue switches',
        price: 89.99,
        stock: 45,
        category: 'Electronics',
        imageUrls: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500'],
      },
      {
        name: 'Webcam HD',
        description: '1080p HD webcam with built-in microphone',
        price: 59.99,
        stock: 60,
        category: 'Electronics',
        imageUrls: ['https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500'],
      },
      {
        name: 'Portable Charger',
        description: '20000mAh power bank with fast charging',
        price: 39.99,
        stock: 90,
        category: 'Electronics',
        imageUrls: ['https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500'],
      },
      {
        name: 'Wireless Earbuds',
        description: 'True wireless earbuds with charging case',
        price: 69.99,
        stock: 85,
        category: 'Electronics',
        imageUrls: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500'],
      },
      
      // Accessories
      {
        name: 'Laptop Backpack',
        description: 'Durable laptop backpack with multiple compartments',
        price: 49.99,
        stock: 100,
        category: 'Accessories',
        imageUrls: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500'],
      },
      {
        name: 'USB-C Cable',
        description: 'Fast charging USB-C cable, 6ft length',
        price: 12.99,
        stock: 200,
        category: 'Accessories',
        imageUrls: ['https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500'],
      },
      {
        name: 'Phone Stand',
        description: 'Adjustable aluminum phone stand',
        price: 19.99,
        stock: 150,
        category: 'Accessories',
        imageUrls: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500'],
      },
      {
        name: 'Laptop Sleeve',
        description: 'Protective laptop sleeve 13-15 inch',
        price: 24.99,
        stock: 110,
        category: 'Accessories',
        imageUrls: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500'],
      },
      {
        name: 'Cable Organizer',
        description: 'Cable management box for desk organization',
        price: 15.99,
        stock: 130,
        category: 'Accessories',
        imageUrls: ['https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500'],
      },
      {
        name: 'Desk Mat',
        description: 'Large gaming desk mat with stitched edges',
        price: 22.99,
        stock: 95,
        category: 'Accessories',
        imageUrls: ['https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500'],
      },
      
      // Clothing
      {
        name: 'Cotton T-Shirt',
        description: 'Premium cotton t-shirt, multiple colors',
        price: 19.99,
        stock: 200,
        category: 'Clothing',
        imageUrls: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500'],
      },
      {
        name: 'Hoodie',
        description: 'Comfortable pullover hoodie with pocket',
        price: 44.99,
        stock: 80,
        category: 'Clothing',
        imageUrls: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500'],
      },
      {
        name: 'Baseball Cap',
        description: 'Adjustable baseball cap with embroidered logo',
        price: 16.99,
        stock: 140,
        category: 'Clothing',
        imageUrls: ['https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500'],
      },
      {
        name: 'Socks Pack',
        description: 'Pack of 5 comfortable cotton socks',
        price: 14.99,
        stock: 180,
        category: 'Clothing',
        imageUrls: ['https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500'],
      },
      
      // Home
      {
        name: 'Coffee Mug',
        description: 'Ceramic coffee mug with handle, 12oz',
        price: 9.99,
        stock: 250,
        category: 'Home',
        imageUrls: ['https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500'],
      },
      {
        name: 'Water Bottle',
        description: 'Stainless steel insulated water bottle 32oz',
        price: 24.99,
        stock: 160,
        category: 'Home',
        imageUrls: ['https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500'],
      },
      {
        name: 'Desk Lamp',
        description: 'LED desk lamp with adjustable brightness',
        price: 34.99,
        stock: 70,
        category: 'Home',
        imageUrls: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500'],
      },
      {
        name: 'Plant Pot',
        description: 'Ceramic plant pot with drainage hole',
        price: 12.99,
        stock: 120,
        category: 'Home',
        imageUrls: ['https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500'],
      },
      {
        name: 'Wall Clock',
        description: 'Modern minimalist wall clock',
        price: 29.99,
        stock: 85,
        category: 'Home',
        imageUrls: ['https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500'],
      },
      {
        name: 'Throw Pillow',
        description: 'Decorative throw pillow with cover',
        price: 18.99,
        stock: 110,
        category: 'Home',
        imageUrls: ['https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500'],
      },
      {
        name: 'Candle Set',
        description: 'Set of 3 scented candles',
        price: 26.99,
        stock: 95,
        category: 'Home',
        imageUrls: ['https://images.unsplash.com/photo-1602874801006-e24aa9f2d6d7?w=500'],
      },
    ];

    for (const product of products) {
      await prisma.product.upsert({
        where: { id: 'temp-' + product.name.replace(/\s/g, '-').toLowerCase() },
        update: {},
        create: product,
      }).catch(() => {
        // If upsert fails (no unique field), just create
        return prisma.product.create({ data: product });
      });
    }

    console.log('✅ Sample products created');
    console.log('\n🎉 Seed completed successfully!');
    console.log('\nDefault Admin Credentials:');
    console.log('Email: admin@blinket.com');
    console.log('Password: Admin@123\n');

  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
