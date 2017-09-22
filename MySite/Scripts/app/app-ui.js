
$(function () {  
    /*Layout*/
    //set active tab
    var active = $('#active-tab').val();
    $('#main-nav li').removeClass('active');
    $('#' + active).addClass('active')

    /*About Me/FAQ page*/
    //jQ ui accordion
    $('#professional-accordion').accordion({ heightStyle: "content" });
    $('#personal-accordion').accordion({ heightStyle: "content" });
    $('#faq-accordion').accordion({ heightStyle: "content" });

    /*Projects page*/   
    //init tiles    
    $(".project-icon").hover(
        function () {
            $(this).find('.icon-title').effect("bounce", 400);
        },
        function () {
            return;
        }
    );
    //tile click event
    $(".project-icon").click(function () {
        var id = $(this).find('input:hidden').val();
        //combine model with template        
        bindTemplate(my.projects[id])
        //open dialog
        $('#project-modal').modal();
    });
    
    
})

function bindTemplate(data) {
    $("#request-source").hide();
    $("#source-links").hide();

    //bind model members to template
    $('#p-title').html(data.title);
    $('#p-role').html(data.role);
    $('#p-tech').text(data.tech);
    $('#p-overview').html(data.overview);

    //append links to link div
    var links = data.link;
    //clear old links
    $('#p-links').html('');
    if (links.length > 0) {
        $("#source-links").show();
        if (links[0].url == '#') {
            var el = document.createElement('span');
            el.innerText = links[0].title;
            $('#p-links').append(el);
        } else {
            for (var i = 0; i < links.length; i++) {
                var lnk = links[i],
                    el = document.createElement('a');
                el.text = lnk.title;
                el.href = lnk.url;
                el.target = 'blank';
                el.classList.add('project-link');
                $('#p-links').append(el);
            }
        }
    }

    if (data.request == true) {
        $("#request-source").show();
        $("#request-source").find("a").click(function () { getRequestForm(data.title); });
    }
    
    
}
function getRequestForm(title) {
    try {
        blockEl("#project-dialog", true);
        $.get("/Request/NewRequestForm?project=" + title, function (resp) {
            $("#request-form").html(resp);
            $('#request-modal').modal();
            blockEl("#project-dialog", false);
        });
    } catch (err) {
        console.log(err.message);
    }
    
    
};

function blockEl(element, block) {
    var loader = '<img src="/Content/loaders/808.gif" />';
    if (block == true)
        $(element).block({ message: loader });
    else
        $(element).unblock({ message: loader });
};