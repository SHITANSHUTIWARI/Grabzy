# 🎨 Blinket Color Guide - Quick Reference

## 🎯 Main Colors

```
┌─────────────────────────────────────────────────────────────┐
│                    BLINKIT COLOR PALETTE                    │
└─────────────────────────────────────────────────────────────┘

🟢 PRIMARY BRAND GREEN
   Hex: #0C831F
   Use: Logo, navigation, primary buttons, brand elements
   Tailwind: bg-brand-green, text-brand-green

🟡 ACCENT YELLOW  
   Hex: #FFDE21
   Use: CTA buttons, badges, highlights, special offers
   Tailwind: bg-brand-yellow, text-brand-yellow

⚪ WHITE
   Hex: #FFFFFF
   Use: Backgrounds, cards, containers
   Tailwind: bg-white

⚫ BLACK/DARK GREY
   Hex: #111827
   Use: Headings, primary text
   Tailwind: text-gray-900

🔘 MEDIUM GREY
   Hex: #4B5563
   Use: Body text, descriptions
   Tailwind: text-gray-600

🔘 LIGHT GREY
   Hex: #F9FAFB
   Use: Section backgrounds, subtle contrast
   Tailwind: bg-gray-50
```

## 📋 Usage Rules

### DO ✅
- Use green (#0C831F) for brand identity
- Use yellow (#FFDE21) for important CTAs
- Use white backgrounds for clean look
- Use black/dark grey for text
- Keep it minimal (2-3 colors max)

### DON'T ❌
- Don't use too many colors
- Don't use low contrast combinations
- Don't overuse yellow (only for CTAs)
- Don't use colored backgrounds everywhere

## 🎨 Component Examples

### Button Styles

```
PRIMARY CTA (Most Important)
┌──────────────────┐
│   Shop Now →     │  ← Yellow bg (#FFDE21)
└──────────────────┘     Black text

SECONDARY (Important)
┌──────────────────┐
│   Add to Cart    │  ← Green bg (#0C831F)
└──────────────────┘     White text

TERTIARY (Less Important)
┌──────────────────┐
│     Login        │  ← White bg, green border
└──────────────────┘     Green text

DISABLED
┌──────────────────┐
│  Out of Stock    │  ← Light grey bg
└──────────────────┘     Grey text
```

### Header

```
┌─────────────────────────────────────────────────────────┐
│ 🟢 Blinket    Products  Cart 🟡2  Login  Register      │
│                                                         │
│ White background, green logo, yellow cart badge        │
└─────────────────────────────────────────────────────────┘
```

### Product Card

```
┌──────────────────────┐
│                      │
│   [Product Image]    │
│                      │
│  Product Name        │  ← Black text
│  Description...      │  ← Grey text
│                      │
│  ₹99.99   Stock: 50  │  ← Black price, grey badge
│                      │
│  ┌────────────────┐  │
│  │  Add to Cart   │  │  ← Green button
│  └────────────────┘  │
└──────────────────────┘
White card, subtle shadow
```

### Hero Section

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              Welcome to Blinket                         │
│         Discover amazing products                       │
│                                                         │
│              ┌──────────────┐                          │
│              │  Shop Now →  │  ← Yellow button         │
│              └──────────────┘                          │
│                                                         │
└─────────────────────────────────────────────────────────┘
Green background (#0C831F), white text
```

## 🎯 When to Use Each Color

### Green (#0C831F)
- ✅ Logo and brand name
- ✅ Navigation active states
- ✅ Primary action buttons
- ✅ Success messages
- ✅ Checkmarks and confirmations

### Yellow (#FFDE21)
- ✅ "Shop Now" buttons
- ✅ "Buy Now" / "Add to Cart" (alternative)
- ✅ Cart item count badges
- ✅ Special offer tags
- ✅ Important notifications

### White (#FFFFFF)
- ✅ Page backgrounds
- ✅ Card backgrounds
- ✅ Modal backgrounds
- ✅ Input fields
- ✅ Clean, spacious areas

### Black/Dark Grey
- ✅ Headings (H1, H2, H3)
- ✅ Product names
- ✅ Prices
- ✅ Important text
- ✅ Body copy

### Light Grey
- ✅ Section backgrounds
- ✅ Disabled states
- ✅ Borders
- ✅ Subtle separators
- ✅ Secondary information

## 📐 Spacing & Layout

```
Padding:
- Cards: p-6 (24px)
- Buttons: px-6 py-3 (24px x 12px)
- Sections: py-16 (64px)
- Container: px-4 (16px)

Margins:
- Between sections: mb-8 (32px)
- Between elements: mb-4 (16px)
- Between cards: gap-6 (24px)

Rounded Corners:
- Buttons: rounded-xl (12px)
- Cards: rounded-2xl (16px)
- Badges: rounded-full

Shadows:
- Cards: shadow-md
- Buttons: shadow-md
- Hover: shadow-lg
```

## 🎨 Color Combinations

### ✅ GOOD Combinations

```
Green + White
🟢 #0C831F on ⚪ #FFFFFF
Perfect for buttons, high contrast

Yellow + Black
🟡 #FFDE21 on ⚫ #111827
Great for CTAs, very visible

Black + White
⚫ #111827 on ⚪ #FFFFFF
Best for text, maximum readability

Green + Light Grey
🟢 #0C831F on 🔘 #F9FAFB
Good for sections, subtle
```

### ❌ AVOID Combinations

```
Green + Yellow
Too much color, overwhelming

Yellow + White
Low contrast, hard to read

Grey + Grey
Not enough contrast

Multiple bright colors
Confusing, unprofessional
```

## 🚀 Quick Implementation

### In Tailwind CSS

```jsx
// Primary Button (Green)
<button className="bg-brand-green text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-green-dark">
  Add to Cart
</button>

// CTA Button (Yellow)
<button className="bg-brand-yellow text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-400">
  Shop Now →
</button>

// Secondary Button (White with green border)
<button className="bg-white border-2 border-brand-green text-brand-green px-6 py-3 rounded-xl font-semibold hover:bg-brand-green hover:text-white">
  Login
</button>

// Product Card
<div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
  <h3 className="text-xl font-bold text-gray-900">Product Name</h3>
  <p className="text-gray-600">Description</p>
  <span className="text-2xl font-bold text-gray-900">₹99.99</span>
</div>

// Badge
<span className="bg-brand-yellow text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
  2
</span>
```

## ✨ Final Tips

1. **Keep it simple**: Use only 2-3 colors per component
2. **High contrast**: Always ensure text is readable
3. **Consistent**: Use same colors for same purposes
4. **Whitespace**: Don't be afraid of empty space
5. **Test**: Check on different screens and devices

---

**Remember**: Green for brand, Yellow for action, White for clean! 🎨
