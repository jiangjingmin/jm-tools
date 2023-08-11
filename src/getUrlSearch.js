import { parse } from "querystring";

const getUrlSearch = () => parse(window.location.href.split("?")[1]);

export default getUrlSearch;
