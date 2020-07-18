export const getDescriptionById = (descriptions, bookId) => {
    const des = [...descriptions].filter(des => {
        return des.bookId == bookId
    })[0];
    return des ? des['description'] : null;
}
