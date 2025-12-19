const base = process.env.PUBLIC_URL || ''
const products = [
  { id: 'paracetamol-500', name: 'Paracetamol 500mg', desc: 'Pain & fever relief - 10 tablets', price: 35, stock: 120, image: base + '/images/products/paracetamol-500.jpg' },
  { id: 'cough-syrup', name: 'Cough Syrup 100ml', desc: 'Soothing cough syrup', price: 75, stock: 45, image: base + '/images/products/cough-syrup.jpg' },
  { id: 'vitamin-c', name: 'Vitamin C 500mg', desc: '30 tablets — immunity support', price: 120, stock: 60, image: base + '/images/products/vitamin-c.jpg' },
  { id: 'bandage-pack', name: 'Bandage Pack', desc: 'Assorted sizes for first aid', price: 40, stock: 200, image: base + '/images/products/bandage-pack.jpg' }
]

export default products
