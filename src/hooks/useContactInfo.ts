import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ContactInfo {
  nombre: string;
  telefono: string;
  email: string;
  direccion: string;
}

export const useContactInfo = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContactInfo = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .rpc('get_public_contacto', { search_name: 'AIFORPRESENT' });

      if (error) {
        console.error('Error fetching contact info via RPC:', error);
        setError('No se pudo cargar la información de contacto');
        return;
      }

      if (data && data.length > 0) {
        const row = data[0] as any;
        setContactInfo({
          nombre: row?.nombre?.trim() ?? 'AIFORPRESENT',
          telefono: row?.telefono ?? '',
          email: row?.email ?? '',
          direccion: row?.direccion ?? ''
        });
      } else {
        setError('No se encontró información de contacto para AIFORPRESENT');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('Error inesperado al cargar la información');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const refetch = () => {
    fetchContactInfo();
  };

  return { contactInfo, loading, error, refetch };
};