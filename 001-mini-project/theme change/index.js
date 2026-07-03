const themeRadios = document.querySelectorAll('input[name="theme"]')

function applyTheme(theme){

    document.body.className = theme + '-theme'

    themeRadios.forEach(radio => {

        radio.checked = radio.value == theme

    })
}

themeRadios.forEach(radio => {

    radio.onchange = () => {

        applyTheme(radio.value)

    }
})

applyTheme('dark')