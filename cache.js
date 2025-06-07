/**
 * Sistema de caché para mejorar el rendimiento
 * 
 * Este sistema permite:
 * 1. Almacenar datos en caché con tiempo de expiración
 * 2. Recuperar datos de la caché
 * 3. Limpiar elementos expirados automáticamente
 */

const CacheSystem = {
  // Versión de la caché para invalidación
  version: '1.0.0',
  
  // Guardar un elemento en la caché
  set: function(key, data, ttlMinutes = 60) {
    try {
      const now = new Date().getTime();
      const expiry = now + (ttlMinutes * 60 * 1000);
      
      const cacheItem = {
        data: data,
        expiry: expiry,
        version: this.version
      };
      
      localStorage.setItem(`cache_${key}`, JSON.stringify(cacheItem));
      return true;
    } catch (error) {
      console.error('Error al guardar en caché:', error);
      return false;
    }
  },
  
  // Obtener un elemento de la caché
  get: function(key) {
    try {
      const cacheData = localStorage.getItem(`cache_${key}`);
      
      if (!cacheData) {
        return null;
      }
      
      const cacheItem = JSON.parse(cacheData);
      const now = new Date().getTime();
      
      // Verificar si el elemento ha expirado o es de una versión anterior
      if (now > cacheItem.expiry || cacheItem.version !== this.version) {
        this.remove(key);
        return null;
      }
      
      return cacheItem.data;
    } catch (error) {
      console.error('Error al recuperar de caché:', error);
      return null;
    }
  },
  
  // Eliminar un elemento de la caché
  remove: function(key) {
    localStorage.removeItem(`cache_${key}`);
  },
  
  // Limpiar toda la caché
  clear: function() {
    const keysToRemove = [];
    
    // Encontrar todas las claves de caché
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('cache_')) {
        keysToRemove.push(key);
      }
    }
    
    // Eliminar las claves
    keysToRemove.forEach(key => localStorage.removeItem(key));
  },
  
  // Limpiar elementos expirados
  cleanup: function() {
    const now = new Date().getTime();
    const keysToRemove = [];
    
    // Encontrar elementos expirados
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('cache_')) {
        try {
          const cacheItem = JSON.parse(localStorage.getItem(key));
          if (now > cacheItem.expiry || cacheItem.version !== this.version) {
            keysToRemove.push(key);
          }
        } catch (e) {
          // Si hay un error al parsear, eliminar la entrada
          keysToRemove.push(key);
        }
      }
    }
    
    // Eliminar elementos expirados
    keysToRemove.forEach(key => localStorage.removeItem(key));
    
    return keysToRemove.length;
  }
};

// Ejecutar limpieza automática al cargar
window.addEventListener('load', function() {
  setTimeout(() => {
    const removed = CacheSystem.cleanup();
    if (removed > 0) {
      console.log(`Caché: Se eliminaron ${removed} elementos expirados`);
    }
  }, 2000);
});