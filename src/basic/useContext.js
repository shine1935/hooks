import React, { useContext, useState } from 'react';
/**
 * 回调函数是否能传？
 */
const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext({ themes, toggle: () => { } });

export default function AppContext() {
    const [theme, setTheme] = useState(themes.light);
    return (
        <ThemeContext.Provider value={{
            theme,
            toggle: () => {
                setTheme(theme => {
                    console.log('theme', theme)
                    setTheme(theme === themes.light ? themes.dark : themes.light)
                })
            }
        }}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <div style={{ background: theme.theme.background, color: theme.theme.foreground }} >
            <button onClick={() => { theme.toggle() }}>
                I am styled by theme context!
            </button>
        </div>

    );
}