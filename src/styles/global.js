import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    bpx-sizing: border-box;
    outline: 0;
}

body, input, button {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}
`;
