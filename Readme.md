# use-system-mode

This React Hook allows you to determine your system´s current Appearance Theme. It uses the CSS Feature MatchMedia to determine if dark mode is enabled or not.

## Browser Support

<p class="ciu_embed" data-feature="matchmedia" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
<a href="http://caniuse.com/#feat=matchmedia">
<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/image/matchmedia.webp">
<img src="https://caniuse.bitsofco.de/image/matchmedia.png" alt="Data on support for the matchmedia feature across the major browsers from caniuse.com">
</picture>
</a>
</p>

## Features

The library exposes two different hooks:

`useSystemMode()` allows you to get a reactive variable which contains either the value `light` or `dark`, depending on the selected theme.

`useIsDarkMode()` gives you a boolean variable which determines whether dark mode is enabled or not.

## Usage

```
const App = () => {
    const systemMode = useSystemMode()
    return (
        <div>
            <h1>System Mode: {systemMode}</h1>
        </div>
    )
}
```

```
const App = () => {
    const darkMode = useIsDarkMode()
    return (
        <div>
            {darkMode ? <h1>Dark Mode</h1> : <h1>Light Mode</h1>}
        </div>
    )
}
```
