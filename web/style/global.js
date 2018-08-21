import { injectGlobal } from 'styled-components';
import getConfig from 'next/config';

const { publicRuntimeConfig: { staticFolder = '' } = {} } = getConfig() || {};

export default injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');

  @font-face {
    font-family: 'icoalmundo';
    src: url('${staticFolder}/fonts/icoalmundo.eot');
    src: url('${staticFolder}/fonts/icoalmundo.eot?#iefix') format('embedded-opentype'),
         url('${staticFolder}/fonts/icoalmundo.woff') format('woff'),
         url('${staticFolder}/fonts/icoalmundo.ttf') format('truetype'),
         url('${staticFolder}/fonts/icoalmundo.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    font-family: Roboto, sans-serif;
  }
  
  [class^="icon-"], [class*=" icon-"] {
    font-family: 'icoalmundo' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
  
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .icon-search:before {
    content: "\\e900";
  }
  .icon-star:before {
    content: "\\e901";
  }
  .icon-bathrobes:before {
    content: "\\e902";
  }
  .icon-bathtub:before {
    content: "\\e903";
  }
  .icon-beach-pool-facilities:before {
    content: "\\e904";
  }
  .icon-beach:before {
    content: "\\e905";
  }
  .icon-business-center:before {
    content: "\\e906";
  }
  .icon-children-club:before {
    content: "\\e907";
  }
  .icon-coffe-maker:before {
    content: "\\e908";
  }
  .icon-deep-soaking-bathtub:before {
    content: "\\e909";
  }
  .icon-fitness-center:before {
    content: "\\e90a";
  }
  .icon-garden:before {
    content: "\\e90b";
  }
  .icon-kitchen-facilities:before {
    content: "\\e90c";
  }
  .icon-newspaper:before {
    content: "\\e90d";
  }
  .icon-nightclub:before {
    content: "\\e90e";
  }
  .icon-restaurant:before {
    content: "\\e90f";
  }
  .icon-safety-box:before {
    content: "\\e910";
  }
  .icon-separate-bredroom:before {
    content: "\\e911";
  }
  .icon-sheets:before {
    content: "\\e912";
  }
`;
