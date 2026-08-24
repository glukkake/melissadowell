// Runs synchronously before first paint so a stored theme choice is applied with
// no flash of the wrong colors. If the user has NOT made an explicit choice, no
// attribute is set and the CSS `prefers-color-scheme` media query decides — which
// means dark mode still works with JavaScript disabled.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
