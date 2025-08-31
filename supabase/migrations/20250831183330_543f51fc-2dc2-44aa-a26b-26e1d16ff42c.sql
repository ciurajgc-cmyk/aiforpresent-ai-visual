-- 1) Remove public read access from Contacto
DROP POLICY IF EXISTS "Allow public read access to contact information" ON public."Contacto";

-- Ensure RLS is enabled (safety)
ALTER TABLE public."Contacto" ENABLE ROW LEVEL SECURITY;

-- 2) Create an RPC that returns masked contact info for anonymous users
CREATE OR REPLACE FUNCTION public.get_public_contacto(search_name text DEFAULT 'AIFORPRESENT')
RETURNS TABLE (
  nombre text,
  telefono text,
  email text,
  direccion text
)
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT 
    trim(nombre) AS nombre,
    -- Mask all digits except the last 2 across any separators
    CASE 
      WHEN telefono IS NULL THEN NULL
      ELSE regexp_replace(telefono, '\\d(?=\\D*\\d{2}\\D*$)', '•', 'g')
    END AS telefono,
    -- Keep first up to 3 characters and the domain
    CASE 
      WHEN email IS NULL THEN NULL
      ELSE regexp_replace(email, '^(.{0,3}).*(@.*)$', '\\1***\\2')
    END AS email,
    -- Keep full address visible (adjust later if needed)
    direccion
  FROM public."Contacto"
  WHERE upper(trim(nombre)) LIKE ('%' || upper(search_name) || '%')
  ORDER BY created_at DESC
  LIMIT 1;
$$;

-- 3) Allow both anon and authenticated roles to execute the function
GRANT EXECUTE ON FUNCTION public.get_public_contacto(text) TO anon, authenticated;