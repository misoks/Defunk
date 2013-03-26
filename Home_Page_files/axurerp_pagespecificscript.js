for(var i = 0; i < 24; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u19', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">&#149; ' + (GetGlobalVariableValue('AddedGoal1')) + '</span></p>');

}

});

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Goals.html');

}
});
gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u5'] = 'center';document.getElementById('u6_img').tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('My_Patterns.html');

}
});
gv_vAlignTable['u7'] = 'center';document.getElementById('u8_img').tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Goals.html');

}
});
gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u23'] = 'top';