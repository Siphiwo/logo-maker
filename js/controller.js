
// const api_key = 'AIzaSyDz8qNOWw12M6Lgfzle3ISTy1oBRkITqI4'
// const font_url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=' 
// change icon color 
const root = document.documentElement

const icon_color        = document.getElementById('icon_color')
const icon_size         = document.getElementById('icon_size')
const entered_title     = document.getElementById('entered_title')
const logo_alignment    = document.getElementById('icon_position')
const text_color        = document.getElementById('text_color')
const text_size         = document.getElementById('text_size')
const text_font         = document.getElementById('fonts_container')

// load google fonts 
// const getGoogleFonts = async() => {
//     const response = await fetch(font_url+api_key)
//     const data = await response.json()
//     console.log(data)
//     createFontSelectOptions(data.items)
// }
// getGoogleFonts()
// const createFontSelectOptions = fonts => {
//     const font_select = document.querySelector('#fonts_container')
//     for (let i = 0; i < 10; i++) {
//         var option      = document.createElement("option");
//         option.value    = fonts[i].family
//         option.text     = fonts[i].family
//         option.setAttribute('data-fontUrl', fonts[i].files.regular)
//        font_select.add(option)
//     }
// }
text_font.addEventListener('change', () => {
    root.style.setProperty('--font-family', `'${text_font.options[text_font.selectedIndex].value}', sans-serif`)
})
icon_color.addEventListener('change', () => {
    root.style.setProperty('--icon-color', icon_color.value)
})

icon_size.addEventListener('change', () => {
    root.style.setProperty('--icon-size', icon_size.value+'pt')
})

entered_title.addEventListener('change', () => {
    document.getElementById('display_title').innerHTML = entered_title.value
})

text_color.addEventListener('change', () => {
    root.style.setProperty('--title-color', text_color.value)
})

text_size.addEventListener('change', () => {
    root.style.setProperty('--title-size', text_size.value+'pt')
})

logo_alignment.addEventListener('change', () => {
    if (logo_alignment.options[logo_alignment.selectedIndex].value == 'left') {
        document.getElementById('capture').classList.add('display-flex')
    }
    if (logo_alignment.options[logo_alignment.selectedIndex].value == 'top') {
        document.getElementById('capture').classList.remove('display-flex')
    }
})



























// html2canvas(document.querySelector("#capture")).then(canvas => {
//     document.body.appendChild(canvas)
//     var imageData = canvas.toDataURL("image/png")
//     // var newData = imageData.replace(/^data:image/png/, "data:application/octet-stream")
//     $("#download").attr("download", "image.png").attr("href", imageData)
// });
// var amount_if_icons = 20
// var all_icons = []

// if (window.location.href.indexOf("selected_id") < 1) {
//     // download all icons and convert to svg 
//     const getIconsFromApi = async () => {
//         await fetch('https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/metadata/icons.json')
//                 .then(response => response.json())
//                 .then(data => {
//                     array_data = Object.entries(data)
//                     all_icons.push(Object.entries(data))
//                     icons_holder = document.querySelector('#icons')
    
//                     for (let i = 0; i < amount_if_icons; i++) {
    
//                         // convert into object 
//                         svg_path = Object.entries(array_data[i][1].svg)
//                         svg_path[0].push(array_data[i][1].label)
//                         icons_holder.appendChild(createIconElement(svg_path[0], i))
//                     }
//                 })
//                 .catch(error => console.log(error))

//     }
//     getIconsFromApi();
//   }

//   console.log(all_icons)

// const selectedIcon = (e, icon_id) => {
//     console.log(icon_id)
// }

// const createIconElement = (svg_data, icon_id) => {
//     let icon_element = `<a href="?selected_id=${icon_id}"><span class="px-2">${svg_data[1].raw}</span><small class="text-muted">${svg_data[2]}</small></a>`
//     new_span = document.createElement('li')
//     new_span.classList.add('display-icons')
//     new_span.classList.add('py-2')
//     new_span.innerHTML = icon_element
//     return new_span
// }

// let test = document.querySelector('a')
// console.log(test);