var ww = document.body.clientWidth;
var delay=300, setTimeoutConst;
var subUL_Left_Position;
$(document).ready(function() {
	$(".nav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	});
	$(".toggleMenu").hover(
	  function() {
	  	clearTimeout(setTimeoutConst);
	    delayMenu();
	  }, function() {
	    setTimeoutConst = setTimeout(function(){
	    	$(".nav li").toggleClass();
	    	delayOutMenu();
	    }, delay);
	  }
	);
	adjustMenu();
})
function delayMenu() {
	$(".nav").show();
}
function delayOutMenu() {
	$(".nav").hide();
}
$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});
var adjustMenu = function() {
	if (ww < 999) {
		var $menu = "";
		subUL_Left_Position = -9000;
		$('#category_1').menuAim({activate: nullEventMenu,deactivate: nullEventMenu,exitMenu: nullEventMenu});
		$('#category_2').menuAim({activate: nullEventMenu,deactivate: nullEventMenu,exitMenu: nullEventMenu});
		$('#category_3').menuAim({activate: nullEventMenu,deactivate: nullEventMenu,exitMenu: nullEventMenu});
		$('#category_4').menuAim({activate: nullEventMenu,deactivate: nullEventMenu,exitMenu: nullEventMenu});
		$('#category_5').menuAim({activate: nullEventMenu,deactivate: nullEventMenu,exitMenu: nullEventMenu});
		$('#category_6').menuAim({activate: nullEventMenu,deactivate: nullEventMenu,exitMenu: nullEventMenu});
		$('#category_7').menuAim({activate: nullEventMenu,deactivate: nullEventMenu,exitMenu: nullEventMenu});
		$('#category_8').menuAim({activate: nullEventMenu,deactivate: nullEventMenu,exitMenu: nullEventMenu});
		$('#category_9').menuAim({activate: nullEventMenu,deactivate: nullEventMenu,exitMenu: nullEventMenu});

		$(".toggleMenu").css("display", "inline-block");
		if (!$(".toggleMenu").hasClass("active")) {
			$(".nav").hide();
		} else {
			$(".nav").show();
		}
		$(".nav li").unbind('mouseenter mouseleave');
		$(".nav li a.parent").unbind('click').bind('click', function(e) {
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
	}
	else if (ww >= 999) {
		subUL_Left_Position=200;
		$(".toggleMenu").css("display", "inline-block");
		$(".nav").hide();
		$(".nav li").removeClass("hover");
		$(".nav li a").unbind('click');
		var $menu = $('.nav');
		$menu.menuAim({activate: activateSubmenu,deactivate: deactivateSubmenu,exitMenu: deactivateMenu});
		$('#category_1').menuAim({activate: activateSubSubmenu,deactivate: deactivateSubSubmenu,exitMenu: deactivateSubMenu});
		$('#category_2').menuAim({activate: activateSubSubmenu,deactivate: deactivateSubSubmenu,exitMenu: deactivateSubMenu});
		$('#category_3').menuAim({activate: activateSubSubmenu,deactivate: deactivateSubSubmenu,exitMenu: deactivateSubMenu});
		$('#category_4').menuAim({activate: activateSubSubmenu,deactivate: deactivateSubSubmenu,exitMenu: deactivateSubMenu});
		$('#category_5').menuAim({activate: activateSubSubmenu,deactivate: deactivateSubSubmenu,exitMenu: deactivateSubMenu});
		$('#category_6').menuAim({activate: activateSubSubmenu,deactivate: deactivateSubSubmenu,exitMenu: deactivateSubMenu});
		$('#category_7').menuAim({activate: activateSubSubmenu,deactivate: deactivateSubSubmenu,exitMenu: deactivateSubMenu});
		$('#category_8').menuAim({activate: activateSubSubmenu,deactivate: deactivateSubSubmenu,exitMenu: deactivateSubMenu});
		$('#category_9').menuAim({activate: activateSubSubmenu,deactivate: deactivateSubSubmenu,exitMenu: deactivateSubMenu});
	}
}

function deactivateMenu() {
    //$(".nav").hide();
    return true;
    clearTimeout(setTimeoutConst);
}

function activateSubmenu(row) {
	var $row=$(row), submenuId = $row.data("submenuId"), $submenu = $("#" + submenuId);
	if(submenuId=="category_9" ){
		subUL_Top_Position=-285;
	}else{
		subUL_Top_Position=-0;
	}
	$submenu.css({display: "block",top: subUL_Top_Position,left: subUL_Left_Position });
	$row.addClass("maintainHover");
}
function deactivateSubmenu(row) {
    var $row = $(row), submenuId = $row.data("submenuId"), $submenu = $("#" + submenuId);
    $submenu.css("display", "none");
    $row.removeClass("maintainHover");
}
function deactivateSubMenu() {
    //$(".subNav").hide();
    return true;
}

function activateSubSubmenu(row) {
	var $row=$(row), submenuId = $row.data("submenuId"), $submenu = $("#" + submenuId);
	$submenu.css({display: "block",top: 0,left: subUL_Left_Position });
	$row.addClass("maintainHover");
}
function deactivateSubSubmenu(row) {
    var $row = $(row), submenuId = $row.data("submenuId"), $submenu = $("#" + submenuId);
    $submenu.css("display", "none");
    $row.removeClass("maintainHover");
    clearTimeout(setTimeoutConst);
}
function nullEventMenu(row) {}


