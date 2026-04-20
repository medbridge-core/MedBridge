-- Add email column to user_requests if missing
ALTER TABLE user_requests ADD COLUMN IF NOT EXISTS email TEXT;

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  amount INTEGER DEFAULT 0,
  image_key TEXT DEFAULT '',
  price_label TEXT DEFAULT 'From',
  availability BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 99,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create cart_submissions table
CREATE TABLE IF NOT EXISTS cart_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_request_id UUID NOT NULL REFERENCES user_requests(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','confirmed','completed','cancelled')),
  total_amount INTEGER DEFAULT 0,
  notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_cart_submissions_user ON cart_submissions(user_request_id);

-- Create cart_items table
CREATE TABLE IF NOT EXISTS cart_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cart_submission_id UUID NOT NULL REFERENCES cart_submissions(id) ON DELETE CASCADE,
  service_id TEXT NOT NULL,
  service_title TEXT NOT NULL,
  price_at_submission INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_cart_items_submission ON cart_items(cart_submission_id);
CREATE INDEX IF NOT EXISTS idx_cart_items_service ON cart_items(service_id);
