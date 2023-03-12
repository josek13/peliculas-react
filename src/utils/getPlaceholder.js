import placeholder from "../placeholder.jpg";

export function getPlaceholder(path, width) {
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}