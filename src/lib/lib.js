function truncateString(str) {
    if (str.length > 50) {
        return str.slice(0, 50) + "...";
    } else {
        return str;
    }
}

export { truncateString }