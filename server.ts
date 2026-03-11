import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import Database from "better-sqlite3";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("database.sqlite");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT,
    name TEXT,
    is_paid INTEGER DEFAULT 0,
    coding_score INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    razorpay_order_id TEXT,
    amount INTEGER,
    status TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
  );
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/auth/register", (req, res) => {
    const { email, password, name } = req.body;
    try {
      const stmt = db.prepare("INSERT INTO users (email, password, name) VALUES (?, ?, ?)");
      const info = stmt.run(email, password, name);
      res.json({ success: true, userId: info.lastInsertRowid });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  });

  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    const user = db.prepare("SELECT * FROM users WHERE email = ? AND password = ?").get(email, password) as any;
    if (user) {
      res.json({ success: true, user: { id: user.id, email: user.email, name: user.name, is_paid: user.is_paid, codingScore: user.coding_score } });
    } else {
      res.status(401).json({ success: false, error: "Invalid credentials" });
    }
  });

  app.get("/api/user/:id", (req, res) => {
    const user = db.prepare("SELECT id, email, name, is_paid, coding_score FROM users WHERE id = ?").get(req.params.id) as any;
    if (user) {
      res.json({ success: true, user: { ...user, codingScore: user.coding_score } });
    } else {
      res.status(404).json({ success: false, error: "User not found" });
    }
  });

  // Mock Razorpay Order Creation
  app.post("/api/payment/create-order", (req, res) => {
    const { userId, amount } = req.body;
    const orderId = `order_${Math.random().toString(36).slice(2)}`;
    const stmt = db.prepare("INSERT INTO orders (user_id, razorpay_order_id, amount, status) VALUES (?, ?, ?, ?)");
    stmt.run(userId, orderId, amount, "created");
    res.json({ success: true, orderId, amount });
  });

  app.post("/api/payment/verify", (req, res) => {
    const { userId, orderId } = req.body;
    // In a real app, verify signature here
    db.prepare("UPDATE orders SET status = 'paid' WHERE razorpay_order_id = ?").run(orderId);
    db.prepare("UPDATE users SET is_paid = 1 WHERE id = ?").run(userId);
    res.json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
