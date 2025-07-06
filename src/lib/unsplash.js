// Serviço de integração com a API Unsplash
// A chave da API é definida uma única vez aqui

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const UNSPLASH_API_URL = 'https://api.unsplash.com';

/**
 * Busca imagens no Unsplash
 * @param {string} query - Termo de busca
 * @param {number} perPage - Número de imagens por página (padrão: 10)
 * @param {number} page - Página (padrão: 1)
 * @returns {Promise<Object>} - Resposta da API do Unsplash
 */
export const searchImages = async (query, perPage = 10, page = 1) => {
  try {
    const response = await fetch(
      `${UNSPLASH_API_URL}/search/photos?query=${encodeURIComponent(query)}&per_page=${perPage}&page=${page}`,
      {
        headers: {
          'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Erro na API Unsplash: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar imagens no Unsplash:', error);
    throw error;
  }
};

/**
 * Obtém uma imagem aleatória do Unsplash
 * @param {string} query - Termo de busca (opcional)
 * @param {string} orientation - Orientação da imagem (landscape, portrait, squarish)
 * @returns {Promise<Object>} - Dados da imagem
 */
export const getRandomImage = async (query = '', orientation = 'landscape') => {
  try {
    const url = new URL(`${UNSPLASH_API_URL}/photos/random`);
    if (query) url.searchParams.append('query', query);
    url.searchParams.append('orientation', orientation);

    const response = await fetch(url.toString(), {
      headers: {
        'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Erro na API Unsplash: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao obter imagem aleatória do Unsplash:', error);
    throw error;
  }
};

/**
 * Obtém detalhes de uma imagem específica
 * @param {string} imageId - ID da imagem no Unsplash
 * @returns {Promise<Object>} - Dados detalhados da imagem
 */
export const getImageDetails = async (imageId) => {
  try {
    const response = await fetch(`${UNSPLASH_API_URL}/photos/${imageId}`, {
      headers: {
        'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Erro na API Unsplash: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao obter detalhes da imagem:', error);
    throw error;
  }
};

