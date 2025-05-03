export default class Selector{


    //-----------------------------------------------------
    id(id)
    {
        return $("#"+id);
    }
    //-----------------------------------------------------
    class(name)
    {
        return $("."+name);
    }
    //-----------------------------------------------------
    $(selector)
    {
        return $(selector);
    }
    //-----------------------------------------------------
    child(parent, child)
    {
        return $(parent).$$(child);
    }
    //-----------------------------------------------------
    attr(attribute, value)
    {
        return $('['+attribute+'="'+value+'"]');
    }
    //-----------------------------------------------------
    name(name,value=null)
    {
        let el = this.attr('name', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    //-----------------------------------------------------
    wdio(name,value=null)
    {
        let el = this.attr('data-wdio', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    //-----------------------------------------------------
    dusk(name,value=null)
    {
        let el = this.attr('dusk', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    //-----------------------------------------------------
    role(name)
    {
        return this.attr('role', name);
    }
    //-----------------------------------------------------
    testid(name,value=null)
    {
        let el = this.attr('data-testid', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    //-----------------------------------------------------
    arialabel(name, value=null)
    {
        let el = this.attr('aria-label', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    for(name){
        let el = this.attr('for', name);
        return el;
    }
    //-----------------------------------------------------
    placeholder(name, value=null){
        let el = this.attr('placeholder', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    //-----------------------------------------------------
    title(name, value=null){
        let el = this.attr('title', name);
        return el;
    }
    //-----------------------------------------------------
    href(name, value=null){
        let el = this.attr('href', name);
        return el;
    }
    //-----------------------------------------------------
    value(name, value=null){
        let el = this.attr('value', name);
        return el;
    }
    //-----------------------------------------------------
    findElementsByTestIdStartingWith(partialName) {
        return $$(`[data-testid^="${partialName}"]`);
    }
    //-----------------------------------------------------
    findElementsByTestIdEndingWith(partialName) {
        return $$(`[data-testid$="${partialName}"]`);
    }
    //-----------------------------------------------------
    getElementByTestIdEndingWith(partialName) {
        return $(`[data-testid$="${partialName}"]`);
    }
    //-----------------------------------------------------
    $$(selector)
    {
        return $$(selector);
    }
    //-----------------------------------------------------
    getElementByRegexTestid(startingWith, endingWith) {
        return $(`[data-testid^='${startingWith}'][data-testid$='${endingWith}']`);
    }
    //-----------------------------------------------------
    xpath(selector)
    {
        return $$(selector);
    }
    //-----------------------------------------------------
    partialTestid(name) {
        return $(`[data-testid$="${name}"]`);
    }
    //-----------------------------------------------------
    starttestid(name){
        return $(`[data-testid^='${name}']`);
    }
    //-----------------------------------------------------
    testids(name) {
        return  $$(`[data-testid="${name}"]`);
    }
    //-----------------------------------------------------
    partialTestids(name) {
        return $$(`[data-testid$="${name}"]`);
    }
 }
 