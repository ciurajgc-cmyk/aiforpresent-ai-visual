-- Fix security issues
-- 1. Add RLS policy for contacto table (making it readable by everyone since it's public info)
CREATE POLICY "Allow public read access to contacto" ON contacto
FOR SELECT USING (true);

-- 2. Fix the function search path security issue
CREATE OR REPLACE FUNCTION get_public_contacto(search_name TEXT DEFAULT NULL)
RETURNS TABLE (
  nombre TEXT,
  telefono TEXT,
  email TEXT, 
  direccion TEXT
) 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COALESCE(c.nombre, '') as nombre,
    COALESCE(c.telefono, '') as telefono,
    COALESCE(c.email, '') as email,
    COALESCE(c.direcccion, '') as direccion
  FROM contacto c
  WHERE search_name IS NULL OR UPPER(c.nombre) = UPPER(search_name)
  LIMIT 1;
END;
$$;