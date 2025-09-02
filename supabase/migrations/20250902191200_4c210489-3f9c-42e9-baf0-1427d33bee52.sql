-- Create RPC function to get public contact info
CREATE OR REPLACE FUNCTION get_public_contacto(search_name TEXT DEFAULT NULL)
RETURNS TABLE (
  nombre TEXT,
  telefono TEXT,
  email TEXT,
  direccion TEXT
) 
LANGUAGE plpgsql
SECURITY DEFINER
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