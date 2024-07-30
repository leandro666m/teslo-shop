

export const generatePaginationNumbers = (currentPage: number, totalPages: number) => {
    
    // si el nro total de paginas es 7 o menos, mostrar todas las paginas sin puntos suspensivos
    if (totalPages <= 7) {
        return Array.from( { length: totalPages }, (_, i) => i + 1 ); // [1, 2, 3, 4, 5, 6, 7]
    }

    // si la pagina actual está entre las primeras 3 paginas, mostrar las primeras 3, puntos suspensivos y las ultimas 2 paginas
    if (currentPage <= 3) {
        return [1, 2, 3, '...', totalPages - 1, totalPages]; // [1, 2, 3, '...', 9, 10]
    }

    // si la pagina actual esta entre las ultimas 3 paginas, mostrar las primeras 2, puntos suspensivos, las ultimas 3 paginas
    if (currentPage > totalPages - 3) {
        return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages]; // [1, 2, '...', 8, 9, 10]
    }

    // si la pagina actual esta en otro lugar (al medio), mostra la primera pagina, puntos suspensivos, la pagina actual y vecinos
    return [ 1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages ]; // [1, '...', 4, 5, 6, '...', 10]

}