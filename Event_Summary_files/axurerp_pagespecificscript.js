for(var i = 0; i < 37; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u26', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('SetLocation')) + '</span></p>');

SetWidgetRichText('u27', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:normal;font-style:italic;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('SetActivities1')) + ', ' + (GetGlobalVariableValue('SetActivities2')) + ', ' + (GetGlobalVariableValue('SetActivities3')) + '</span></p>');

SetWidgetRichText('u31', '<p style="text-align:center;"><span style="font-family:Arial;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">Awesome</span><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">!</span></p><p style="text-align:center;"><span style="font-family:Arial;font-size:8px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;text-decoration:none;">&nbsp;</span></p><p style="text-align:center;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">You just made progress towards your goal </span></p><p style="text-align:center;"><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('AddedGoal1')) + '</span><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;"></span></p><p style="text-align:center;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">And won a new hat for Turtie!</span></p>');

}

});
gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u33'] = 'center';document.getElementById('u34_img').tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u35'] = 'center';document.getElementById('u0_img').tabIndex = 0;

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
gv_vAlignTable['u10'] = 'center';document.getElementById('u11_img').tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Goals.html');

}
});
gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u14'] = 'center';document.getElementById('u17_img').tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('My_Patterns.html');

}
});
gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u19'] = 'top';