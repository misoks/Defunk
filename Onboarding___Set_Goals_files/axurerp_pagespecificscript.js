for(var i = 0; i < 170; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('AddedGoal1', '');

}

});

if (bIE) document.getElementById('u120').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u120'); });
else {
    document.getElementById('u120').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u120'); }, true);
    document.getElementById('u120').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u120'); }, true);
}

widgetIdToSwipeRightFunction['u120'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u117', 'pd1u117','swing','right',500,'none','',500);

	SetPanelState('u120', 'pd1u120','swing','right',500,'none','',500);

	SetPanelVisibility('u122','hidden','fade',500);

}

}
gv_vAlignTable['u155'] = 'center';gv_vAlignTable['u157'] = 'center';gv_vAlignTable['u159'] = 'center';gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u88'] = 'center';document.getElementById('u0_img').tabIndex = 0;

u0.style.cursor = 'pointer';
$axure.eventManager.click('u0', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u160'] = 'top';gv_vAlignTable['u162'] = 'center';gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u166'] = 'center';
$axure.eventManager.focus('u167', function(e) {

if (true) {

SetWidgetFormText('u167', '');

}
});
document.getElementById('u168_img').tabIndex = 0;

u168.style.cursor = 'pointer';
$axure.eventManager.click('u168', function(e) {

if (true) {

SetGlobalVariableValue('AddedGoal1', GetWidgetText('u167'));

	SetPanelState('u3', 'pd1u3','none','',500,'none','',500);

SetWidgetRichText('u121', '<p style="text-align:left;"><span style="font-family:Segoe UI;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#006666;">' + (GetGlobalVariableValue('AddedGoal1')) + '</span></p>');

	SetPanelVisibility('u117','toggle','none',500);

	SetPanelVisibility('u122','toggle','none',500);

	SetPanelVisibility('u120','toggle','none',500);

	SetPanelState('u117', 'pd0u117','none','',500,'none','',500);

	SetPanelState('u120', 'pd0u120','none','',500,'none','',500);

}
});
gv_vAlignTable['u169'] = 'center';gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u91'] = 'top';u10.tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	SetPanelStatePrevious('u3',false,'none','',500,'none','',500);

}
});
gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u95'] = 'center';document.getElementById('u96_img').tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	SetPanelState('u3', 'pd2u3','none','',500,'none','',500);

}
});
gv_vAlignTable['u97'] = 'center';u98.tabIndex = 0;

u98.style.cursor = 'pointer';
$axure.eventManager.click('u98', function(e) {

if (true) {

	SetPanelState('u3', 'pd2u3','none','',500,'none','',500);

}
});
gv_vAlignTable['u98'] = 'top';document.getElementById('u99_img').tabIndex = 0;

u99.style.cursor = 'pointer';
$axure.eventManager.click('u99', function(e) {

if (true) {

	SetPanelState('u3', 'pd2u3','none','',500,'none','',500);

}
});
gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u32'] = 'center';document.getElementById('u11_img').tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	SetPanelStatePrevious('u3',false,'none','',500,'none','',500);

}
});
gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u113'] = 'center';
$axure.eventManager.focus('u114', function(e) {

if (true) {

SetWidgetFormText('u114', '');

}
});
document.getElementById('u115_img').tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

SetGlobalVariableValue('AddedGoal1', GetWidgetText('u114'));

SetWidgetRichText('u121', '<p style="text-align:left;"><span style="font-family:Segoe UI;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#006666;">' + (GetGlobalVariableValue('AddedGoal1')) + '</span></p>');

	SetPanelVisibility('u117','','none',500);

	SetPanelVisibility('u120','','none',500);

	SetPanelVisibility('u122','','none',500);

	SetPanelState('u117', 'pd0u117','none','',500,'none','',500);

	SetPanelState('u120', 'pd0u120','none','',500,'none','',500);

}
});
gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u121'] = 'top';gv_vAlignTable['u124'] = 'center';document.getElementById('u125_img').tabIndex = 0;

u125.style.cursor = 'pointer';
$axure.eventManager.click('u125', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Onboarding___Pick_Activities.html');

}
});
gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u7'] = 'center';document.getElementById('u8_img').tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	SetPanelStatePrevious('u3',false,'none','',500,'none','',500);

}
});
gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u130'] = 'center';document.getElementById('u131_img').tabIndex = 0;

u131.style.cursor = 'pointer';
$axure.eventManager.click('u131', function(e) {

if (true) {

	SetPanelState('u3', 'pd2u3','none','',500,'none','',500);

}
});
gv_vAlignTable['u132'] = 'center';u133.tabIndex = 0;

u133.style.cursor = 'pointer';
$axure.eventManager.click('u133', function(e) {

if (true) {

	SetPanelState('u3', 'pd2u3','none','',500,'none','',500);

}
});
gv_vAlignTable['u133'] = 'top';document.getElementById('u134_img').tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	SetPanelState('u3', 'pd2u3','none','',500,'none','',500);

}
});
gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u136'] = 'top';gv_vAlignTable['u138'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u140'] = 'center';gv_vAlignTable['u141'] = 'top';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u146'] = 'top';gv_vAlignTable['u148'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u151'] = 'top';gv_vAlignTable['u153'] = 'center';