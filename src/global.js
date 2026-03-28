import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Inter", "Google Sans Regular", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background 0.3s ease, color 0.3s ease;
    min-height: 100vh;
  }

  /* Dark experience accordion */
  .bui-accordion-panel-content {
    background: ${({ theme }) => theme.body} !important;
  }

  .bui-accordion-panel-header {
    background: ${({ theme }) => theme.dark} !important;
    border: 1px solid rgba(0, 212, 255, 0.12) !important;
    border-radius: 12px !important;
    color: ${({ theme }) => theme.text} !important;
    font-family: "Inter", "Google Sans Regular", sans-serif !important;
    margin-bottom: 6px !important;
    transition: all 0.2s ease !important;
  }

  .bui-accordion-panel-header:hover {
    border-color: rgba(0, 212, 255, 0.28) !important;
    box-shadow: 0 4px 16px rgba(0, 212, 255, 0.08) !important;
  }
`;
