M.course = M.course || {};
M.course.format = M.course.format || {};
M.course.format.get_config = function () {
    return {
        container_node: "ul", container_class: "tiles", section_node: "li", section_class: "section"
    }
};
M.course.format.process_sections = function (Y, sectionlist, response, sectionfrom, sectionto) {
    var CSS = {
        SECTIONNAME: "sectionname"
    }, SELECTORS = {
        SECTIONLEFTSIDE: ".left .section-handle .icon"
    };
    if (response.action === "move") {
        if (sectionfrom > sectionto) {
            var temp = sectionto; sectionto = sectionfrom; sectionfrom = temp
        }
        var ele, str, stridx, newstr; for (var i = sectionfrom; i <= sectionto; i++){
            sectionlist.item(i).one("." + CSS.SECTIONNAME).setContent(response.sectiontitles[i]);
            ele = sectionlist.item(i).one(SELECTORS.SECTIONLEFTSIDE);
            str = ele.getAttribute("alt");
            stridx = str.lastIndexOf(" "); newstr = str.substr(0, stridx + 1) + i;
            ele.setAttribute("alt", newstr); ele.setAttribute("title", newstr);
            var url = ele.getAttribute("href"); stridx = url.lastIndexOf("section=");
            var newurl = url.substr(0, stridx + 8) + i; ele.setAttribute("href", newurl);
            ele2.setAttribute("href", newurl)
        }
    }
}