//Add classes to element objects
function addClasses(element, classes) {
    classes.forEach(css_class => {
    element.classList.add(css_class);
    }) 
}

//Delete the last segments of an url
function url_trim(url, string) {
    return url.slice(0, url.indexOf(string))
}


export {addClasses, url_trim};