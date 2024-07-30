const fs = require('fs');
const path = require('path');

function hexToHSL(hex) {
  let r = 0, g = 0, b = 0;
  if (hex.length == 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length == 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }

  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return { h, s, l };
}

function HSLToHex(h, s, l) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  const toHex = x => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function adjustLightness(hex, percentage) {
  const { h, s, l } = hexToHSL(hex);
  const newL = Math.max(0, Math.min(1, l + percentage));
  return HSLToHex(h, s, newL);
}

function editCSS(cssContent, baseColor) {
  const variations = {
    '--ifm-color-primary': baseColor,
    '--ifm-color-primary-dark': adjustLightness(baseColor, -0.2),
    '--ifm-color-primary-darker': adjustLightness(baseColor, -0.3),
    '--ifm-color-primary-darkest': adjustLightness(baseColor, -0.4),
    '--ifm-color-primary-light': adjustLightness(baseColor, 0.2),
    '--ifm-color-primary-lighter': adjustLightness(baseColor, 0.3),
    '--ifm-color-primary-lightest': adjustLightness(baseColor, 0.4),
  };

  let updatedCSS = cssContent;

  for (const [variable, value] of Object.entries(variations)) {
    const regex = new RegExp(`${variable}:\\s*[^;]+;`, 'g');
    updatedCSS = updatedCSS.replace(regex, `${variable}: ${value};`);
  }

  return updatedCSS;
}


const manageCss = () => {
  const configFilePath = path.join(__dirname, 'config.json');
  const cssFilePath = path.join(__dirname, './src/css/custom.css');
  
  fs.readFile(configFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the config file:', err);
      return;
    }
  
    const config = JSON.parse(data);
    const { mainColor } = config.styles;

    fs.readFile(cssFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the CSS file:', err);
        return;
      }
    
      const updatedCSS = editCSS(data, mainColor);
    
      fs.writeFile(cssFilePath, updatedCSS, 'utf8', (err) => {
        if (err) {
          console.error('Error writing the CSS file:', err);
        } else {
          console.log('CSS file updated successfully.');
        }
      });
    });
  });
}

manageCss();