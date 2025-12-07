const prisma = require('../config/database');

// Get all products with filters, search, and pagination
const getProducts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 12,
      category,
      price_min,
      price_max,
      search,
    } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take = parseInt(limit);

    // Build filter conditions
    const where = {};

    if (category) {
      where.category = category;
    }

    if (price_min || price_max) {
      where.price = {};
      if (price_min) where.price.gte = parseFloat(price_min);
      if (price_max) where.price.lte = parseFloat(price_max);
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    // Get total count for pagination
    const totalCount = await prisma.product.count({ where });

    // Get products
    const products = await prisma.product.findMany({
      where,
      skip,
      take,
      orderBy: { createdAt: 'desc' },
    });

    const totalPages = Math.ceil(totalCount / take);

    res.json({
      products,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        totalCount,
        limit: take,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch products', error: error.message });
  }
};

// Get single product by ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ product });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch product', error: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
};
