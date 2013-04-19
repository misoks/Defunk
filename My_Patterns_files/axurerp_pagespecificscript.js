for(var i = 0; i < 157; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToPanelStateChangeFunction['u24'] = function() {
var e = windowEvent;

if (((GetGlobalVariableValue('OnLoadVariable')) == ('true')) && ((GetGlobalVariableValue('EventEdited')) == ('true'))) {

	SetPanelState('u24', 'pd5u24','none','',500,'none','',500);

}

}

if (bIE) document.getElementById('u128').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u128'); });
else {
    document.getElementById('u128').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u128'); }, true);
    document.getElementById('u128').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u128'); }, true);
}

widgetIdToDragDropFunction['u128'] = function() {
var e = windowEvent;

if ((GetPanelState('u24')) == ('pd0u24')) {

	SetPanelState('u24', 'pd2u24','none','',500,'none','',500);

	SetPanelState('u128', 'pd1u128','none','',500,'none','',500);

}
else
if ((GetPanelState('u24')) == ('pd2u24')) {

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

	SetPanelState('u128', 'pd0u128','none','',500,'none','',500);

}
else
if ((GetPanelState('u24')) == ('pd3u24')) {

	SetPanelState('u24', 'pd4u24','none','',500,'none','',500);

	SetPanelState('u128', 'pd1u128','none','',500,'none','',500);

}
else
if ((GetPanelState('u24')) == ('pd4u24')) {

	SetPanelState('u24', 'pd3u24','none','',500,'none','',500);

	SetPanelState('u128', 'pd0u128','none','',500,'none','',500);

}

}
document.getElementById('u155_img').tabIndex = 0;

u155.style.cursor = 'pointer';
$axure.eventManager.click('u155', function(e) {

if ((GetPanelState('u24')) == ('pd0u24')) {

	SetPanelState('u24', 'pd3u24','none','',500,'none','',500);

}
else
if ((GetPanelState('u24')) == ('pd3u24')) {

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

}
else
if ((GetPanelState('u24')) == ('pd1u24')) {

	SetPanelState('u24', 'pd3u24','none','',500,'none','',500);

}
else
if ((GetPanelState('u24')) == ('pd2u24')) {

	SetPanelState('u24', 'pd4u24','none','',500,'none','',500);

}
else
if ((GetPanelState('u24')) == ('pd4u24')) {

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

}
});
gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u28'] = 'center';u29.tabIndex = 0;

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Edit_Event.html');

}
});
gv_vAlignTable['u100'] = 'center';document.getElementById('u101_img').tabIndex = 0;

u101.style.cursor = 'pointer';
$axure.eventManager.click('u101', function(e) {

if (true) {

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

}
});
gv_vAlignTable['u102'] = 'center';document.getElementById('u103_img').tabIndex = 0;

u103.style.cursor = 'pointer';
$axure.eventManager.click('u103', function(e) {

if (true) {

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

}
});
gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u106'] = 'center';u107.tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Edit_Event.html');

}
});
document.getElementById('u108_img').tabIndex = 0;

u108.style.cursor = 'pointer';
$axure.eventManager.click('u108', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Edit_Event.html');

}
});
gv_vAlignTable['u109'] = 'center';document.getElementById('u30_img').tabIndex = 0;

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Edit_Event.html');

}
});
gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u10'] = 'center';document.getElementById('u11_img').tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Goals.html');

}
});
gv_vAlignTable['u12'] = 'center';document.getElementById('u13_img').tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Settings.html');

}
});
gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u16'] = 'center';document.getElementById('u111_img').tabIndex = 0;

u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

}
});
gv_vAlignTable['u112'] = 'center';document.getElementById('u113_img').tabIndex = 0;

u113.style.cursor = 'pointer';
$axure.eventManager.click('u113', function(e) {

if (true) {

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

}
});
gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u118'] = 'center';u119.tabIndex = 0;

u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Edit_Event.html');

}
});
gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u48'] = 'center';document.getElementById('u120_img').tabIndex = 0;

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Edit_Event.html');

}
});
gv_vAlignTable['u121'] = 'center';document.getElementById('u123_img').tabIndex = 0;

u123.style.cursor = 'pointer';
$axure.eventManager.click('u123', function(e) {

if (true) {

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

}
});
gv_vAlignTable['u124'] = 'center';document.getElementById('u125_img').tabIndex = 0;

u125.style.cursor = 'pointer';
$axure.eventManager.click('u125', function(e) {

if (true) {

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

}
});
gv_vAlignTable['u126'] = 'center';document.getElementById('u0_img').tabIndex = 0;

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
gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u58'] = 'top';gv_vAlignTable['u36'] = 'center';document.getElementById('u37_img').tabIndex = 0;

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

}
});
gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u132'] = 'center';gv_vAlignTable['u134'] = 'center';gv_vAlignTable['u136'] = 'center';gv_vAlignTable['u138'] = 'center';gv_vAlignTable['u139'] = 'top';gv_vAlignTable['u150'] = 'top';gv_vAlignTable['u151'] = 'top';document.getElementById('u152_img').tabIndex = 0;

u152.style.cursor = 'pointer';
$axure.eventManager.click('u152', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u147'] = 'center';document.getElementById('u148_img').tabIndex = 0;

u148.style.cursor = 'pointer';
$axure.eventManager.click('u148', function(e) {

if (true) {

	SetPanelState('u24', 'pd2u24','none','',500,'none','',500);

}
});
gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u34'] = 'center';document.getElementById('u35_img').tabIndex = 0;

u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

}
});
gv_vAlignTable['u153'] = 'center';