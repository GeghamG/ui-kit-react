import { createGlobalStyle, css } from 'styled-components';
import { color, typography, spacing } from './styles';

export const fontUrl =
   'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap';

export const bodyStyles = css`
   font-family: ${typography.type.primary};
   font-size: ${typography.size.s3}px;
   color: ${color.darkest};
   margin: 0;
   overflow-y: auto;
   overflow-x: hidden;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
   -webkit-tap-highlight-color: transparent;
   -webkit-overflow-scrolling: touch;
   letter-spacing: 0.1px;

   *,
   *:before,
   *:after {
      box-sizing: border-box;
   }

   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      font-weight: ${typography.weight.semibold};
      margin: 0;
      padding: 0;
   }

   button,
   input,
   textarea,
   select {
      outline: none;
      font-family: ${typography.type.primary};
   }

   sub,
   sup {
      font-size: 0.8em;
   }

   sub {
      bottom: -0.2em;
   }

   sup {
      top: -0.2em;
   }

   b,
   em {
      font-weight: ${typography.weight.bold};
   }

   hr {
      border: none;
      border-top: 1px solid ${color.border};
      clear: both;
      margin-bottom: 1.25rem;
   }

   code,
   pre {
      font-family: ${typography.type.code};
      font-size: ${typography.size.s2 - 1}px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }

   code {
      display: inline-block;
      padding-left: 2px;
      padding-right: 2px;
      vertical-align: baseline;
      color: ${color.secondary};
   }

   pre {
      line-height: 18px;
      padding: 11px 1rem;
      white-space: pre-wrap;
      background: rgba(0, 0, 0, 0.05);
      color: ${color.darkest};
      border-radius: 3px;
      margin: 1rem 0;
   }

   &.ReactModal__Body--open {
      overflow: hidden;
   }

   .ReactModalPortal > div {
      opacity: 0;
   }

   .ReactModalPortal .ReactModal__Overlay {
      transition: all 200ms ease-in;
      &--after-open {
         opacity: 1;
      }
      &--before-close {
         opacity: 0;
      }
   }
`;

export const GlobalStyle = createGlobalStyle`
	body {
		${bodyStyles}
	}
`;

export default {
   color,
   typography,
   spacing,
};
