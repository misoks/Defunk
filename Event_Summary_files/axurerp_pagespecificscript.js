for(var i = 0; i < 45; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u31', '<p style="text-align:left;"><span style="font-family:Segoe UI;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">' + (GetGlobalVariableValue('SetLocation')) + '</span></p>');

SetWidgetRichText('u32', '<p style="text-align:left;"><span style="font-family:Segoe UI;font-size:16px;font-weight:normal;font-style:normal;text-decoration:none;color:#009999;">' + (GetGlobalVariableValue('SetActivities1')) + ', ' + (GetGlobalVariableValue('SetActivities2')) + ', ' + (GetGlobalVariableValue('SetActivities3')) + '</span></p>');

SetWidgetRichText('u35', '<p style="text-align:center;"><span style="font-family:Segoe UI;font-size:18px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;">Awesome</span><span style="font-family:Segoe UI;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">!</span></p><p style="text-align:center;"><span style="font-family:Segoe UI;font-size:8px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;text-decoration:none;">&nbsp;</span></p><p style="text-align:center;"><span style="font-family:Segoe UI;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">You just made progress towards your goal </span></p><p style="text-align:center;"><span style="font-family:Segoe UI;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;">' + (GetGlobalVariableValue('AddedGoal1')) + '</span></p>');

}

});
gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u35'] = 'center';document.getElementById('u36_img').tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

SetGlobalVariableValue('EventEdited', 'true');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home_Page.html');

}
});
gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u39'] = 'center';document.getElementById('u0_img').tabIndex = 0;

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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('My_Patterns.html');

}
});
document.getElementById('u42_img').tabIndex = 0;

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u10'] = 'center';document.getElementById('u11_img').tabIndex = 0;

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
gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u18'] = 'center';