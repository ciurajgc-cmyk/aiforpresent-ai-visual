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
      
      // Primero buscar por nombre exacto, luego con like para manejar espacios/saltos de línea
      let { data, error } = await supabase
        .from('Contacto')
        .select('nombre, telefono, email, direccion')
        .eq('nombre', 'AIFORPRESENT')
        .maybeSingle();

      // Si no encuentra nada, buscar con LIKE por si hay espacios o saltos de línea
      if (!data) {
        const { data: likeData, error: likeError } = await supabase
          .from('Contacto')
          .select('nombre, telefono, email, direccion')
          .ilike('nombre', '%AIFORPRESENT%')
          .maybeSingle();
        
        data = likeData;
        error = likeError;
      }

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching contact info:', error);
        setError('No se pudo cargar la información de contacto');
        return;
      }

      if (data) {
        setContactInfo({
          nombre: data.nombre.trim(),
          telefono: data.telefono,
          email: data.email,
          direccion: data.direccion
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