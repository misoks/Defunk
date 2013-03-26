for(var i = 0; i < 57; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u28').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u28'); });
else {
    document.getElementById('u28').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u28'); }, true);
    document.getElementById('u28').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u28'); }, true);
}

widgetIdToDragDropFunction['u28'] = function() {
var e = windowEvent;

if ((GetPanelState('u16')) == ('pd0u16')) {

	SetPanelState('u16', 'pd2u16','none','',500,'none','',500);

	SetPanelState('u28', 'pd1u28','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd2u16')) {

	SetPanelState('u16', 'pd0u16','none','',500,'none','',500);

	SetPanelState('u28', 'pd0u28','none','',500,'none','',500);

}

}
gv_vAlignTable['u50'] = 'top';
u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

	SetPanelState('u16', 'pd1u16','none','',500,'none','',500);

}
});

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

	SetPanelState('u16', 'pd0u16','none','',500,'none','',500);

}
});
gv_vAlignTable['u53'] = 'top';document.getElementById('u54_img').tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u20'] = 'center';u21.tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Edit_Event.html');

}
});
gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'center';u26.tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Edit_Event.html');

}
});
gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u39'] = 'top';document.getElementById('u0_img').tabIndex = 0;

u0.style.cursor = 'pointer';
$axure.eventManager.click('u0', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';document.getElementById('u7_img').tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home_Page.html');

}
});
gv_vAlignTable['u8'] = 'center';document.getElementById('u9_img').tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u43'] = 'center';document.getElementById('u48_img').tabIndex = 0;

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

	SetPanelState('u16', 'pd2u16','none','',500,'none','',500);

}
});
gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u10'] = 'center';document.getElementById('u11_img').tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Goals.html');

}
});
gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u18'] = 'center';