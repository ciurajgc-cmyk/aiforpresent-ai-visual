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

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('Contacto')
          .select('nombre, telefono, email, direccion')
          .eq('nombre', 'AIFORPRESENT')
          .single();

        if (error) {
          console.error('Error fetching contact info:', error);
          setError('No se pudo cargar la información de contacto');
          return;
        }

        if (data) {
          setContactInfo(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setError('Error inesperado al cargar la información');
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  return { contactInfo, loading, error };
};