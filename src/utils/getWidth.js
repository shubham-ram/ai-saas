const getWidth = (span = 12) => {
    const width = (span / 12) * 100
    return width.toFixed(2);
}
export default getWidth